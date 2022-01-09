const API_URL: string = process.env.WORDPRESS_API_URL as string;

/**
 * Represents a project item based on a list of projects
 */
const ProjectListItemLayout = `node { 
  id
  title
  slug 
  featuredImage {
    node {
      sourceUrl
    }
  }
  supports {
    edges {
      node {
        name
        slug
      }
    }
  }
}`;

const ArticleListItemLayout = `node {
  title
  slug
  date
  excerpt
  featuredImage {
    node {
      sourceUrl
    }
  }
}`;

type VariableProps = {
  variables?: {
    id?: string;
    max?: number;
  }
}

export default async function fetchAPI(query: string, { variables }: VariableProps = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getHomepageDatas() {
  const data = await fetchAPI(`
    {
      projets(first: 4) {
        edges {
          ${ProjectListItemLayout}
        }
      }
      posts(first: 2) {
        edges {
          ${ArticleListItemLayout}
        }
      }
    }
  `);

  return data;
}

export async function getAllProjectsWithSlug() {
  const data = await fetchAPI(`
    {
      projets(first: 10000) {
        edges {
          node {
            slug
            supports {
              edges {
                node {
                  slug
                }
              }
            }
          }
        }
      }
    }
  `);
  return data?.projets;
}

export async function getSingleProject(slug: string) {
  const data = await fetchAPI(`
  query ProjectBySlug($id: ID!) {
    projet(id: $id, idType: SLUG) {
      id
      title
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
      technologies {
        edges {
          node {
            name
            acfDetail {
              image {
                sourceUrl
              }
            }
          }
        }
      }
      supports {
        edges {
          node {
            name
            slug
          }
        }
      }
      detail {
        websiteLink
        year
        missions
        excerpt
      }
    }
    projets(first: 1000) {
      edges {
        ${ProjectListItemLayout}
      }
    }
  }
  `, {
    variables: {
      id: slug,
    },
  });

  return data;
}

export async function getPortfolioProjects() {
  const data = await fetchAPI(`
    {
      projets(first: 1000) {
        edges {
          ${ProjectListItemLayout}
        }
      }
      supports {
        edges {
          node {
            slug
            name
            id
            acfSupport {
              image {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  return data;
}

export async function getAllSupportsWithSlug() {
  const data = await fetchAPI(`
    {
      supports {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.supports;
}

export async function getSingleSupport(slug: string) {
  const data = await fetchAPI(`
  query SupportBySlug($id: ID!) {
    support(id: $id, idType: SLUG) {
      id
      slug
      name
      projets {
        edges {
          ${ProjectListItemLayout}
        }
      }
    }
    supports {
      edges {
        node {
          slug
          name
          id
          acfSupport {
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }
  `, {
    variables: {
      id: slug,
    },
  });

  return data;
}

export async function LastProjectBySupport(slug: string) {
  const data = await fetchAPI(`
  query LastProjectBySupport($id: ID!) {
    support(id: $id, idType: SLUG) {
      id
      projets(first: 4) {
        edges {
          ${ProjectListItemLayout}
        }
      }
    }
  }
  `, {
    variables: {
      id: slug,
    },
  });

  return data.support;
}
