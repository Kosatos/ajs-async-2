import GameSavingLoader from '../js/modules/GameSavingLoaderAsync';
import read from '../js/modules/reader';

jest.mock('../js/modules/reader');

describe('GameSavingLoader', () => {
  test('should return a Error', async () => {
    read.mockRejectedValue(new Error('error from test'));
    expect(GameSavingLoader.load()).rejects.toThrow('error from test');
  });
});
