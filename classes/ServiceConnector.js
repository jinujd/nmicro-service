import { ServiceConnectAdapter } from "./ServiceConnectAdapter.js";
import { Service } from "./Service.js";
export class ServiceConnector {
    adapter = new ServiceConnectAdapter()
    constructor(adapter = new ServiceConnectAdapter()) {
        this.adapter = adapter
    }
    connect(service = new Service()) {
        return this.adapter.connect(service)
    }
    publish(service = new Service()) {
        return this.adapter.publish(service)
    }
}