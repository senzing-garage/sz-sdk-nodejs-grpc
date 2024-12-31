import { SzAbstractProduct } from "./szAbstractProduct";

// --------------- this factory would normally come from core/native
export abstract class SzAbstractFactory {
    constructor() { return; }
    abstract createConfig(): undefined;
    abstract createConfigManager(): undefined;
    abstract createDiagnostic(): undefined;
    abstract createEngine(): undefined;
    abstract createProduct(factory: any): SzAbstractProduct | undefined;
}
