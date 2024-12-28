import * as grpc from '@grpc/grpc-js';

export class SzProduct {
    constructor(connection: string, credentials?: grpc.ChannelCredentials);
    getVersion(): Promise<any>;
}

export namespace SzProduct {
    export type AsObject = {
    }
}