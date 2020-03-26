const request= require('supertest');
const server= require('./server.js');

describe('server.js', () => {
  describe('get /', () => {

    it('should return 200 OK', async function(){
      const response= await request(server).get('/');
      expect(response.status).toBe(200);
    });

    it('should return json', function(){
      return request(server).get('/').then(res => {
        expect(res.type).toMatch(/json/i);
      });
      
    });

    it('should respond with {api: "up"}', function(){
      return request(server).get('/').then(res => {
        expect(res.body.api).toBe('up');
      });
    });

  });
 

});
// describe('server.js', () => {
// });