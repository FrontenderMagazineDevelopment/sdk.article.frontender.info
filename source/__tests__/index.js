import 'isomorphic-fetch';
import nock from 'nock';
import get from 'get';
import UserService from '../index';

const serviceUrl = 'https://article.frontender.info/';

describe('Article API', () => {
  it('should return list of post on get request: ', async () => {
    nock(/[.]+/)
      .get('/posts')
      .reply(200, get);

    const user = new UserService(serviceUrl);
    const responce = await user.get();
    expect(responce).toEqual(get);
  });

  it('should create post on post request: ', async () => {
    const answer = {
      title: 'My Title',
      body: 'My Text',
      id: 101,
    };
    nock(/[.]+/)
      .post('/posts')
      .reply(200, answer);

    const user = new UserService(serviceUrl);
    const responce = await user.post({});
    expect(responce).toEqual(answer);
  });

  it('should return specific post on get request with post id: ', async () => {
    const answer = {
      id: 1,
      userId: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    };
    nock(/[.]+/)
      .get('/posts/1')
      .reply(200, answer);

    const user = new UserService(serviceUrl);
    const responce = await user.details(1);
    expect(responce).toEqual(answer);
  });

  it('should throw Not Found error if you request post with id that do not exists: ', async () => {
    nock(/[.]+/)
      .get('/posts/1')
      .reply(404);

    const user = new UserService(serviceUrl);
    try {
      await user.details(1);
    } catch (error) {
      expect(error.statusCode).toEqual(404);
      expect(error.statusText).toEqual('Not Found');
    }
  });

  it('should throw Server Responce error if you request post with id that do not exists: ', async () => {
    nock(/[.]+/)
      .get('/posts/1')
      .reply(500);

    const user = new UserService(serviceUrl);
    try {
      await user.details(1);
    } catch (error) {
      expect(error.statusCode).toEqual(500);
    }
  });
});
