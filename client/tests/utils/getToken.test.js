import getToken from '../../../client/src/utils/getToken.js';
import ls from '../../../client/src/utils/securels.js';

describe('getToken function', () => {
  it('should get user token from secureLocalStorage', () => {
    ls.set('book-a-meal', {
      token: 'test-token'
    })

    expect(getToken()).toBe('test-token');
  })
})