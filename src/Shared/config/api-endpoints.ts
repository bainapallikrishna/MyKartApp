import { environment } from '../../environments/environment';

const base = environment.apiUrl;

export const API_ENDPOINTS = {
  auth: {
    token: `${base}/user/api/Auth/token`,
    refresh: `${base}/user/api/Auth/refresh`,
  },
  category: `${base}/category/api/Category`,
  product: `${base}/product/api/Product`,
  user: `${base}/user/api/UserMicroservices`,
  purchase: `${base}/purchase/api/Purchase`,
  purchaseProduct: `${base}/purchase/api/Purchase/purchaseProduct`,
};
