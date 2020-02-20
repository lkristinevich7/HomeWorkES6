export class Settings{
    constructor(timePreferencies, validity){
        this.el= document.querySelector("#settings")
        this.timePreferencies = timePreferencies;
        this.validity = validity;

    }


    checkObject(){
        if(!this.timePreferencies || !this.validity){
            throw Error('settings object is not fully correct')
        }

    }
    render(){
        const div = document.createElement('div')
        div.classList.add('settings')
        div.innerHTML=`Time preferencies: ${this.timePreferencies}, article validity: ${this.validity}`
        this.el.appendChild(div)
    }

};
