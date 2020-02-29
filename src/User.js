export class User {
    constructor(selector) {
        this.el = document.querySelector(selector);
        this.users=[];
        if (!this.el) { throw Error('Cant find element with selector ' + selector) }

    }

    loadUsers(users){
        this.users= users

    }
    

    render () {
        this.el.innerHTML = ''
    
        this.users.forEach((user) => {
          const div = this.renderUser(user)
          this.el.append(div)
        })

        if (this.users.length==0){
            this.el.innerHTML = `<div>No users found</div>`
        }
    }

    renderUser(user){
        const div = document.createElement('div');
        div.classList.add('users')
        div.innerHTML = `<div><p>User name is ${user.name}</p> 
                        <p>Upassword : ${user.password}</p>
                        <p>Nickname : ${user.nickname}</p> 
                        <p>User name : ${user.username}</p>
                        <p>User sign in date is ${user.signInDate}</p> 
                        <p>User preferences are ${user.preferences}</p>
                        <hr></div>`
        return div
    }
}
