import groq from "groq";

export const postQuery = groq`
  *[_type=="post"]{
    _id,
    title,
    publishedAt,
    "slug": slug.current,
    "categories":   category[]->{title, slug},
    mainImage,
    body,
  }
`;
