const fs    = require('fs');
const path  = require('path');
const glob  = require('glob');

// move tgz up a directory
function movePackage(sourcePattern, destination) {
    glob(sourcePattern, (err, files) => {
      if (err) {
        console.error('Error:', err);
        return;
      }
  
      files.forEach(file => {
        const filename  = (file.split(path.sep)).pop();
        const newPath   = path.join(destination, filename);
        fs.renameSync(file, newPath, (err) => {
            if (err) {
              console.error('Error moving:', err);
            } else {
              console.log('Moved:', file, 'to', newPath);
            }
        });
      });
    });
}

movePackage(path.join('dist','@senzing','sz-sdk-nodejs-grpc','*.tgz'), path.join('dist','@senzing'));