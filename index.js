'use strict';

const sass = require('node-sass');

console.log(sass.renderSync({
	data: 's { a: ss }'
}));
