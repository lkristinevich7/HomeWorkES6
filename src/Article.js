export class Article{
    constructor(body, date, modificationDate,author, title, views, keywords ){
        this.el = document.querySelector('article-container')
        this.body=body;
        this.date=date;
        this.modificationDate=modificationDate;
        this.author = author;
        this.title = title;
        this.views=views;
        this.kewords= keywords;
    }

}
