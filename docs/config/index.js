/* global __dirname */
//https://toddmotto.com/documenting-angular-dgeni#setup-the-file-reading-and-writing

'use strict';
var path = require('canonical-path');

var packagePath = __dirname;

var Package = require('dgeni').Package;

module.exports = new Package('myDoc', [
    require('dgeni-packages/ngdoc'), require('dgeni-packages/nunjucks')
  ])
  .config(function(log, readFilesProcessor, writeFilesProcessor) {
    log.level = 'info';

    readFilesProcessor.basePath = path.resolve(packagePath, '../..');

    readFilesProcessor.sourceFiles = [{
      include: 'src/app/**/**/*.js',
      basePath: 'src/app'
    }, {
      include: 'docs/content/**/*.md',
      basePath: 'docs/content',
      fileReader: 'ngdocFileReader'
    }];

    writeFilesProcessor.outputFolder = 'docs/build';
  })
  .config(function(templateFinder) {
    templateFinder.templateFolders.unshift(path.resolve(packagePath, 'templates'));
  })
  .config(function(computePathsProcessor, computeIdsProcessor) {
    computePathsProcessor.pathTemplates.push({
      docTypes: ['module'],
      pathTemplate: '${area}/${name}',
      outputPathTemplate: 'partials/${area}/${name}.html'
    });
    computePathsProcessor.pathTemplates.push({
      docTypes: ['componentGroup'],
      pathTemplate: '${area}/${moduleName}/${name}',
      outputPathTemplate: 'partials/${area}/${moduleName}/${name}.html'
    });

      computeIdsProcessor.idTemplates.push({
        docTypes: ['content', 'indexPage'],
        getId: function(doc) { return doc.fileInfo.baseName; },
        getAliases: function(doc) { return [doc.id]; }
    });

    computePathsProcessor.pathTemplates.push({
      docTypes: ['content'],
      getPath: function(doc) {
        var docPath = path.dirname(doc.fileInfo.relativePath);
        if (doc.fileInfo.baseName !== 'index') {
          docPath = path.join(docPath, doc.fileInfo.baseName);
        }
        return docPath;
      },
      outputPathTemplate: 'partials/${path}.html'
    });
  })
  .processor(require('./processors/index-page'))
  .processor(require('./processors/guide-data'))
  .processor(require('./processors/api-data'));
