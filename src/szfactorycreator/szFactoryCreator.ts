import * as grpc from '@grpc/grpc-js';
//import { SzProduct } from '../szProduct';
import { SzAbstractProduct } from '../abstracts/szAbstractProduct';
import { SzAbstractFactory as SzAbstractFactoryAbstract } from '../abstracts/szAbstractFactory';
import { SzProduct as SzProductGrpc } from '../szProduct';

// from "https://github.com/senzing-garage/sz-sdk-python/blob/main/src/senzing/szabstractfactory.py"
export interface SzAbstractFactoryOptions { 
    connectionString: string, 
    credentials?: grpc.ChannelCredentials
}

// from grpc package
export class SzAbstractFactory extends SzAbstractFactoryAbstract{
    //private channel: grpc.Channel = undefined;
    private connectionStr: string;

    constructor(connectionString: string) {
        // create gRPC client connection
        super();
        this.connectionStr = connectionString;
    }

    public createConfig(): undefined {
        return undefined;
    }
    public createConfigManager(): undefined{
        return undefined;
    }
    public createDiagnostic(): undefined{
        return undefined;
    }
    public createEngine(): undefined{
        return undefined;
    }

    override createProduct(): SzProductGrpc {
        return new SzProductGrpc({ connectionString: this.connectionStr });
    }
}