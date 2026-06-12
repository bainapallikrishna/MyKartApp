export interface AuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface Category {
  categoryId: number;
  categoryName: string;
}

export interface Product {
  productId: string;
  productName: string;
  categoryId: number;
  price: number;
  quantityAvailable: number;
}

export interface User {
  emailId: string;
  userPassword?: string;
  roleName?: string;
  gender?: string;
  dateOfBirth?: string;
  address?: string;
}

export interface Purchase {
  purchaseId?: number;
  emailId: string;
  productId: string;
  quantityPurchased: number;
  totalPrice?: number;
}
