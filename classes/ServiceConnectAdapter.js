import { Service } from "./Service.js"
export class ServiceConnectAdapter { 
    connect = (service = new Service()) => {}
    publish = (service = new Service()) => {}
}