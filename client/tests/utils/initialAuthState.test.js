import initialAuthState from '../../src/utils/initialAuthState.js';

const user = {
  role: 'caterer'
}

describe("initialAuthState function", () => {
  it("should return an object with the user and loggedIn:true status if token is valid", () => {
    const authState = initialAuthState({token: userToken, user})
    expect(authState).toEqual({
      user,
      loggedIn: true
    })
  });

  it('should return an object loggedIn field as false if token is invalid', () => {
    const authState = initialAuthState({token: expiredUserToken, user});
    expect(authState).toEqual({
      loggedIn: false
    })
  })

  it('should return an object loggedIn field as false if token is not in argument object', () => {
    const authState = initialAuthState({user});
    expect(authState).toEqual({
      loggedIn: false
    })
  })

  it('should return an object loggedIn field as false if user is not in argument object', () => {
    const authState = initialAuthState({token: userToken});
    expect(authState).toEqual({
      loggedIn: false
    })
  })

})