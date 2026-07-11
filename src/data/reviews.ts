import type { Review } from "@/types";

export const reviews: Review[] = [
  {
    id: 1,
    userName: "Michael Johnson",
    userAvatar: "/images/users/michael.jpg",
    rating: 5,
    title: "Excellent Battery Life",
    comment:
      "I've been using these headphones every day for over a month. The battery lasts much longer than expected, and the sound quality is outstanding.",
    verifiedPurchase: true,
    likes: 26,
    createdAt: "2026-01-18"
  },
  {
    id: 2,
    userName: "Emily Carter",
    userAvatar: "/images/users/emily.jpg",
    rating: 5,
    title: "Worth Every Dollar",
    comment:
      "The build quality feels premium, the setup was simple, and delivery was faster than expected. Definitely recommended.",
    verifiedPurchase: true,
    likes: 19,
    createdAt: "2026-02-03"
  },
  {
    id: 3,
    userName: "Daniel Wilson",
    userAvatar: "/images/users/daniel.jpg",
    rating: 4,
    title: "Great Quality",
    comment:
      "Very satisfied with the overall quality. The only thing I would improve is the packaging, but the product itself is excellent.",
    verifiedPurchase: true,
    likes: 14,
    createdAt: "2026-02-15"
  },
  {
    id: 4,
    userName: "Sophia Brown",
    userAvatar: "/images/users/sophia.jpg",
    rating: 5,
    title: "Fast Shipping",
    comment:
      "Arrived two days earlier than expected. Everything matched the description and the product works perfectly.",
    verifiedPurchase: true,
    likes: 31,
    createdAt: "2026-03-02"
  },
  {
    id: 5,
    userName: "James Anderson",
    userAvatar: "/images/users/james.jpg",
    rating: 4,
    title: "Very Comfortable",
    comment:
      "I've been using it daily for work and travel. Comfortable, lightweight, and performs exactly as advertised.",
    verifiedPurchase: false,
    likes: 9,
    createdAt: "2026-03-21"
  },
  {
    id: 6,
    userName: "Olivia Martinez",
    userAvatar: "/images/users/olivia.jpg",
    rating: 5,
    title: "Highly Recommended",
    comment:
      "One of the best purchases I've made this year. Excellent value for the price and outstanding customer experience.",
    verifiedPurchase: true,
    likes: 22,
    createdAt: "2026-04-08"
  }
];
