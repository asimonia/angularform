let app = angular.module('app', ['ui.router']);

app.config(function config($stateProvider) {
  $stateProvider.state("home", {
    url: "/home",
    controller: "FirstCtrl as first",
    templateUrl: "templates/first.html"
  })
  .state("second", {
    url: "/second",
    controller: "SecondCtrl as second",
    templateUrl: "templates/second.html"
  })
  .state("finished", {
    url: "/third",
    controller: "ThirdCtrl as third",
    templateUrl: "templates/third.html"
  })
});

app.controller("FirstCtrl", function FirstCtrl(greeting) {
  var first = this;

  first.greeting = greeting;
});

app.controller("SecondCtrl", function SecondCtrl(greeting) {
  var second = this;

  second.greeting = greeting;
});

app.controller("ThirdCtrl", function ThirdCtrl(greeting) {
  var third = this;

  third.greeting = greeting;
});

app.service("greeting", function Greeting() {
  var greeting = this;

  greeting.firstName = "";
});