'use strict';

const path = require('path');

module.exports = {
  fsRoot: process.env.OPUSCAPITA_FILEMANAGER_FS_ROOT || path.resolve('../../demo/demo-fs'),
  rootName: 'Customization area',
  readOnly: process.env.OPUSCAPITA_FILEMANAGER_READONLY || false,
  port: process.env.PORT || '3020',
  host: process.env.HOST || 'localhost'
};
