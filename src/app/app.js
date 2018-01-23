import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import routing from '../app.config';
import albums from './albums';
import modal from 'angular-ui-bootstrap';	
import '../style/app.css';

let app = () => {
	return {
		template: require('./app.html'),
		controller: 'AppCtrl',
		controllerAs: 'app'
	}
};

class AppCtrl {}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router', 'ui.bootstrap'])
	.directive('app', app)
	.controller('AppCtrl', AppCtrl);


angular.module('app', [uirouter, albums, modal])
	.config(routing);

angular.module('app')
	.filter('reverse', function() {
		return function(items) {
			return [].concat(items).reverse();
		};
	});	

export default MODULE_NAME;