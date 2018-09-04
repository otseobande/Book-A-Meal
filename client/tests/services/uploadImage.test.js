import uploadImage from '../../src/services/uploadImage.js';

describe("uploadImage service", () => {
  it('should return the right cloudinary response', () => {
    const imageFile = new Blob(['test'], {
      type: 'image/jpg'
    });
    imageFile.name = 'picture.jpg';

    uploadImage(imageFile).then(res => {
      expect(res.data).toEqual(cloudinaryRes);
    })
  });
})