import axios from 'axios';

const uploadImage = (image) => {
  const imageForm = new FormData();
  imageForm.append('file', image);
  imageForm.append('api_key', '519694165317432');
  imageForm.append('upload_preset', 'zaftzkft');

  return axios.post('https://api.cloudinary.com/v1_1/otse/image/upload', imageForm, {
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
  });
};

export default uploadImage;
