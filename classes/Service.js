import { ServiceOptions } from "./ServiceOptions.js";
import process from 'process';
export class Service {
    name
    port
    server
    serviceBody
    serviceInstance
    options = new ServiceOptions()
    constructor(name, serviceBody = () => {}, port,options = new ServiceOptions() ) { 
        this.options = !(options instanceof ServiceOptions)? new ServiceOptions(options): options 
        this.name = name
        this.port = port 
        this.serviceBody = serviceBody 
    }
    async onBeforeStart() { 
        await this.options.onBeforeStart(this.name, this.options)
    }
    async onAfterStart() { 
        await this.options.onAfterStart(this.name, this.options)
    }
    listenForUserInput() { 
        process.stdin.once("data", function(data) { 
            process.stdin.pause();
        });
    }
    async startService() { 
        if(this.options.stayAwake) 
            this.listenForUserInput()
        
        return typeof this.serviceBody == `function`?this.serviceBody(): this.serviceBody
    }
    async start() {
        await this.onBeforeStart()
        this.serviceInstance = await this.startService()
        await this.onAfterStart()
        return this.serviceInstance
    }
    getInstance() {
        return this.serviceInstance
    }
}