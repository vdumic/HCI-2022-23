import axios from "axios";

const instance = axios.create({
  baseURL: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
});

export const getAllRooms = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
            roomCollection {
                items {
                  label
                  image {
                    url
                  }
                  slug
                }
              }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazan objekt
  if (!response) return {};

  const data = response.data.data;
  return data.roomCollection.items;
};

export const getAllRoomSlugs = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          roomCollection {
            items {
              slug
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazna lista
  if (!response) return [];

  const data = response.data.data;
  return data.roomCollection.items;
};

export const getAllCategorySlugs = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          categoryCollection {
            items {
              slug
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazna lista
  if (!response) return [];

  const data = response.data.data;
  return data.categoryCollection.items;
};

export const getAllCategories = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
            categoryCollection {
                items {
                  label
                  image {
                    url
                  }
                  slug
                }
              }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazan objekt
  if (!response) return {};

  const data = response.data.data;
  return data.categoryCollection.items;
};

export const getFiveCategories = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
            categoryCollection(limit: 5) {
                items {
                  label
                  image {
                    url
                  }
                  slug
                }
              }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazan objekt
  if (!response) return {};

  const data = response.data.data;
  return data.categoryCollection.items;
};

export const getSupportCards = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          supportCardCollection {
            items {
              label
              image {
                url
              }
              title
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazan objekt
  if (!response) return {};

  const data = response.data.data;
  return data.supportCardCollection.items;
};

export const getAllPostSlugs = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          blogPostCollection {
            items {
              slug
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazna lista
  if (!response) return [];

  const data = response.data.data;
  return data.blogPostCollection.items;
};

export const getAllPosts = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          blogPostCollection {
            total
            items {
              title
              slug
              date
              image{
                  url
              }
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  if (!response) return {};

  const data = response.data.data;
  return data.blogPostCollection.items;
};

export const getPostBySlug = async (slug) => {
  const response = await instance.post(
    "",
    {
      query: `query{
        blogPostCollection(where: {
        slug: "${slug}"
      }){
        items{
          title
          body
          date
          image{
            url
          }
        }
      }
    }`,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    }
  );
  // Add error handling
  const data = response.data.data;
  return data.blogPostCollection.items[0];
};

export const getAllProductsByRoom = async (room) => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          productCollection(where: {
            room: "${room}"
          }) {
            items {
              title
              imagesCollection {
                items {
                  url
                }
              }
              slug
              description {
                json
              }
              dimensions {
                json
              }
              model{
                  url
              }
              category
              room
              price
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  if (!response) return {};

  const data = response.data.data;
  return data.productCollection.items;
};
