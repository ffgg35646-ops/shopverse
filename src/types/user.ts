export interface User {
  id: number;

  firstName: string;
  lastName: string;
  fullName: string;

  email: string;
  phone: string;

  avatar: string;

  role: "customer" | "admin";

  isVerified: boolean;

  createdAt: string;
  updatedAt: string;
}
