import { getPostByTagName } from '../../constants/queries.ts'
const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_PROJECT_DATASET,
} = import.meta.env

function parsedInput(input) {
  const inputMatch = /^(\w+?)$/.exec(input)
  if (inputMatch)
    return {
      inputTag: inputMatch[1],
    }
  return null
}

const getQueryUrl = (query, tag) => {
  const queryString = encodeURIComponent(query)
  return `https://${PUBLIC_SANITY_STUDIO_PROJECT_ID}.api.sanity.io/v2021-03-25/data/query/${PUBLIC_SANITY_STUDIO_PROJECT_DATASET}?query=${queryString}&$tag="${encodeURIComponent(
    tag
  )}"`
}

const getData = async (queryString, inputTag) => {
  const QUERY_URL = getQueryUrl(queryString, inputTag)
  const DATA = await (await (await fetch(QUERY_URL)).json()).result
  return DATA
}

async function getFilteredPosts(input) {
  let filterInput = parsedInput(input)
  if (filterInput) {
    filterInput = `${filterInput.inputTag
      .charAt(0)
      .toUpperCase()}${filterInput.inputTag.slice(1)}`
    const filteredByTag = `
*[_type == 'post' && tag in tags[].title]{
  title, slug, body, publishedAt, category->{name},
 "numOfComment":count(comments[]), 
 comments[]->{"commentBody":body, publishedAt, "id":_id, type, 
 commenter->{"commenterAvatar":image.asset->url, name}, 
 reply[]->{"replyBody":body, publishedAt, "id":_id, type, 
 commenter->{"avatar":image.asset->url, name}}}, 
  author->{"avatar":image, name, verified},
} | order(_createdAt desc)`
    return getData(filteredByTag, filterInput)
  }
  return null
}

export default getFilteredPosts
