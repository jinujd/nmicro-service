import { ServiceConnectAdapter } from "./ServiceConnectAdapter.js";
import { Service } from "./Service.js";
export class ServiceConnector {
    adapter = new ServiceConnectAdapter()
    serviceInfo = new Object()
    constructor(adapter = new ServiceConnectAdapter(), serviceInfo = new Object()) {
        this.adapter = adapter
        this.serviceInfo = serviceInfo
    }
    call(fnName = "", parameters = []) {
        return this.adapter.call(fnName, parameters, this.serviceInfo)
    }
    publish(service = new Service()) {
        return this.adapter.publish(service, this.serviceInfo)
    }
}