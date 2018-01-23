import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './albums.routes';
import AlbumsController from './albums.controller';
import PlaylistController from './playlist.controller';

export default angular.module('app.albums', [uirouter])
  .config(routing)
  .controller('AlbumsController', AlbumsController)
  .controller('PlaylistController', PlaylistController)
  .name;