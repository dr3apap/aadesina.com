import { getAllData } from '../constants/queries'

const { PAGINATION_SIZE } = import.meta.env
export default async function PageData() {
  const allData = await getAllData()
  const page = {
    config: allData.config,
    comments: allData.comments,
    authors: allData.authors,
    tags: allData.tags,
    demos: allData.demos,
    feature: allData.feature,
    postCategories: {
      data: allData.postCategories[0],
      totalPages: PAGINATION_SIZE,
      currentPage: 1,
    },
    posts: {
      data: allData.posts,
      totalPages: PAGINATION_SIZE,
      currentPage: 1,
    },
  }
  return page
}

export const postsPageNation = () => {
  let index = this.data.length / pageSize
  let chunks
  function next() {
    if (this.currentPage > index) return
    chunks = this.data.slice(
      this.currentPage * pageSize - pageSize,
      pageSize * this.currentPage
    )
    this.currentPage++
    return chunks
  }
  function previous() {
    if (this.currentPage < 1) return
    chunks = this.data.slice(
      (this.currentPage - 1) * pageSize,
      pageSize * (this.currentPage - 1)
    )
    this.currentPage--
    return chunks
  }

  return [next, previous, this.data.length / pageSize]
}
