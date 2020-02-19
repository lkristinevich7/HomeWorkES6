import { User } from "./User.js";
import { Article } from "./Article.js";

const user = new User('test','test1','test1', 'test1', 'test','test')
const user2 = new User('test2','test2','test2', 'test2', 'test2','test2')

user.checkObject()
user2.checkObject()
user.render()
user2.render()

// const article = new Article('test1','test1','test1', 'test1', 'test','test');
// article.render()
