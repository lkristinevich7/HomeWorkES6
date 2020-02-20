import { User } from "./User.js";
import { Article } from "./Article.js";
import {Comment} from "./Comment.js"
import { Settings } from "./Settings.js";

const user = new User('user1','test1','test1', 'test1', 'test','test')
const user2 = new User('user2','test2','test2', 'test2', 'test2','test2')
user.checkObject()
user2.checkObject()
user.render()
user2.render()

const article = new Article('article1','test3','test3', 'test3', 'test3','test3', 'test3');
const article2 = new Article('article2','test3','test3', 'test3', 'test3','test3', 'test3');
article.checkObject()
article2.checkObject()
article.render()
article2.render()

const comment = new Comment('comment1','comment1','test1', 'test1', 'test')
comment.checkObject()
comment.render()
const comment2 = new Comment('comment2','comment2','test1', 'test1', 'test')
comment2.checkObject()
comment2.render()

const settings = new Settings('123', '123')
settings.checkObject()
settings.render()

