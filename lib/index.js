"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _serviceApi = require("@frontender-magazine/service-api");

/**
 * Article Service API
 *
 * @namespace ArticleService
 * @module ArticleService
 * @class
 * @exports
 *
 * @param {string} url - service url
 * @param {string | null} [token = null] - user access tocken if available
 */
var ArticleService =
/*#__PURE__*/
function (_MicroServiceAPI) {
  (0, _inherits2["default"])(ArticleService, _MicroServiceAPI);

  function ArticleService() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ArticleService);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ArticleService)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "get",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(options) {
        var response, items;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _get2["default"])((0, _getPrototypeOf3["default"])(ArticleService.prototype), "request", (0, _assertThisInitialized2["default"])(_this)).call((0, _assertThisInitialized2["default"])(_this), _this.url, {
                  data: (0, _objectSpread2["default"])({}, options)
                });

              case 2:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 8;
                  break;
                }

                _context.next = 6;
                return response.json();

              case 6:
                items = _context.sent;
                return _context.abrupt("return", {
                  items: items,
                  headers: response.headers
                });

              case 8:
                throw new _serviceApi.ErrorServerResponse(response.status, response.statusText);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getByReponame",
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(reponame) {
        var response, json;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _get2["default"])((0, _getPrototypeOf3["default"])(ArticleService.prototype), "request", (0, _assertThisInitialized2["default"])(_this)).call((0, _assertThisInitialized2["default"])(_this), "".concat(_this.url, "/repository/").concat(reponame));

              case 2:
                response = _context2.sent;

                if (!response.ok) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 6;
                return response.json();

              case 6:
                json = _context2.sent;
                return _context2.abrupt("return", json);

              case 8:
                throw new _serviceApi.ErrorServerResponse(response.status, response.statusText);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getById",
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(id) {
        var response, json;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _get2["default"])((0, _getPrototypeOf3["default"])(ArticleService.prototype), "request", (0, _assertThisInitialized2["default"])(_this)).call((0, _assertThisInitialized2["default"])(_this), "".concat(_this.url, "/").concat(id));

              case 2:
                response = _context3.sent;

                if (!response.ok) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 6;
                return response.json();

              case 6:
                json = _context3.sent;
                return _context3.abrupt("return", json);

              case 8:
                throw new _serviceApi.ErrorServerResponse(response.status, response.statusText);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "post",
    /*#__PURE__*/
    function () {
      var _ref4 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(user) {
        var options, response, json;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(user)
                };
                _context4.next = 3;
                return (0, _get2["default"])((0, _getPrototypeOf3["default"])(ArticleService.prototype), "request", (0, _assertThisInitialized2["default"])(_this)).call((0, _assertThisInitialized2["default"])(_this), "".concat(_this.url), options);

              case 3:
                response = _context4.sent;

                if (!response.ok) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 7;
                return response.json();

              case 7:
                json = _context4.sent;
                return _context4.abrupt("return", json);

              case 9:
                throw new _serviceApi.ErrorServerResponse(response.status, response.statusText);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "put",
    /*#__PURE__*/
    function () {
      var _ref5 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(user) {
        var options, response, json;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                options = {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(user)
                };
                _context5.next = 3;
                return (0, _get2["default"])((0, _getPrototypeOf3["default"])(ArticleService.prototype), "request", (0, _assertThisInitialized2["default"])(_this)).call((0, _assertThisInitialized2["default"])(_this), "".concat(_this.url).concat(user._id), options);

              case 3:
                response = _context5.sent;

                if (!response.ok) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 7;
                return response.json();

              case 7:
                json = _context5.sent;
                return _context5.abrupt("return", json);

              case 9:
                if (!(response.status === 404)) {
                  _context5.next = 11;
                  break;
                }

                throw new _serviceApi.ErrorNotFound(ArticleService.messages.userNotFound);

              case 11:
                throw new _serviceApi.ErrorServerResponse(response.status, response.statusText);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "patch",
    /*#__PURE__*/
    function () {
      var _ref6 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(user) {
        var options, response, json;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                options = {
                  method: "PATCH",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(user)
                };
                _context6.next = 3;
                return (0, _get2["default"])((0, _getPrototypeOf3["default"])(ArticleService.prototype), "request", (0, _assertThisInitialized2["default"])(_this)).call((0, _assertThisInitialized2["default"])(_this), "".concat(_this.url).concat(user._id), options);

              case 3:
                response = _context6.sent;

                if (!response.ok) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 7;
                return response.json();

              case 7:
                json = _context6.sent;
                return _context6.abrupt("return", json);

              case 9:
                if (!(response.status === 404)) {
                  _context6.next = 11;
                  break;
                }

                throw new _serviceApi.ErrorNotFound(ArticleService.messages.userNotFound);

              case 11:
                throw new _serviceApi.ErrorServerResponse(response.status, response.statusText);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "details",
    /*#__PURE__*/
    function () {
      var _ref7 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(id) {
        var response, json;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _get2["default"])((0, _getPrototypeOf3["default"])(ArticleService.prototype), "request", (0, _assertThisInitialized2["default"])(_this)).call((0, _assertThisInitialized2["default"])(_this), "".concat(_this.url).concat(id));

              case 2:
                response = _context7.sent;

                if (!response.ok) {
                  _context7.next = 8;
                  break;
                }

                _context7.next = 6;
                return response.json();

              case 6:
                json = _context7.sent;
                return _context7.abrupt("return", json);

              case 8:
                if (!(response.status === 404)) {
                  _context7.next = 10;
                  break;
                }

                throw new _serviceApi.ErrorNotFound(ArticleService.messages.userNotFound);

              case 10:
                throw new _serviceApi.ErrorServerResponse(response.status, response.statusText);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "delete",
    /*#__PURE__*/
    function () {
      var _ref8 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(id) {
        var options, response;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                options = {
                  method: "DELETE"
                };
                _context8.next = 3;
                return (0, _get2["default"])((0, _getPrototypeOf3["default"])(ArticleService.prototype), "request", (0, _assertThisInitialized2["default"])(_this)).call((0, _assertThisInitialized2["default"])(_this), "".concat(_this.url).concat(id), options);

              case 3:
                response = _context8.sent;

                if (!response.ok) {
                  _context8.next = 6;
                  break;
                }

                return _context8.abrupt("return");

              case 6:
                if (!(response.status === 404)) {
                  _context8.next = 8;
                  break;
                }

                throw new _serviceApi.ErrorNotFound(ArticleService.messages.articleNotFound);

              case 8:
                throw new _serviceApi.ErrorServerResponse(response.status, response.statusText);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x8) {
        return _ref8.apply(this, arguments);
      };
    }());
    return _this;
  }

  return ArticleService;
}(_serviceApi.MicroServiceAPI);

exports["default"] = ArticleService;
(0, _defineProperty2["default"])(ArticleService, "messages", {
  articleNotFound: "User not found"
});
//# sourceMappingURL=index.js.map