import { ServiceConnectAdapter } from "./ServiceConnectAdapter.js";
export class ServiceConnector {
    adapter = new ServiceConnectAdapter()
    constructor(adapter = new ServiceConnectAdapter()) {
        this.adapter = adapter
    }
    connect() {
        return this.adapter.connect()
    }
    publish() {
        return this.adapter.publish()
    }
}