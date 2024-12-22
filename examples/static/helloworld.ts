import path from 'path';
import { fileURLToPath } from 'url';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { SzProductClient } from '../../src/szproduct/szproduct_grpc_pb';
import { GetVersionRequest, GetVersionResponse } from '../../src/szproduct/szproduct_pb';

const PORT = 8261;
const PROTO_FILE    = '../src/proto/szproduct.proto';
//const __filename    = fileURLToPath(import.meta.url); // get the resolved path to the file
//const __dirname     = path.dirname(__filename); // get the name of the directory

/*const packageDef    = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj       = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;

const client = new grpcObj.szproduct.SzProduct(
    `0.0.0.0:${PORT}`,
    grpc.credentials.createInsecure()
);
*/
const client    = new SzProductClient(`0.0.0.0:${PORT}`, grpc.credentials.createInsecure());

// request will time out in 5s
const deadline  = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);

// wait for the client to be available

client.waitForReady(deadline, (err) => {
    if(err) {
        console.error(err);
        return
    }
    onClientReady();
})

function onClientReady() {
    const request = new GetVersionRequest();
    client.getVersion(request, (err, res) =>{
        if(err) {
            console.log('ERROR: ',err);
            return;
        }
        console.log("RESPONSE:\n\r", JSON.parse(res.getResult() as string));
        //console.log("RESPONSE", res);
    });
}
//console.log('hello');