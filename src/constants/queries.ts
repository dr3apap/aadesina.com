const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_PROJECT_DATASET, PAGINATION_SIZE} = import.meta.env;
const pageSize = parseInt(PAGINATION_SIZE, 10);
export type Query = string;

export const orderedPost:Query = `
*[_type == 'post']{
  title, slug, body, publishedAt, category->{name},
  comment[]->{body},   
} | order(_createdAt desc)
`
export const getQueryUrl = (query:Query) => {
const queryString = encodeURIComponent(query);
return `https://${SANITY_STUDIO_PROJECT_ID}.api.sanity.io/v2021-03-25/data/query/${SANITY_STUDIO_PROJECT_DATASET}?query=${queryString}`
}

export const getData = async (query:Query) =>{
const QUERY_URL = getQueryUrl(query);
const DATA = await (await(await fetch(QUERY_URL)).json()).result;
return DATA;
}


export const getPostLinks = async () =>{
    return getData(orderedPost);
}
