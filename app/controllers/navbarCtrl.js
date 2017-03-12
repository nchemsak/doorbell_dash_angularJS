'use strict';
app.controller('navbarCtrl', function($scope) {
  $scope.navItems = [
    { name: "Home", url: '#/home', style: '<i class="fa fa-fw fa-home"></i>' },
    { name: "Image Search", url: '#/images' },
    { name: "Chat", url: '#/chat' },
    { name: "Login | Register", url: '#/login' }
  ];

  // $scope.signOut = [
  //   { name: "Log Out", url: '#/login' }
  // ];
});
