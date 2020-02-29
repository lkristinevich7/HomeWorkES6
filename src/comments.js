import { users } from './users.js'
import { posts } from './posts.js'
export const comments = [
  {
    id: 'com1',
    post: posts[0],
    body: 'Lorem ipsum...',
    author: users[0],
    date: new Date(2020, 1, 16),
    likes: 1,
    dislikes: 0
  },
  {
    id: 'com2',
    post: posts[1],
    body: 'pretty good',
    author: users[1],
    date: new Date(2020, 1, 1),
    likes: 10,
    dislikes: 5
  },
  {
    id: 'com3',
    post: posts[2],
    body: 'Awful',
    author: users[2],
    date: new Date(2019, 1, 1),
    likes: 1,
    dislikes: 0
  },
  {
    id: 'com4',
    post: posts[3],
    body: 'Nice.',
    author: users[3],
    date: new Date(2017, 1, 2),
    likes: 0,
    dislikes: 9
  },
  {
    id: 'com5',
    post: posts[4],
    body: 'Praesent viverra, purus vitae luctus faucibus, massa diam condimentum ante, et eleifend erat libero ut magna. Cras risus felis, sodales non velit quis, bibendum tincidunt turpis. Vivamus fermentum lacus lectus, ac lobortis neque malesuada vitae.',
    author: 'unknown2',
    date: new Date(2020, 1, 12),
    likes: 7,
    dislikes: 4
  },
  {
    id: 'com6',
    post: posts[0],
    body: 'Cool',
    author: 'unknown1',
    date: new Date(2019, 1, 22),
    likes: 5,
    dislikes: 1
  }
]
