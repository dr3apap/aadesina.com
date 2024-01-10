const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_PROJECT_DATASET,
  PAGINATION_SIZE,
} = import.meta.env

export const pageSize = parseInt(PAGINATION_SIZE, 10)
export type Query = string

export const ORDERED_POSTS: Query = `
*[_type == 'post']| order(_createdAt desc)
{
  title, slug, publishedAt, category->{name}, tags[]->{...},
  "numOfComment":count(comments[]),
  "comment":comment{..., commenter[]->{...}},
} `

export const POST_BY_CATEGORY: Query = `
*[_type == "blogContent"]{
"blogHeading":heading,
"blogIntro":intro,
FrontEnd{..., selection[]->{...,tags[]->{title}, author->{image,name,verified}, category->{name}}},
Iot{..., selection[]->{...,tags[]->{title}, author->{image,name,verified}, category->{name}}},
OperatingSystem{..., selection[]->{...,tags[]->{title}, author->{image,name,verified}, category->{name}}},
BackEnd{..., selection[]->{tags[]->{title}, author->{image,name,verified}, category->{name}}},
Tools{..., selection[]->{...,tags[]->{title}, author->{image,name,verified}, category->{name}}},
GameDesign{..., selection[]->{...,tags[]->{title}, author->{image,name,verified}, category->{name}}},
SystemDesign{..., selection[]->{...,tags[]->{title}, author->{image,name,verified}, category->{name}}},
Networking{..., selection[]->{...,tags[]->{title}, author->{image,name,verified}, category->{name}}},
}`

export const FILTER_BY_TAG: Query = `*[_type == 'post' && tag in tags[].title]{
  title, slug, body, publishedAt, category->{name},
 "numOfComment":count(comments[]), 
 comments[]->{"commentBody":body, publishedAt, "id":_id, type, 
 commenter->{"commenterAvatar":image.asset->url, name},
 replies[]{...}}, 
  author->{"avatar":image, name, verified},
} | order(_createdAt desc)
`

export const SITE_CONFIG = `
  *[_type == "siteConfig"][0]{
    about,
    hero,
    rss{...},
    character->{
        ...,
      "avatar": image,
      name
    },
    demo{..., demos[]->{...}},
  }
`
export const ALL_POSTS = `
  *[_type == "post"] | order(publishedAt desc)
`

export const ALL_POST_DATA: Query = `
*[_type =="post"]{
  title, slug, body, publishedAt, category->{name},
  tags[]->{title},
 "numOfComment":count(comments[]), 
 comments[]->{"commentBody":body, publishedAt, "id":_id, 
 commenter->{"commenterAvatar":image, name}, 
 replies[]->{..., "replyBody":content.body, "title":content.title, publishedAt, "id":_id, "replier":commenter{..., "replierAvatar":image},  ...} }, 
  author->{"avatar":image, name, verified}
} | order(_createdAt desc)`

export const RSS_POSTS: Query = `
  *[_type == "post"]{
    ...,
    category->{name},
    tags[]->{title},
    author->{
      "avatar": image,
      name,
      ...
    }
  } | order(publishedAt desc)
`
export const ALL_TAGS = `
  *[_type == "tag"] | order(title){
      ...
  }
`

export const ALL_CATEGORY = `
*[_type == "category"] | order(name){
    name,
    ...
}
`

export const RSS_FEED: Query = `
  {
    "posts": ${RSS_POSTS},
    "category": ${ALL_CATEGORY},
    "config": ${SITE_CONFIG},
    "tags":${ALL_TAGS},
  }
 `

export const ALL_AUTHOR = `
  *[_type == "author"]{
    ...,
    "avatar": image,
    specialty->{...}
  }
`
export const ALL_DEMO = `
  *[_type == "demo"]`

export const FEATURE = `
 *[_type == "demo" && feature]{
    ...,
    "bImage": image,
  }
`
export const ALL_COMMENT = `
*[_type == "comment"]`

export const ALL_COMMENTER = `
[_type == 'comment' ]{
  commenter->{image, name,
  comments[]->{...}}
}`
export const ALL_PAGE_DATA = `
  {
    "authors": ${ALL_AUTHOR},
    "tags": ${ALL_TAGS},
    "config": ${SITE_CONFIG},
    "posts": ${ALL_POSTS},
    "comments":${ALL_COMMENT},
    "commenters":${ALL_COMMENTER},
    "postCategories":${POST_BY_CATEGORY},
    "demos":${ALL_DEMO},
    "feature":${FEATURE},
  }
`

export const getQueryUrl = (query: Query, param: string | null) => {
  const queryString = encodeURIComponent(query)
  return `https://${PUBLIC_SANITY_STUDIO_PROJECT_ID}.api.sanity.io/v2021-03-25/data/query/${PUBLIC_SANITY_STUDIO_PROJECT_DATASET}?query=${queryString}&tag="${param}"`
  //
}

export const getData = async (query: Query, param: string | null) => {
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

export const getPostComments = async () => {
  return getData(ALL_COMMENT, '')
}

export const getPostByCategory = async () => {
  return getData(POST_BY_CATEGORY, '')
}

export const getAllCategory = async () => {
  return getData(ALL_CATEGORY, '')
}

export const getDemoFeature = async () => {
  return getData(FEATURE, '')
}

export const getAllDemo = async () => {
  return getData(ALL_DEMO, '')
}
export const getPostByTagName = async (tagName) => {
  return getData(FILTER_BY_TAG, tagName)
}

export const getAllTag = async () => {
  return getData(ALL_TAGS, '')
}

export const getAllAuthors = async () => {
  return getData(ALL_AUTHOR, '')
}

export const getAllData = async () => {
  return getData(ALL_PAGE_DATA, '')
}
//console.log(`From the queries file: ${await getAllData()}`)
