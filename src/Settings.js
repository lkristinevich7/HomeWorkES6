import { posts } from './posts.js'

export const settings = [
  {
    post: posts[0],
    timePreferencies: "high",
    expireDate: new Date(2, 5 ,2021)
  },
  {
    post: posts[1],
    timePreferencies: "low",
    expireDate: new Date(12, 2 ,2021)
  },
  {
    post: posts[2],
    timePreferencies: "middle",
    expireDate: new Date(10, 1 ,2021)
  },
  {
    post: posts[3],
    timePreferencies: "high",
    expireDate: new Date(2, 1 ,2021)
  },
  {
    post: posts[4],
    timePreferencies: "high",
    expireDate: new Date(3, 6 ,2021)
  },

]

