import {
  MicroServiceAPI,
  ErrorNotFound,
  ErrorServerResponse
} from "@frontender-magazine/service-api";

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
export default class ArticleService extends MicroServiceAPI {
  /**
   * Object with class service messages
   * @type {Object}
   */
  static messages = {
    articleNotFound: "User not found"
  };

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
   *   const Article = new ArticleService('https://article.frontender.info/');
   *   const list = await Article.get();
   * })();
   */
  get = async options => {
    const response = await super.request(this.url, {
      data: {
        ...options
      }
    });
    if (response.ok) {
      const items = await response.json();
      return {
        items,
        headers: response.headers
      };
    }
    throw new ErrorServerResponse(response.status, response.statusText);
  };

  /**
   * Get Article connected to this repository name
   *
   * @method getByReponame
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
   *   const Article = new ArticleService('https://article.frontender.info/');
   *   const list = await Article.getByReponame('the-art-of-html-semantics-pt1');
   * })();
   */
  getByReponame = async reponame => {
    const response = await super.request(`${this.url}/repository/${reponame}`);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new ErrorServerResponse(response.status, response.statusText);
  };

  /**
   * Get Article connected to this repository name
   *
   * @method getById
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
   *   const Article = new ArticleService('https://article.frontender.info/');
   *   const list = await Article.getById('5a04f3ee3d3c231d5d8e009d');
   * })();
   */
  getById = async id => {
    const response = await super.request(`${this.url}/${id}`);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new ErrorServerResponse(response.status, response.statusText);
  };

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
  post = async user => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    };
    const response = await super.request(`${this.url}`, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new ErrorServerResponse(response.status, response.statusText);
  };

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
  put = async user => {
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    };
    const response = await super.request(`${this.url}${user._id}`, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    if (response.status === 404)
      throw new ErrorNotFound(ArticleService.messages.userNotFound);
    throw new ErrorServerResponse(response.status, response.statusText);
  };

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
  patch = async user => {
    const options = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    };
    const response = await super.request(`${this.url}${user._id}`, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    if (response.status === 404)
      throw new ErrorNotFound(ArticleService.messages.userNotFound);
    throw new ErrorServerResponse(response.status, response.statusText);
  };

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
  details = async id => {
    const response = await super.request(`${this.url}${id}`);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    if (response.status === 404)
      throw new ErrorNotFound(ArticleService.messages.userNotFound);
    throw new ErrorServerResponse(response.status, response.statusText);
  };

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
  delete = async id => {
    const options = {
      method: "DELETE"
    };
    const response = await super.request(`${this.url}${id}`, options);
    if (response.ok) return;
    if (response.status === 404)
      throw new ErrorNotFound(ArticleService.messages.articleNotFound);
    throw new ErrorServerResponse(response.status, response.statusText);
  };
}
