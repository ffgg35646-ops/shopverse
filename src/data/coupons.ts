export interface Coupon {
  id: number;
  code: string;
  description: string;
  discount: number;
  minimumOrder: number;
  expiresAt: string;
  isActive: boolean;
}

export const coupons: Coupon[] = [
  {
    id: 1,
    code: "WELCOME10",
    description: "10% off your first order.",
    discount: 10,
    minimumOrder: 50,
    expiresAt: "2026-12-31",
    isActive: true
  },
  {
    id: 2,
    code: "SUMMER20",
    description: "20% off selected summer products.",
    discount: 20,
    minimumOrder: 100,
    expiresAt: "2026-08-31",
    isActive: true
  },
  {
    id: 3,
    code: "FREESHIP",
    description: "Free shipping on qualifying orders.",
    discount: 0,
    minimumOrder: 75,
    expiresAt: "2026-11-30",
    isActive: true
  },
  {
    id: 4,
    code: "SAVE15",
    description: "Save 15% on orders over $150.",
    discount: 15,
    minimumOrder: 150,
    expiresAt: "2026-10-15",
    isActive: true
  },
  {
    id: 5,
    code: "VIP25",
    description: "Exclusive 25% discount for VIP customers.",
    discount: 25,
    minimumOrder: 200,
    expiresAt: "2026-09-30",
    isActive: false
  }
];
