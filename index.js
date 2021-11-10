const pomodoro = {
    minutes: null,
    seconds: null,
    getMinutes: function(elementDiv){this.minutes=document.getElementById(elementDiv)},
    getSeconds: function(elementDiv){this.seconds=document.getElementById(elementDiv)},
    cronometer: null,
    working: false,
    opering: null,
    play: function(){
        this.opering += 1 
        this.working = true
        if(this.working) {
            if(this.opering == 1) {
                this.cronometer = setInterval(() => {
                    this.seconds.innerText--
        
                    if(this.seconds.innerText < 10) {
                        const secTemp2 = this.seconds.innerText
                        this.seconds.innerText = 0 + secTemp2
                    }
        
                    if(this.seconds.innerText == 0) {
                        this.seconds.innerText = 60
                        this.minutes.innerText --
                        if(this.minutes.innerText < 10){
                            const minTemp2 = this.minutes.innerText
                            this.minutes.innerText = 0 + minTemp2
                        }
                    }

                    if(this.seconds.innerText==1){
                        if(this.minutes.innerText ==0){
                            this.stop()
                        }
                    }
                    
                },1000)
            }
        }
    },
    stop: function(){
        clearInterval(this.cronometer)
        this.opering=0
        this.working=false
        this.minutes.innerText = 10
        this.seconds.innerText = 15
    },
    pause: function(){
        clearInterval(this.cronometer)
        this.opering=0
    },
    reset: function(){
        clearInterval(this.cronometer)
        this.working = false
        this.opering = 0
        this.minutes.innerText = 10
        this.seconds.innerText = 15
    },
    upMinutes: function(){
        if(!this.working) {
            const minTemp = parseInt(this.minutes.innerText)
            if(minTemp+15 >= 60){
            this.minutes.innerText = 60
            } else {
                this.minutes.innerText = minTemp+15 
            }     
        }    
    },
    downMinutes: function(){
        if(!this.working){
            const minTemp = parseInt(this.minutes.innerText)
            if(minTemp-15 <= 0){
                this.minutes.innerText = 10
            } else {
                this.minutes.innerText = minTemp-15 
            }  
        }   
    },
    upSeconds: function(){
        if(!this.working){
            const secTemp = parseInt(this.seconds.innerText)
            if(secTemp+15 >= 60){
                this.seconds.innerText = 60
            } else {
                this.seconds.innerText = secTemp+15 
            }
        }       
    },
    downSeconds: function(){
        if(!this.working){
            const secTemp = parseInt(this.seconds.innerText)
            if(secTemp-15 <= 0){
                this.seconds.innerText = 15
            } else {
                this.seconds.innerText = secTemp-15 
            }
        }     
    }
    
}