/**
 * build script takes all the src dir, processes anything it needs to and copies it 
 * to the /dist dir
 */

const fs    = require('fs');
const path  = require('path');
const glob  = require('glob');
const replaceInFile = require('replace-in-file').replaceInFile;

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


// go through each module directory and rename the file(s) ending in "_pb.js/_pb.d.ts"
// to "index.js"/"index.d.ts"
function renameModuleFiles(inputGlob, outputName) {
    return new Promise((resolve, reject) => {
        let hasErrors = false;
        glob(inputGlob, (err, files) => {
            if (err) {
              console.error('Error:', err);
              hasErrors = true;
              return;
            }
            //console.log(`files: `, files);
        
            files.forEach(file => {
              //const filename  = (file.split(path.sep)).pop();
              const fpath     = path.dirname(file);
              const newPath   = path.join(fpath, outputName);
              //console.log(`fpath: ${fpath}\n\rnew path: ${newPath}`);
              
              fs.renameSync(file, newPath, (err) => {
                  if (err) {
                    hasErrors = true;
                    console.error('Error moving:', err);
                  } else {
                    //console.log('Moved:', file, 'to', newPath);
                  }
              });
            });
            if(hasErrors) {
                reject();
                return;
            };
            return resolve();
        });
    });    
}

// go through each module directory and rename the file(s) ending in "_gprc_pb.js"
// to "gprc.js"
renameModuleFiles("./dist/@senzing/sz-sdk-nodejs-grpc/**/**_grpc_pb.js", "grpc.js").then(
    (res) => {
        // now do the same thing for index files
        renameModuleFiles("./dist/@senzing/sz-sdk-nodejs-grpc/**/**_pb.js", "index.js");
        renameModuleFiles("./dist/@senzing/sz-sdk-nodejs-grpc/**/**_pb.d.ts", "index.d.ts");
        
        try {
            const moduleNames = ['sz_product_pb.js']
            const results = replaceInFile({
                files:  [
                    'dist/@senzing/sz-sdk-nodejs-grpc/**/grpc.js'
                ],
                from:   ["szconfig_pb.js","szconfigmanager_pb.js","szdiagnostic_pb.js","szengine_pb.js","szproduct_pb.js"],
                to:     "index.js"
            }).then((results) => {
                if(results && results.forEach) {
                    results.filter((rep) => { return rep.hasChanged }).forEach((rep) => {
                        console.log(`renamed import path in "${rep.file}"`);
                    });
                }
                //console.log('Replacement results:', results)
            }).catch(err => {
                console.error(err);
            })
        } catch (error) {
            console.error('Error occurred:', error)
        }
    },
    (err) => {
        console.error(err);
    }
)


