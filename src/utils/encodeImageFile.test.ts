import { encodeImageFile } from './encodeImageFile';

describe('encodeImageFile', () => {
  it('should return encode image file', async () => {
    const result = await encodeImageFile(new File(['test'], 'test.png'));

    expect(result).toString();
  });
});
