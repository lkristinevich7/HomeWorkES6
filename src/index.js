import { User } from "./User.js";
import { Article } from "./Article.js";
import {Comment} from "./Comment.js"
import { Setting } from "./Setting.js";



const user = new User('#user-container')
const post = new Article('#article-container')
const comment = new Comment('#comment-container')
const setting = new Setting('#settings-container')



fetch('http://localhost:3000/users')
  .then(resp => resp.json())
  .then(users => {
    user.loadUsers(users)
    user.render()
  })

  fetch('http://localhost:3000/posts')
  .then(resp => resp.json())
  .then(posts => {
    post.loadPosts(posts)
    post.render()
  })

  fetch('http://localhost:3000/comments')
  .then(resp => resp.json())
  .then(comments => {
    comment.loadComments(comments)
    comment.render()
  })

  fetch('http://localhost:3000/settings')
  .then(resp => resp.json())
  .then(settings => {
    setting.loadSettings(settings)
    setting.render()
  })