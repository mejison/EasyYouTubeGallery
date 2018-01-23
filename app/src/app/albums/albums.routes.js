routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('albums', {
			url: '/',
			template: require('./albums.html'),
			controller: 'AlbumsController',
			controllerAs: 'albums'
		})
		.state('playlist', {
			url: '/albums/{alias}',
			template: require('./playlist.html'),
			controller: 'PlaylistController',
			controllerAs: 'playlist'
		});
}