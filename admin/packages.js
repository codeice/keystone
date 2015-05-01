// This file exports the common packages required by the Admin UI.
// 
// It is used to build /public/js/packages.js, and exclude these packages from
// the Admin UI bundle generated by browserify-middleware.
module.exports = [
	'bytes',
	'classnames',
	'marked',
	'moment',
	'pikaday',
	'react',
	'react-select',
	'react/addons',
	'superagent'
];
