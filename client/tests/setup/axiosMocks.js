import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import dotenv from 'dotenv';
dotenv.config();

global.axiosMock = new MockAdapter(axios);

global.cloudinaryRes = {
  public_id: 'sample',
  version: '1312461204',
  width: 864,
  height: 564,
  format: 'jpg',
  created_at: '2017-08-10T09:55:32Z',
  resource_type: 'image',
  tags: [],
  bytes: 9597,
  type: 'upload',
  etag: 'd1ac0ee70a9a36b14887aca7f7211737',
  url: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg',
  secure_url: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg',
  signature: 'abcdefgc024acceb1c1baa8dca46717137fa5ae0c3',
  original_filename: 'sample'
};

const userRes = {
  user: {
    id: 'test-id',
    role: 'caterer',
    email: 'test@gmail.com',
    username: 'test'
  },
  token: 'test-token'
}

const url = `${process.env.APP_URL}/api/v1`;
axiosMock
  .onPost('https://api.cloudinary.com/v1_1/otse/image/upload').reply(200, cloudinaryRes)
  .onPost(`${url}/auth/login`).reply(200, userRes)
  .onPost(`${url}/auth/signup`).reply(200, userRes)
  .onGet(`${url}/orders?limit=10&page=1`).reply(200, { orders: [], pagination: {}})
  .onAny().reply(200, {});
