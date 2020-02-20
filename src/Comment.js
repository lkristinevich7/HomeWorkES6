export class Comment{
    constructor(author, body, date, likes, dislikes){
        this.el = document.querySelector('#comment-container')
        this.author = author
        this.body = body
        this.date = date
        this.likes = likes 
        this.dislikes = dislikes


    }

    checkObject(){
        if(!this.author, !this.body, !this.date, !this.likes, !this.dislikes){
            throw Error('comment object is not fully correct')
        }
    }

    render(){
        const div = document.createElement('div');
        div.classList.add('comments')
        div.innerHTML = ` <p>${this.body}</p>
        <p>author: ${this.date}</p>
        <p>author: ${this.author}</p>
        <p>Likes: ${this.likes}</p>
        <p>Dislikes: ${this.dislikes}</p><hr>`
        this.el.appendChild(div)

    }

}