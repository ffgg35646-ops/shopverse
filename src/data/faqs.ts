export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How long does shipping take?",
    answer:
      "Standard shipping usually takes between 3 and 7 business days, depending on your location. Estimated delivery dates are shown during checkout."
  },
  {
    id: 2,
    question: "Can I return a product if I'm not satisfied?",
    answer:
      "Yes. Most products can be returned within 30 days of delivery, provided they are unused and returned in their original packaging."
  },
  {
    id: 3,
    question: "Which payment methods do you accept?",
    answer:
      "We accept major credit cards, PayPal, and Cash on Delivery for eligible locations."
  },
  {
    id: 4,
    question: "How can I track my order?",
    answer:
      "After your order has been shipped, you'll receive a confirmation email with a tracking number that you can use on the Track Order page."
  },
  {
    id: 5,
    question: "Do I need an account to place an order?",
    answer:
      "No. You can complete your purchase as a guest, but creating an account allows you to track orders, save addresses, and manage your wishlist."
  },
  {
    id: 6,
    question: "How do I apply a discount coupon?",
    answer:
      "You can enter your coupon code during checkout or on the shopping cart page before completing your purchase."
  },
  {
    id: 7,
    question: "Are all products covered by a warranty?",
    answer:
      "Warranty coverage depends on the product and manufacturer. Warranty information is listed on each product page when available."
  },
  {
    id: 8,
    question: "Can I change or cancel my order?",
    answer:
      "Orders can be modified or canceled before they enter the shipping process. Please contact customer support as soon as possible."
  },
  {
    id: 9,
    question: "What should I do if I receive a damaged item?",
    answer:
      "Contact our support team within 48 hours of delivery with photos of the damaged item. We'll arrange a replacement or refund after verification."
  },
  {
    id: 10,
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team through the Contact page or by email. Our team is available Monday through Friday during business hours."
  }
];
