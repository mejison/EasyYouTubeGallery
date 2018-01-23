export default class AlbumsController {
    constructor($http) {
        this.list = [];
        let self = this;
        $http.get("/albums.json")
            .then(function(response){
               self.list = response.data;
            });

    }
}

AlbumsController.$inject = ['$http'];