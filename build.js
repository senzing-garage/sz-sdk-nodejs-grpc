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
function renameModuleFiles(renamePatterns, debug = false) {
    return new Promise((resolve, reject) => {
        let hasErrors   = false;
        let _errors     = [];
        let _filesMoved = [];
        renamePatterns.forEach((_pair, _index) => {
            let inputGlob   = _pair[0];
            let outputName  = _pair[1];
            let isLastGlob  = _index === (renamePatterns.length - 1);

            glob(inputGlob, (err, files) => {
                if (err) {
                  _errors.push(err);
                  return;
                }
                //console.log(`files: `, files);
                let remainingRequests  = files.length;

                files.forEach((file, _fIndex) => {
                    let isLastFile = _fIndex === (files.length - 1);
                    //const filename  = (file.split(path.sep)).pop();
                    const fpath     = path.dirname(file);
                    const newPath   = path.join(fpath, outputName);
                    
                    fs.rename(file, newPath, (err) => {
                        remainingRequests = remainingRequests -1;
                        if (err) {
                            _errors.push(err);
                        } else {
                            _filesMoved.push(`${file} ~> ${newPath}`);
                        }

                        if(isLastGlob && (remainingRequests <= 0)) {
                            if(_errors && _errors.length > 0) {
                                reject(_errors);
                                return;
                            }
                            resolve(_filesMoved);
                        }
                    });
                });
            });
        });
    });    
}

let afterFileRenaming = () => {
    console.log('\nRenaming Import(s)');
    try {
        const results = replaceInFile({
            files:  [
                'dist/@senzing/sz-sdk-nodejs-grpc/**/grpc.js',
            ],
            from:   ["szconfig_pb.js","szconfigmanager_pb.js","szdiagnostic_pb.js","szengine_pb.js","szproduct_pb.js"],
            to:     "index.js"
        }).then((results) => {
            if(results && results.forEach) {
                results.filter((rep) => { return rep.hasChanged }).forEach((rep) => {
                    console.log(`\t"${rep.file}"`);
                });
            }
            //console.log('Replacement results:', results)
        }).catch(err => {
            console.error(err);
        });
        replaceInFile({
            files:  [
                'dist/@senzing/sz-sdk-nodejs-grpc/**/grpc.d.ts',
            ],
            from:   ["./szconfig_pb","./szconfigmanager_pb","./szdiagnostic_pb","./szengine_pb","./szproduct_pb"],
            to:     "./index"
        }).then((results) => {
            if(results && results.forEach) {
                results.filter((rep) => { return rep.hasChanged }).forEach((rep) => {
                    console.log(`\t"${rep.file}"`);
                });
            }
            //console.log('Replacement results:', results)
        }).catch(err => {
            console.error(err);
        });
        
    } catch (error) {
        console.error('Error occurred:', error)
    }
}

// go through each module directory and rename the service file(s) ending in "_gprc_pb.js" and "_gprc_pb.d.ts"
// to "gprc.js"/"grpc.d.ts"
renameModuleFiles([
    ["./dist/@senzing/sz-sdk-nodejs-grpc/**/**_grpc_pb.js", "grpc.js"],
    ["./dist/@senzing/sz-sdk-nodejs-grpc/**/**_grpc_pb.d.ts", "grpc.d.ts"]
])
.then(
    (filesRenamed) => {
        // now do the same thing for index files
        renameModuleFiles([
            ["./dist/@senzing/sz-sdk-nodejs-grpc/**/**_pb.js", "index.js"],
            ["./dist/@senzing/sz-sdk-nodejs-grpc/**/**_pb.d.ts", "index.d.ts"]
        ]).then((_fR2) => {
            let _result = filesRenamed.concat(_fR2);
            console.log('Renamed Package Files: \n\r');
            _result.forEach((_rnoutput) => {
                console.log(`\t${_rnoutput}`);
            });
            // now rename any import refs

            afterFileRenaming();
        });
    },
    (err) => {
        console.error(err);
    }
).catch((errors) => {
    console.log(`Errors Occcurred: \n\r`, errors);
}).finally(() => {
    //console.log('------------------- ended -------------------')
})


