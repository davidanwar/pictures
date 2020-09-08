import axios from 'axios';

export default axios.create({
    baseUrl: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4QniD-Z1a8K9-dC0_FYGWaoLK2bc0dV9XUceAWAc7g4'
      }
  

});