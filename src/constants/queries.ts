const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_PROJECT_DATASET, PAGINATION_SIZE} = import.meta.env;
//const pageSize = parseInt(PAGINATION_SIZE, 10);
export type Query = string;

export const orderedPost:Query = `
*[_type == 'post']{
  title, slug, body, publishedAt, category->{name}, tags[]->{...},
  "numOfComment":count(comments[]),   
} | order(_createdAt desc)
`;

export const filterByCategory:Query = `
*[_type == 'post]{
  
}
`;

export const allPostData:Query = `
*[_type == 'post']{
  title, slug, body, publishedAt, category->{name},
  tags[]->{...},
 "numOfComment":count(comments[]), 
 comments[]->{"commentBody":body, publishedAt, "id":_id, type, 
 commenter->{"commenterAvatar":image.asset->url, name}, 
 reply[]->{"replyBody":body, publishedAt, "id":_id, type, 
 commenter->{"avatar":image.asset->url, name}}}, 
  author->{"avatar":image, name, verified},
} | order(_createdAt desc)
`;





export const getQueryUrl = (query:Query, param:string | null) => {
const queryString = encodeURIComponent(query);
return `https://${PUBLIC_SANITY_STUDIO_PROJECT_ID}.api.sanity.io/v2021-03-25/data/query/${PUBLIC_SANITY_STUDIO_PROJECT_DATASET}?query=${queryString}&$tag="${param}"`;
}

export const getData = async (query:Query, param:string) =>{
const QUERY_URL = getQueryUrl(query, param);
const DATA = await (await(await fetch(QUERY_URL)).json()).result;
return DATA;
}


export const getPostLinks = async () =>{
    return getData(orderedPost, "");
}

export const getAllPostData = async () =>{
  return getData(allPostData, "");
}
