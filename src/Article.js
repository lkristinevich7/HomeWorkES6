export class Article{
    constructor(selector){
        this.el = document.querySelector(selector)
        this.posts=[]
    }

    loadPosts(posts){
        this.posts=posts
    }

    render(){
        this.el.innerHTML = ''

        this.posts.forEach((post)=>{
            const div= this.renderPost(post)
            this.el.append(div)
        })

        if (this.posts.length==0){
            this.el.innerHTML = `<div>No posts found</div>`
        }
    }

  

    renderPost(post){
        const div = document.createElement('div');
        div.classList.add('articles');
        div.innerHTML = `<p>${post.body}</p>
                        <p>date: ${post.date}</p>
                        <p>last modification date: ${post.modificationDate}</p>
                        <p>author: ${post.author.username}</p>
                        <p>title: ${post.title}</p>
                        <p>vie3ws: ${post.views}</p>
                        <p>keywords: ${post.keywords}</p><hr>`
        return div
        
    }
}

