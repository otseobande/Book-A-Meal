import axios from 'axios';

const uploadImage = (image) => {
  const imageForm = new FormData();
  imageForm.append('file', image);
  imageForm.append('api_key', process.env.CLOUDINARY_API_KEY);
  imageForm.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);

  return axios.post('https://api.cloudinary.com/v1_1/otse/image/upload', imageForm, {
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
  });
};

export default uploadImage;
