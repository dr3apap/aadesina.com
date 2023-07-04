
{/* <script is:inline> */}
import "dotenv/config";

const allPostData = `
*[_type == 'post']{
  title, slug, body, publishedAt, category->{name},
  comment[]->{"commentBody":body, publishedAt, commenter->{"commenterAvatar":image, name}}, 
  author->{"avatar":image, name},
} | order(_createdAt desc)
`


 const getQueryUrl = (query) => {
const queryString = encodeURIComponent(query);
return `https://${process.env.SANITY_STUDIO_PROJECT_ID}.api.sanity.io/v2021-03-25/data/query/${process.env.SANITY_STUDIO_PROJECT_DATASET}?query=${queryString}`
}

 const getData = async (query) =>{
const QUERY_URL = getQueryUrl(query);
const DATA = await (await(await fetch(QUERY_URL)).json()).result;
return DATA;
}


 const getAllPostData = async () =>{
  return getData(allPostData);
}
console.log(getAllPostData());
// </script>