export class Article{
    constructor(body, date, modificationDate, author, title, views, keywords ){
        this.el = document.querySelector('#article-container')
        this.body=body;
        this.date=date;
        this.modificationDate=modificationDate;
        this.author = author;
        this.title = title;
        this.views=views;
        this.keywords= keywords;
    }

    checkObject(){
        if(!this.body || !this.date || !this.modificationDate || !this.author ||!this.title || !this.views || !this.keywords){
            throw Error('article object is not fully correct')

        }
    }

    render(){
        const div = document.createElement('div');
        div.classList.add('articles');
        div.innerHTML = ` <p>${this.body}</p>
        <p>date: ${this.date}</p>
        <p>last modification date: ${this.modificationDate}</p>
        <p>author: ${this.author}</p>
        <p>title: ${this.title}</p>
        <p>vie3ws: ${this.views}</p>
        <p>keywords: ${this.keywords}</p><hr>`
        this.el.appendChild(div)
    }

}

