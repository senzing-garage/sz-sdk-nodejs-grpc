import * as grpc from '@grpc/grpc-js';
import { GetVersionRequest, GetVersionResponse } from './szproduct/szproduct_pb';
import { SzProductClient } from './szproduct/szproduct_grpc_pb';
import { SzAbstractProduct } from './abstracts/szAbstractProduct';

// --------------- user facing "grpc.SzProduct" inheriting from SzAbstractProduct
export class SzProduct implements SzAbstractProduct {
    private connectionString;
    private credentials;
    private client;

    constructor(connectionString = `0.0.0.0:8261`, credentials = grpc.credentials.createInsecure()) {
        this.connectionString   = connectionString;
        this.credentials        = credentials;
        this.client             = new SzProductClient(this.connectionString, this.credentials);
    }
    getLicense() {
        return undefined;
    }
    getVersion() {
        return new Promise((resolve, reject) => {
            const request = new GetVersionRequest();
            this.client.getVersion(request, (err, res) => {
                if(err) {
                    reject(err)
                    return;
                }
                let result = JSON.parse(res.getResult());
                console.log("RESPONSE:\n\r", result);
                resolve(result);
            });
        });
    }
}