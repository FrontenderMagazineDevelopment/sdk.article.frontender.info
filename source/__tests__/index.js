import nock from 'nock';
import ArticleService from '../index';

const articleGet = require('../__mocks__/article_get.json');
const articlesGet = require('../__mocks__/articles_get.json');

const serviceUrl = 'https://article.service';

describe('Article API', () => {
  describe('articles endpoint', () => {
    it('should return list of articles: ', async () => {
      nock(/[.]+/)
        .get('/')
        .reply(200, articlesGet);

      const article = new ArticleService(serviceUrl);
      const responce = await article.get();

      expect(responce).toEqual({
        headers: { _headers: { 'content-type': ['application/json'] } },
        items: articlesGet,
      });
    });

    it('should throw error if server failed: ', async () => {
      nock(/[.]+/)
        .get('/')
        .reply(500);

      try {
        const article = new ArticleService(serviceUrl);
        await article.get();
      } catch (error) {
        expect(error.statusCode).toEqual(500);
      }
    });
  });

  describe('article endpoint', () => {
    it('should return article by repository name: ', async () => {
      nock(/[.]+/)
        .get('/repository/the-art-of-html-semantics-pt1')
        .reply(200, articleGet);

      const article = new ArticleService(serviceUrl);
      const responce = await article.getByReponame('the-art-of-html-semantics-pt1');
      expect(responce).toEqual(articleGet);
    });

    it('should throw error if server failed: ', async () => {
      nock(/[.]+/)
        .get('/repository/the-art-of-html-semantics-pt1')
        .reply(500);

      try {
        const article = new ArticleService(serviceUrl);
        await article.getByReponame('the-art-of-html-semantics-pt1');
      } catch (error) {
        expect(error.statusCode).toEqual(500);
      }
    });

    it('should throw error if article not found: ', async () => {
      nock(/[.]+/)
        .get('/repository/the-art-of-html-semantics-pt1')
        .reply(404);

      try {
        const article = new ArticleService(serviceUrl);
        await article.getByReponame('the-art-of-html-semantics-pt1');
      } catch (error) {
        expect(error.statusCode).toEqual(404);
        expect(error.statusText).toEqual('Not Found');
      }
    });
  });
});
