import orderIsModifiable from "../../src/utils/orderIsModifiable";

describe('orderIsModifiable util', () => {
  it('should return false if current time is less than the modificaiton period', () => {
    const orderModificationStatus = orderIsModifiable('2018-05-01', 15);

    expect(orderModificationStatus).toBeFalsy();
  })
  it('should return false if current time is less than the modificaiton period from env', () => {
    const orderModificationStatus = orderIsModifiable('2018-05-01');

    expect(orderModificationStatus).toBeFalsy();
  })
})