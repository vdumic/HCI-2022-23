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
                  path
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
                  path
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
