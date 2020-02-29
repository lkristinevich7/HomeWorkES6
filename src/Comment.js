export class Comment{
    constructor(selector){
        this.el = document.querySelector(selector)
        this.comments=[]
    }

    loadComments(comments){
        this.comments=comments
    }

    render(){
        this.el.innerHTML = ''

        this.comments.forEach((comment)=>{
            const div= this.renderComment(comment)
            this.el.append(div)
        })

        if (this.comments.length==0){
            this.el.innerHTML = `<div>No comments found</div>`
        }
    }

  

    renderComment(comment){
        const div = document.createElement('div');
        div.classList.add('comments');

        if(typeof comment.author == 'object'){
            div.innerHTML = `<p>${comment.post.body}</p>
                        <p>ID: ${comment.id}</p>
                        <p>Comment: ${comment.body}</p>
                        <p>author: ${comment.author.name}</p>
                        <p>date: ${comment.date}</p>
                        <p>likes: ${comment.likes}</p>
                        <p>dislikes: ${comment.dislikes}</p><hr>`
                        return div
            
        }

        else{
        div.innerHTML = `<p>${comment.post.body}</p>
                        <p>ID: ${comment.id}</p>
                        <p>Comment: ${comment.body}</p>
                        <p>author: ${comment.author}</p>
                        <p>date: ${comment.date}</p>
                        <p>likes: ${comment.likes}</p>
                        <p>dislikes: ${comment.dislikes}</p><hr>`
        return div

        }
        
    }
}
