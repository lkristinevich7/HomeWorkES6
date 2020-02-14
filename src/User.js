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
        if (this.login==''&& this.password=='') { throw Error('Please provide us with login or password') }
        

    }

    render(){
        this.el.innerHTML= `<div>User name is ${this.login}, password : ${this.password}, nickname : ${this.nickname}, name : ${this.name}, sign in date is ${this.signindate}, preferences are ${this.preferences} </div>`
    
    }


    
}