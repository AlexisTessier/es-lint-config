'use strict';

const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.join(__dirname, 'release-commit.tmp.txt'), process.argv.slice(2).join(' '), {encoding: 'utf-8'});