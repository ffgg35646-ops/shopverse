export interface FooterLink {
  id: number;
  label: string;
  path: string;
}

export interface FooterSection {
  id: number;
  title: string;
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
  {
    id: 1,
    title: "Shop",
    links: [
      {
        id: 1,
        label: "All Products",
        path: "/shop"
      },
      {
        id: 2,
        label: "Electronics",
        path: "/shop?category=electronics"
      },
      {
        id: 3,
        label: "Fashion",
        path: "/shop?category=fashion"
      },
      {
        id: 4,
        label: "Shoes",
        path: "/shop?category=shoes"
      },
      {
        id: 5,
        label: "Accessories",
        path: "/shop?category=accessories"
      }
    ]
  },

  {
    id: 2,
    title: "Customer Service",
    links: [
      {
        id: 1,
        label: "Contact Us",
        path: "/contact"
      },
      {
        id: 2,
        label: "FAQ",
        path: "/faq"
      },
      {
        id: 3,
        label: "Track Order",
        path: "/track-order"
      },
      {
        id: 4,
        label: "Shipping Information",
        path: "/shipping"
      },
      {
        id: 5,
        label: "Returns & Refunds",
        path: "/returns"
      }
    ]
  },

  {
    id: 3,
    title: "My Account",
    links: [
      {
        id: 1,
        label: "Profile",
        path: "/profile"
      },
      {
        id: 2,
        label: "Orders",
        path: "/orders"
      },
      {
        id: 3,
        label: "Wishlist",
        path: "/wishlist"
      },
      {
        id: 4,
        label: "Cart",
        path: "/cart"
      }
    ]
  },

  {
    id: 4,
    title: "Company",
    links: [
      {
        id: 1,
        label: "About Us",
        path: "/about"
      },
      {
        id: 2,
        label: "Privacy Policy",
        path: "/privacy"
      },
      {
        id: 3,
        label: "Terms & Conditions",
        path: "/terms"
      }
    ]
  }
];

export const paymentMethods = [
  "Visa",
  "Mastercard",
  "PayPal",
  "Apple Pay"
];

export const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    url: "#"
  },
  {
    id: 2,
    name: "Instagram",
    url: "#"
  },
  {
    id: 3,
    name: "Twitter",
    url: "#"
  },
  {
    id: 4,
    name: "LinkedIn",
    url: "#"
  }
];
