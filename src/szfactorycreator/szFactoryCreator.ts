import * as grpc from '@grpc/grpc-js';
//import { SzProduct } from '../szProduct';
import { SzAbstractProduct } from '../abstracts/szAbstractProduct';
import { SzAbstractFactory as SzAbstractFactoryAbstract } from '../abstracts/szAbstractFactory';
import { SzProduct } from '../szProduct';

// from "https://github.com/senzing-garage/sz-sdk-python/blob/main/src/senzing/szabstractfactory.py"
export interface SzAbstractFactoryParameters {

}

// from grpc package
export class SzAbstractFactory implements SzAbstractFactoryAbstract{
    //private channel: grpc.Channel = undefined;

    constructor(szFactoryAbstract: SzAbstractFactoryAbstract) {}

    public createConfig(): undefined{
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

    public createProducts(): SzProduct | undefined{
        return undefined;
    }
}