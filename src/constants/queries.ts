const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_PROJECT_DATASET,
  PAGINATION_SIZE,
} = import.meta.env
//const pageSize = parseInt(PAGINATION_SIZE, 10);
export type Query = string

export const ORDERED_POSTS: Query = `
*[_type == 'posts']{
  title, slug, body, publishedAt, category->{name}, tags[]->{...},
  "numOfComment":count(comments[]),   
} | order(_createdAt desc)
`

export const FILTER_BY_CATEGORY: Query = `
*[_type == 'posts]{
}
`
export const SITE_CONFIG = `
  *[_type == "siteConfig"][0]{
    ...,
    character->{
      "avatar": image,
      ...
    }
  }
`
export const ALL_POSTS = `
  *[_type == "post"] | order(publishedAt desc)
`

export const ALL_POST_DATA: Query = `
*[_type == 'posts']{
  title, slug, body, publishedAt, category->{name},
  tags[]->{...},
 "numOfComment":count(comments[]), 
 comments[]->{"commentBody":body, publishedAt, "id":_id, type, 
 commenter->{"commenterAvatar":image.asset->url, name}, 
 reply[]->{"replyBody":body, publishedAt, "id":_id, type, 
 commenter->{"avatar":image.asset->url, name}}}, 
  author->{"avatar":image, name, verified},
} | order(_createdAt desc)
`

export const RSS_POSTS: Query = `
  *[_type == "posts"]{
    ...,
    posts[]->{
      tags[]->{...}
    },
    tags[]->{...},
    author->{
      "avatar": image,
      ...
    }
  } | order(publishedAt desc)
`
export const ALL_TAGS = `
  *[_type == "tags"]
`

export const RSS_FEED: Query = `
  {
    "posts": ${RSS_POSTS},
    "tags": ${ALL_TAGS},
    "config": ${SITE_CONFIG},
  }
 `

export const ALL_AUTHORS = `
  *[_type == "author"]{
    ...,
    "avatar": image.asset->url,
    specialty->{...}
  }
`

export const ALL_COMMENTS = `
*[_type == "comments"]
`

export const ALL_PAGE_DATA = `
  {
    "authors": ${ALL_AUTHORS},
    "tags": ${ALL_TAGS},
    "config": ${SITE_CONFIG},
    "posts": ${ALL_POSTS},
    "comments":${ALL_COMMENTS},
  }
`

export const getQueryUrl = (query: Query, param: string | null) => {
  const queryString = encodeURIComponent(query)
  return `https://${PUBLIC_SANITY_STUDIO_PROJECT_ID}.api.sanity.io/v2021-03-25/data/query/${PUBLIC_SANITY_STUDIO_PROJECT_DATASET}?query=${queryString}&$tag="${param}"`
}

export const getData = async (query: Query, param: string) => {
  const QUERY_URL = getQueryUrl(query, param)
  const DATA = await (await (await fetch(QUERY_URL)).json()).result
  return DATA
}

export const getPostLinks = async () => {
  return getData(ORDERED_POSTS, '')
}

export const getAllPostData = async () => {
  return getData(ALL_POST_DATA, '')
}

export const getRssData = async () => {
  return getData(RSS_FEED, '')
}
