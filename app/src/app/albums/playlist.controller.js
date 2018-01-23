export default class PlaylistController {
    constructor($http, $uibModal) {
        this.playlist = {};
        this.uibModal = $uibModal;
        this.alias = "";
        let self = this;

        $http.get("/albums.json")
            .then(function(response){
               
               let segmetns = window.location.pathname.split("/");
               segmetns.shift(); 
               segmetns.shift();
               self.alias = segmetns.shift();
               
               response.data.map(function(e) {
                   if (e.alias == self.alias) {
                       self.playlist = e;
                   }
               });
            });   
    }

    addPlayItem() {
        this.uibModal.open({
            templateUrl: 'modalAddPlayItem.html',
            controller: ($scope, $uibModalInstance, items) => {
                $scope.data = {
                    name : "",
                    link : ""
                };

                $scope.submitItemPlayList = () => {
                    $scope.data.link = $scope.data.link.replace("https://youtu.be/", "https://www.youtube.com/embed/");
                    $uibModalInstance.close($scope.data);
                };
            },
            resolve: {
              items:  () => {
                return [];
              }
            }
        }).result.then((data) => {
            this.playlist.playlist.push(data);
        }, () => {
            
        });
    }

}

PlaylistController.$inject = ['$http', '$uibModal'];