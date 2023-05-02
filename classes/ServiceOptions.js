export class ServiceOptions {
    stayAwake = true
    onBeforeStart = (serviceName, options) => {
        console.log(`Starting service with name ${serviceName}`)
    }
    onAfterStart = (serviceName, options) => {
        console.log(`Service with name ${serviceName} is running`)
    } 
    constructor(obj) {
        if(!obj) return
        this.stayAwake = obj.stayAwake !== undefined? obj.stayAwake: this.stayAwake
        this.onBeforeStart = obj.onBeforeStart || this.onBeforeStart
        this.onAfterStart = obj.onAfterStart || this.onAfterStart
    }
}