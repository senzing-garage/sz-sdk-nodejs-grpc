
// ---------------  abstract product from main package
export interface SzAbstractProduct {
    getLicense(): {[key: string]: any} | undefined;
    getVersion(): {[key: string]: any} | undefined;
}