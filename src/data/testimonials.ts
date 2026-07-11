export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emily Carter",
    role: "Graphic Designer",
    avatar: "/images/testimonials/emily.jpg",
    rating: 5,
    comment:
      "Shopping with Shopverse has been a fantastic experience. The website is easy to use, delivery was fast, and every product matched the description."
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Software Engineer",
    avatar: "/images/testimonials/michael.jpg",
    rating: 5,
    comment:
      "I ordered electronics and accessories several times. Everything arrived on time, and the product quality exceeded my expectations."
  },
  {
    id: 3,
    name: "Sophia Brown",
    role: "Marketing Specialist",
    avatar: "/images/testimonials/sophia.jpg",
    rating: 5,
    comment:
      "The checkout process was simple, customer support responded quickly, and the overall shopping experience felt smooth and professional."
  },
  {
    id: 4,
    name: "Daniel Wilson",
    role: "Photographer",
    avatar: "/images/testimonials/daniel.jpg",
    rating: 4,
    comment:
      "The prices were competitive, the packaging was secure, and I appreciated the detailed product information before purchasing."
  },
  {
    id: 5,
    name: "Olivia Martinez",
    role: "Content Creator",
    avatar: "/images/testimonials/olivia.jpg",
    rating: 5,
    comment:
      "I especially loved the modern interface and how easy it was to find exactly what I was looking for. I'll definitely shop here again."
  },
  {
    id: 6,
    name: "James Anderson",
    role: "Business Consultant",
    avatar: "/images/testimonials/james.jpg",
    rating: 5,
    comment:
      "From browsing products to completing the payment, everything felt polished. This is one of the best online shopping experiences I've had."
  }
];
