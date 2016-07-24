/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author zr
 Shamelessly based on promise-loader by Dan Abramov
 */

 var path = require('path');

module.exports = function () {};
module.exports.pitch = function (remainingRequest) {
  this.cacheable && this.cacheable();

  var query = this.query.substring(1).split(','),
    promiseLib = query[0],
    bundleName = query[1] || '';
  var filename = path.basename(remainingRequest);
  var name = path.basename(remainingRequest, path.extname(filename));

  var regex = /([^\/]+\/[^\/]+)\.[^\/]+$/;

  var result = regex.exec(remainingRequest),trueFilename;

  if(result.length && result.length >= 2){
    trueFilename = result[1];
    trueFilename = trueFilename.replace('/','.');
    filename = trueFilename;
  }

  //默认使用Promise
  bundleName = bundleName.replace(/\[filename\]/g, filename).replace(/\[name\]/g, name);

  var result = [
    'module.exports = function () {\n',
    '  return new Promise(function (resolve) {\n',
    '    require.ensure([], function (require) {\n',
    '      resolve(require(', JSON.stringify('!!' + remainingRequest), '));\n',
    '    }' + (bundleName && (', ' + JSON.stringify(bundleName))) + ');\n',
    '  });\n',
    '}'
  ];

  return result.join('');
};
