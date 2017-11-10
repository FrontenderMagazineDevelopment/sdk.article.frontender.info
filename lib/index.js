'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);
    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ('value' in desc) {
    return desc.value;
  } else {
    var getter = desc.get;
    if (getter === undefined) {
      return undefined;
    }
    return getter.call(receiver);
  }
};

require('babel-polyfill');

var _tmServiceApi = require('tm-service-api');

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step('next', value);
            },
            function(err) {
              step('throw', err);
            },
          );
        }
      }
      return step('next');
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' + typeof superClass,
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

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
var ArticleService = (function(_TMMicroServiceAPI) {
  _inherits(ArticleService, _TMMicroServiceAPI);

  function ArticleService() {
    var _ref,
      _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, ArticleService);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = ArticleService.__proto__ || Object.getPrototypeOf(ArticleService)).call.apply(
          _ref,
          [this].concat(args),
        ),
      )),
      _this)),
      (_this.get = (function() {
        var _ref2 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee(options) {
            var response, json;
            return regeneratorRuntime.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return _get(
                        ArticleService.prototype.__proto__ ||
                          Object.getPrototypeOf(ArticleService.prototype),
                        'request',
                        _this,
                      ).call(_this, '' + _this.url, {
                        data: _extends({}, options),
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
                      json = _context.sent;
                      return _context.abrupt('return', json);

                    case 8:
                      throw new _tmServiceApi.ErrorServerResponse(
                        response.status,
                        response.statusText,
                      );

                    case 9:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              _this2,
            );
          }),
        );

        return function(_x) {
          return _ref2.apply(this, arguments);
        };
      })()),
      (_this.getByReponame = (function() {
        var _ref3 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(reponame) {
            var response, json;
            return regeneratorRuntime.wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.next = 2;
                      return _get(
                        ArticleService.prototype.__proto__ ||
                          Object.getPrototypeOf(ArticleService.prototype),
                        'request',
                        _this,
                      ).call(_this, _this.url + '/repository/' + reponame);

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
                      return _context2.abrupt('return', json);

                    case 8:
                      throw new _tmServiceApi.ErrorServerResponse(
                        response.status,
                        response.statusText,
                      );

                    case 9:
                    case 'end':
                      return _context2.stop();
                  }
                }
              },
              _callee2,
              _this2,
            );
          }),
        );

        return function(_x2) {
          return _ref3.apply(this, arguments);
        };
      })()),
      (_this.getById = (function() {
        var _ref4 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(id) {
            var response, json;
            return regeneratorRuntime.wrap(
              function _callee3$(_context3) {
                while (1) {
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      _context3.next = 2;
                      return _get(
                        ArticleService.prototype.__proto__ ||
                          Object.getPrototypeOf(ArticleService.prototype),
                        'request',
                        _this,
                      ).call(_this, _this.url + '/' + id);

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
                      return _context3.abrupt('return', json);

                    case 8:
                      throw new _tmServiceApi.ErrorServerResponse(
                        response.status,
                        response.statusText,
                      );

                    case 9:
                    case 'end':
                      return _context3.stop();
                  }
                }
              },
              _callee3,
              _this2,
            );
          }),
        );

        return function(_x3) {
          return _ref4.apply(this, arguments);
        };
      })()),
      (_this.post = (function() {
        var _ref5 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee4(user) {
            var options, response, json;
            return regeneratorRuntime.wrap(
              function _callee4$(_context4) {
                while (1) {
                  switch ((_context4.prev = _context4.next)) {
                    case 0:
                      options = {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(user),
                      };
                      _context4.next = 3;
                      return _get(
                        ArticleService.prototype.__proto__ ||
                          Object.getPrototypeOf(ArticleService.prototype),
                        'request',
                        _this,
                      ).call(_this, '' + _this.url, options);

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
                      return _context4.abrupt('return', json);

                    case 9:
                      throw new _tmServiceApi.ErrorServerResponse(
                        response.status,
                        response.statusText,
                      );

                    case 10:
                    case 'end':
                      return _context4.stop();
                  }
                }
              },
              _callee4,
              _this2,
            );
          }),
        );

        return function(_x4) {
          return _ref5.apply(this, arguments);
        };
      })()),
      (_this.put = (function() {
        var _ref6 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee5(user) {
            var options, response, json;
            return regeneratorRuntime.wrap(
              function _callee5$(_context5) {
                while (1) {
                  switch ((_context5.prev = _context5.next)) {
                    case 0:
                      options = {
                        method: 'PUT',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(user),
                      };
                      _context5.next = 3;
                      return _get(
                        ArticleService.prototype.__proto__ ||
                          Object.getPrototypeOf(ArticleService.prototype),
                        'request',
                        _this,
                      ).call(_this, '' + _this.url + user._id, options);

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
                      return _context5.abrupt('return', json);

                    case 9:
                      if (!(response.status === 404)) {
                        _context5.next = 11;
                        break;
                      }

                      throw new _tmServiceApi.ErrorNotFound(ArticleService.messages.userNotFound);

                    case 11:
                      throw new _tmServiceApi.ErrorServerResponse(
                        response.status,
                        response.statusText,
                      );

                    case 12:
                    case 'end':
                      return _context5.stop();
                  }
                }
              },
              _callee5,
              _this2,
            );
          }),
        );

        return function(_x5) {
          return _ref6.apply(this, arguments);
        };
      })()),
      (_this.patch = (function() {
        var _ref7 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee6(user) {
            var options, response, json;
            return regeneratorRuntime.wrap(
              function _callee6$(_context6) {
                while (1) {
                  switch ((_context6.prev = _context6.next)) {
                    case 0:
                      options = {
                        method: 'PATCH',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(user),
                      };
                      _context6.next = 3;
                      return _get(
                        ArticleService.prototype.__proto__ ||
                          Object.getPrototypeOf(ArticleService.prototype),
                        'request',
                        _this,
                      ).call(_this, '' + _this.url + user._id, options);

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
                      return _context6.abrupt('return', json);

                    case 9:
                      if (!(response.status === 404)) {
                        _context6.next = 11;
                        break;
                      }

                      throw new _tmServiceApi.ErrorNotFound(ArticleService.messages.userNotFound);

                    case 11:
                      throw new _tmServiceApi.ErrorServerResponse(
                        response.status,
                        response.statusText,
                      );

                    case 12:
                    case 'end':
                      return _context6.stop();
                  }
                }
              },
              _callee6,
              _this2,
            );
          }),
        );

        return function(_x6) {
          return _ref7.apply(this, arguments);
        };
      })()),
      (_this.details = (function() {
        var _ref8 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee7(id) {
            var response, json;
            return regeneratorRuntime.wrap(
              function _callee7$(_context7) {
                while (1) {
                  switch ((_context7.prev = _context7.next)) {
                    case 0:
                      _context7.next = 2;
                      return _get(
                        ArticleService.prototype.__proto__ ||
                          Object.getPrototypeOf(ArticleService.prototype),
                        'request',
                        _this,
                      ).call(_this, '' + _this.url + id);

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
                      return _context7.abrupt('return', json);

                    case 8:
                      if (!(response.status === 404)) {
                        _context7.next = 10;
                        break;
                      }

                      throw new _tmServiceApi.ErrorNotFound(ArticleService.messages.userNotFound);

                    case 10:
                      throw new _tmServiceApi.ErrorServerResponse(
                        response.status,
                        response.statusText,
                      );

                    case 11:
                    case 'end':
                      return _context7.stop();
                  }
                }
              },
              _callee7,
              _this2,
            );
          }),
        );

        return function(_x7) {
          return _ref8.apply(this, arguments);
        };
      })()),
      (_this.delete = (function() {
        var _ref9 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee8(id) {
            var options, response;
            return regeneratorRuntime.wrap(
              function _callee8$(_context8) {
                while (1) {
                  switch ((_context8.prev = _context8.next)) {
                    case 0:
                      options = {
                        method: 'DELETE',
                      };
                      _context8.next = 3;
                      return _get(
                        ArticleService.prototype.__proto__ ||
                          Object.getPrototypeOf(ArticleService.prototype),
                        'request',
                        _this,
                      ).call(_this, '' + _this.url + id, options);

                    case 3:
                      response = _context8.sent;

                      if (!response.ok) {
                        _context8.next = 6;
                        break;
                      }

                      return _context8.abrupt('return');

                    case 6:
                      if (!(response.status === 404)) {
                        _context8.next = 8;
                        break;
                      }

                      throw new _tmServiceApi.ErrorNotFound(
                        ArticleService.messages.articleNotFound,
                      );

                    case 8:
                      throw new _tmServiceApi.ErrorServerResponse(
                        response.status,
                        response.statusText,
                      );

                    case 9:
                    case 'end':
                      return _context8.stop();
                  }
                }
              },
              _callee8,
              _this2,
            );
          }),
        );

        return function(_x8) {
          return _ref9.apply(this, arguments);
        };
      })()),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }
  /**
   * Object with class service messages
   * @type {Object}
   */

  /**
   * Get Articles list
   *
   * @method get
   * @async
   * @public
   * @memberof ArticleService
   *
   * @param {SearchParams} - Object with search params
   * @return {ArticleList} - array of posts
   * @throw {ErrorServerResponse} - server response with error status
   *
   * @example <caption>Read articles list</caption>
   * (async () => {
   *   const Article = new ArticleService('https://article.frontender.info/', 'Bearer 8237612j.h3g12jh.32j13h');
   *   const list = await Article.get();
   * })();
   */

  /**
   * Get Article connected to this repository name
   *
   * @method get
   * @async
   * @public
   * @memberof ArticleService
   *
   * @param {SearchParams} - Object with search params
   * @return {ArticleList} - array of posts
   * @throw {ErrorServerResponse} - server response with error status
   *
   * @example <caption>Read articles list</caption>
   * (async () => {
   *   const Article = new ArticleService('https://article.frontender.info/', 'Bearer 8237612j.h3g12jh.32j13h');
   *   const list = await Article.get();
   * })();
   */

  /**
   * Get Article connected to this repository name
   *
   * @method get
   * @async
   * @public
   * @memberof ArticleService
   *
   * @param {SearchParams} - Object with search params
   * @return {ArticleList} - array of posts
   * @throw {ErrorServerResponse} - server response with error status
   *
   * @example <caption>Read articles list</caption>
   * (async () => {
   *   const Article = new ArticleService('https://article.frontender.info/', 'Bearer 8237612j.h3g12jh.32j13h');
   *   const list = await Article.get();
   * })();
   */

  /**
   * Create article
   *
   * @method post
   * @async
   * @public
   * @memberof ArticleService
   *
   * @param {Article} - user object
   * @return {Article} - created user
   * @throw {ErrorServerResponse} - server response with error status
   *
   * @example <caption>Create article</caption>
   * (async () => {
   *   const Article = new ArticleService('https://article.frontender.info/');
   *   const details = await Article.post({
   *    "url":"http://hansmuller-webkit.blogspot.ru/2013/02/padding-rounded-rectangle.html",
   *    "domain":"blogspot.ru",
   *    "title":"Padding the Rounded Rectangle",
   *    "published": new Date("2013-02-28"),
   *    "lang":"eng"
   *   });
   * })();
   */

  /**
   * Replace article
   *
   * @method put
   * @async
   * @public
   * @memberof ArticleService
   *
   * @param {Article} - updated article object with _id included
   * @return {Article} - created article
   * @throw {ErrorNotFound} - user with this id not found
   * @throw {ErrorServerResponse} - server response with error status
   *
   * @example <caption>Replace article</caption>
   * (async () => {
   *   const Article = new ArticleService('https://article.frontender.info/');
   *   const details = await Article.put({
   *    "url":"http://hansmuller-webkit.blogspot.ru/2013/02/padding-rounded-rectangle.html",
   *    "domain":"blogspot.ru",
   *    "title":"Padding the Rounded Rectangle",
   *    "published": new Date("2013-02-28"),
   *    "lang":"eng",
   *    "_id": "59e11e3bbce79c073e548a9a"
   *   });
   * })();
   */

  /**
   * Update article
   *
   * @method patch
   * @async
   * @public
   * @memberof ArticleService
   *
   * @param {Article} - updated article object with _id included
   * @return {Article} - updated article
   * @throw {ErrorNotFound} - user with this id not found
   * @throw {ErrorServerResponse} - server response with error status
   *
   * @example <caption>Patch article</caption>
   * (async () => {
   *   const Article = new ArticleService('https://article.frontender.info/');
   *   const details = await Article.patch({
   *    "_id": "59e11e3bbce79c073e548a9a",
   *    "title": "New article title"
   *   });
   * })();
   */

  /**
   * Search params
   *
   * @namespace ArticleService
   * @typedef {SearchParams} - search params list
   *
   * @property {number} page - page number
   * @property {number} perPage - articles per page
   * @property {string} s - keyword to search in domain and title
   */

  /**
   * Article list object
   *
   * @namespace ArticleService
   * @typedef {ArticleList} Array of articles
   *
   * @property {Array.<Article>} - array of articles
   */

  /**
   * Article object
   *
   * @namespace ArticleService
   * @typedef {Article} Article representation
   *
   * @property {string} url - article url
   * @property {string} domain - article domain
   * @property {string} title - article title
   * @property {string} lang - 3 character lang code
   * @property {Date} published - publication timestamp
   *
   * @property {number} characters - characters count
   *
   * @property {Array.<string>} author - article with user id's
   * @property {Array.<Contributor>} contributors - array of contributors
   * @property {Array.<string>} tags - array of article tags
   *
   * @property {boolean} team - is user part of the team
   * @property {boolean} core - is user part of the core team
   * @property {boolean} translator - is user translator
   * @property {boolean} editor - is user editor
   * @property {boolean} developer - is user developer
   * @property {boolean} author - is user author
   * @property {number} salary - salary, if user part of the core team
   *
   * @property {string} reponame - name of repository with translation, if applyable
   * @property {Article.<Article>} translations - array of translations of this articles
   */

  /**
   * Contributor object
   *
   * @namespace ArticleService
   * @typedef {Contributor} Contributor
   *
   * @property {string} name - contributor name or login if no name available
   * @property {string} url - url to contributor resource
   */

  /**
   * Read specific users details
   *
   * @method details
   * @memberof ArticleService
   * @async
   * @public
   *
   * @param {string} id - user id
   * @return {Article} - article details
   * @throw {ErrorNotFound} - user with this id not found
   * @throw {ErrorServerResponse} - server response with other error status
   *
   * @example <caption>Get article</caption>
   * (async () => {
   *   const Article = new ArticleService('https://article.frontender.info/');
   *   const details = await Article.details('59e11e3bbce79c073e548a9a');
   * })();
   */

  /**
   * Delete article by id
   *
   * @method delete
   * @memberof ArticleService
   * @async
   * @public
   *
   * @param {string} id - article id
   * @throw {ErrorNotFound} - user with this id not found
   * @throw {ErrorServerResponse} - server response with other error status
   *
   * @example <caption>Delete article by id</caption>
   * (async () => {
   *   const Article = new ArticleService('https://article.frontender.info/');
   *   await Article.delete('59e11e3bbce79c073e548a9a');
   * })();
   */

  return ArticleService;
})(_tmServiceApi.TMMicroServiceAPI);

ArticleService.messages = {
  articleNotFound: 'User not found',
};
exports.default = ArticleService;
//# sourceMappingURL=index.js.map
