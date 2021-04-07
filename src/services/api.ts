import axios from 'axios';

const api = axios.create({
  baseURL:
    'postgres://txpdpipsfjcfgh:2e0620047bbef3c98e246488eb5c7eff4f0b746369583d2f5f3d27d24fbe6027@ec2-18-233-83-165.compute-1.amazonaws.com:5432/d7lqgcj3nin8do',
});

export default api;
