/*
export * from './szconfig/szconfig_grpc_pb';
export * from './szconfigmanager/szconfigmanager_grpc_pb';
export * from './szdiagnostic/szdiagnostic_grpc_pb';
export * from './szengine/szengine_grpc_pb';
export * from './szproduct/szproduct_grpc_pb';
export * from './szconfig/szconfig_pb';
export * from './szconfigmanager/szconfigmanager_pb';
export * from './szdiagnostic/szdiagnostic_pb';
export * from './szengine/szengine_pb';
export * from './szproduct/szproduct_pb';
*/

export class SzSdkAbstractFactory {
    private _isOpen: boolean = false;
    constructor(private connStr: string) {
        console.log('SzSdkAbstractFactory()');
    }
}