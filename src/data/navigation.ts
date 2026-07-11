export interface NavigationItem {
  id: number;
  label: string;
  path: string;
}

export const navigation: NavigationItem[] = [
  {
    id: 1,
    label: "Home",
    path: "/"
  },
  {
    id: 2,
    label: "Shop",
    path: "/shop"
  },
  {
    id: 3,
    label: "About",
    path: "/about"
  },
  {
    id: 4,
    label: "Contact",
    path: "/contact"
  },
  {
    id: 5,
    label: "FAQ",
    path: "/faq"
  }
];

export const accountNavigation: NavigationItem[] = [
  {
    id: 1,
    label: "My Profile",
    path: "/profile"
  },
  {
    id: 2,
    label: "My Orders",
    path: "/orders"
  },
  {
    id: 3,
    label: "Wishlist",
    path: "/wishlist"
  },
  {
    id: 4,
    label: "Shopping Cart",
    path: "/cart"
  },
  {
    id: 5,
    label: "Track Order",
    path: "/track-order"
  }
];

export const legalNavigation: NavigationItem[] = [
  {
    id: 1,
    label: "Privacy Policy",
    path: "/privacy"
  },
  {
    id: 2,
    label: "Terms & Conditions",
    path: "/terms"
  }
];
