(function () {
  var app = angular.module("myApp", []);

  app.controller("demoCtrl", ["$scope", DemoController]);

  function getDataPromise(url) {
    return new Promise(function (resolve, reject) {
      $.get(url, function (data, status) {
        if (status === "success") {
          resolve(data);
        }
        reject(new Error("Error while getting " + url));
      });
    });
  }

  console.log("hi");

  const USER_API = "https://jsonplaceholder.typicode.com/users";
  const POST_API = "https://jsonplaceholder.typicode.com/posts?userId=";
  const COMMENT_API = "https://jsonplaceholder.typicode.com/comments?postId=";

  function DemoController($scope) {
    // Your Code Here
    // Callback-style
    $.get(USER_API, function (users) {
      users.forEach((user) => {
        $.get(POST_API + user.id, function (posts) {
          user.posts = posts;
          posts.forEach((post) => {
            $.get(COMMENT_API + post.id, function (comments) {
              post.comments = comments;
              $scope.$apply(function () {
                $scope.users = users;
              });
            });
          });
        });
      });
    });
    // Promise-style
    // let allUsers;
    // getDataPromise(USER_API)
    //   .then(function (users) {
    //     users.forEach((user) => {
    //       getDataPromise(POST_API + user.id).then(function (posts) {
    //         user.posts = posts;
    //         posts.forEach((post) => {
    //           getDataPromise(COMMENT_API + post.id).then(function (comments) {
    //             post.comments = comments;
    //             $scope.$apply(function () {
    //               $scope.users = users;
    //             });
    //           });
    //         });
    //       });
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // // Async/await-style
    // (async () => {
    //   try {
    //     const users = await getDataPromise(USER_API);
    //     users.forEach(async (user) => {
    //       const posts = await getDataPromise(POST_API + user.id);
    //       user.posts = posts;
    //       posts.forEach(async (post) => {
    //         const comments = await getDataPromise(COMMENT_API + post.id);
    //         post.comments = comments;
    //         $scope.$apply(function () {
    //           $scope.users = users;
    //         });
    //       });
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();
  }
})();
