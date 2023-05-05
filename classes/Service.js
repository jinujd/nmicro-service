import { ServiceOptions } from "./ServiceOptions.js";
import process from 'process';
export class Service {
    name
    port
    server
    serviceFn
    options = new ServiceOptions()
    constructor(name, serviceFn = () => {}, port,options = new ServiceOptions() ) { 
        this.options = !(options instanceof ServiceOptions)? new ServiceOptions(options): options 
        this.name = name
        this.port = port 
        this.serviceFn = serviceFn 
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
        
        return this.serviceFn()
    }
    async start() {
        await this.onBeforeStart()
        const result = await this.startService()
        await this.onAfterStart()
        return result
    }
}