/**
 * build script takes all the src dir, processes anything it needs to and copies it 
 * to the /dist dir
 */

const fs    = require('fs');
const path  = require('path');

const _filesToExclude = [
    path.join('src','index.ts')
];

// move tsbuild info file if exists

if(fs.existsSync(path.join('.', ...'dist/@senzing/sz-sdk-nodejs-grpc/tsconfig.tsbuildinfo'.split('/')))) {
    fs.renameSync(
        path.join('.', ...'dist/@senzing/sz-sdk-nodejs-grpc/tsconfig.tsbuildinfo'.split('/')), 
        path.join('.', ...'dist/@senzing/sz-sdk-nodejs-grpc.tsbuildinfo'.split('/'))
    );
}

// flatten "dist/@senzing/sz-sdk-nodejs-grpc/src" -> "dist/@senzing/sz-sdk-nodejs-grpc"
// first
fs.cpSync(path.join('.', ...'dist/@senzing/sz-sdk-nodejs-grpc/src'.split('/')), path.join('.', ...'dist/@senzing/sz-sdk-nodejs-grpc'.split('/')), { recursive: true});
fs.rmSync(path.join('.', ...'dist/@senzing/sz-sdk-nodejs-grpc/src'.split('/')), { recursive: true, force: true });

// copy js/ts files in "/src" to package dir
fs.cpSync(path.join('.','src'), path.join('.', ...'dist/@senzing/sz-sdk-nodejs-grpc'.split('/')), { recursive: true, filter: (filename) => {
    return !_filesToExclude.includes(filename);
} }, (err) => {
    if (err) {
        console.error(err);
    }
});