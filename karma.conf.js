module.exports = function(config){
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files:[
		'js/libs/angular/angular.min.js',
		'js/controller/route.js',
		'js/controller/factory.js',
		'js/geolocation.js',
		'view/js/form.js',
		'view/js/showLocate.js',
		'js/tests/testRoute.js',
		'js/tests/testsFactory.js',
		'js/tests/testsShowLocate.js',
		'js/tests/testsForm.js',
		'js/tests/testGeolocation.js'
		],
		exclude: [],
		port: 8080,
		logLevel: config.LOG_INFO,
		autowatch: true,
		browsers: ['Chrome'],
		singleRun: false
	})
}