import reducers from '../../reducers/index';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Retornar initial State', () => {
    expect(reducers({}, '')).toEqual({});
  });
  test('addToCart', () => {
    const initialState = { cart: [] };
    const payload = ProductMock;
    const action = { type: 'ADD_TO_CART', payload };
    const expected = {
      cart: [ProductMock],
    };
    expect(reducers(initialState, action)).toEqual(expected);
  });
});
