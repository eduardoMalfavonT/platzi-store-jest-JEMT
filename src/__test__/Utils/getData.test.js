import getData from '../../Utils/getdata';
import fetchMock from 'jest-fetch-mock';

describe('fetchMock APi', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  test('Llamar una api y retornar datos', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('http://google.com').then(response => {
      expect(response.data).toEqual('12345');
    });
    expect(fetchMock.mockAbort.call[0][0].toEqual('http://google.com'));
  });
});
