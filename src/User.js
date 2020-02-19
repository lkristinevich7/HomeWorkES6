export class User {
    constructor(login, password, nickname, name, signindate, preferences ) {
        this.el = document.querySelector('#user-container');
        // this.users=[]
        this.login = login;
        this.password = password;
        this.nickname = nickname;
        this.name = name;
        this.signindate = signindate;
        this.preferences = preferences;

    }

    checkObject(){
        if (!this.login || !this.password || !this.nickname || !this.name ||  !this.signindate || !this.preferences ) { 
            throw Error('object is not fully correct')
        }
        
    }

    render(){
        const newuser = document.createElement('div');
        newuser.classList.add('users')
        newuser.innerHTML = `<div>User name is ${this.login}, password : ${this.password}, nickname : ${this.nickname}, name : ${this.name}, sign in date is ${this.signindate}, preferences are ${this.preferences} </div>`
        this.el.appendChild(newuser)
    
    }
    
}