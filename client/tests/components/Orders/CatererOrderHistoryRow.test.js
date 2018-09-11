import React from 'react';
import CatererOrderHistoryRow from '../../../src/components/Orders/CatererOrderHistoryRow';

const props = {
  handleDeliver: jest.fn(),
  order:  {
    "id": "ecd2344b-9c49-4c78-8623-f7f3334e2f4e",
    "quantity": 1,
    "price": 500,
    "status": "cancelled",
    "deliveryAddress": "24 irepodun street, bodija, ibadan",
    "phoneNumber": "08131928452",
    "createdAt": "2018-09-10T09:05:53.650Z",
    "updatedAt": "2018-09-10T09:06:06.292Z",
    "meal": {
        "id": "dd72bc9b-beb0-49c6-be7b-20106e8aa3d0",
        "title": "Beef with rice",
        "description": "Fried rice and beef",
        "price": 500,
        "img": "https://qph.ec.quoracdn.net/main-qimg-114f40fc7ad4f623ac45ebb33e2c1f8d",
        "caterer": {
            "id": "e20ac257-86cc-4a6f-a619-0249a201c475",
            "fullName": "Otse Obande",
            "username": "otseobande",
            "email": "mealbooker@gmail.com",
            "role": "caterer"
        }
    }
  }
}
describe('CatererOrderHistoryRow component', () => {
  it('should match snapshot if status is not pending', () => {
    const wrapper = shallow(
      <CatererOrderHistoryRow {...props} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if status is pending', () => {
    const updatedProps = {
      ...props,
      order: {
        ...props.order,
        status: 'pending'
      }
    };

    const wrapper = shallow(
      <CatererOrderHistoryRow {...updatedProps} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if status is delivered', () => {
    const updatedProps = {
      ...props,
      order: {
        ...props.order,
        status: 'delivered'
      }
    };

    const wrapper = shallow(
      <CatererOrderHistoryRow {...updatedProps} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if status is cancelled', () => {
    const updatedProps = {
      ...props,
      order: {
        ...props.order,
        status: 'cancelled'
      }
    };

    const wrapper = shallow(
      <CatererOrderHistoryRow {...updatedProps} />
    );

    expect(wrapper).toMatchSnapshot();
  });


  it('should match snapshot if status is anything else', () => {
    const updatedProps = {
      ...props,
      order: {
        ...props.order,
        status: 'anything else'
      }
    };

    const wrapper = shallow(
      <CatererOrderHistoryRow {...updatedProps} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('openDeliverModal method', () => {
    const wrapper = shallow(
      <CatererOrderHistoryRow {...props} />
    );
    it('should set deliverModalOpen state to true', () => {
      wrapper.instance().openDeliverModal();
      const { deliverModalOpen } = wrapper.instance().state;

      expect(deliverModalOpen).toBeTruthy();
    });
  });
  describe('closeDeliverModal method', () => {
    const wrapper = shallow(
      <CatererOrderHistoryRow {...props} />
    );
    it('should set deliverModalOpen state to false', () => {
      wrapper.instance().closeDeliverModal();
      const { deliverModalOpen } = wrapper.instance().state;

      expect(deliverModalOpen).toBeFalsy();
    });
  });

  describe('handleDeliver method', () => {
    const wrapper = shallow(
      <CatererOrderHistoryRow {...props} />
    );

    it('should call handleDeliver prop function', () => {
      const orderId = 'tesd8c';
      wrapper.instance().handleDeliver(orderId);

      expect(props.handleDeliver).toBeCalledWith(orderId);
    });
  });

});