import read from '../js/modules/reader';

describe('read', () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const buffer = new ArrayBuffer(data.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < data.length; i += 1) {
    bufferView[i] = data.charCodeAt(i);
  }

  test('should return a buffer', async () => {
    await expect(read()).resolves.toEqual(buffer);
  });
});
