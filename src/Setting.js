export class Setting{
    constructor(selector){
        this.el= document.querySelector(selector)
        this.settings=[]


    }
    loadSettings(settings){
        this.settings=settings
    }



    render () {
        this.el.innerHTML = ''
    
        this.settings.forEach((setting) => {
          const div = this.renderSetting(setting)
          this.el.append(div)
        })

        if (this.settings.length==0){
            this.el.innerHTML = `<div>No settings found</div>`
        }
    }


    renderSetting(setting){
        const div = document.createElement('div')
        div.classList.add('settings')
        div.innerHTML=`<div><p>${setting.post.id}</p>
        <p> Time preferencies: ${setting.timePreferencies}</p>
        <p> article validity: ${setting.expireDate}</p><hr></div>`
        this.el.appendChild(div)

        return div
    }

    

};
