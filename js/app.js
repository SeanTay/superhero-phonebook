"use strict";
(function(){
  angular
    .module("heroes",['ngRoute'])
    .controller("heroes_controller", HeroesController);

    function HeroesController(){
      var vm = this;
      vm.data = superheroList;

      vm.new_hero = {};
      vm.create = function(){
        vm.data.push(angular.copy(vm.new_hero));
        vm.new_hero = {};
      }
    }


})();
var superheroList = [
  {
    name: "Spiderman",
    number: "800-WEB-CRWL",
    group: "Marvel",
    img: "img/spiderman.png"
  },
  {
    name: "The Incredible Hulk",
    number: "800-HLK-SMSH",
    group: "Marvel",
    img: "img/hulk.jpg"
  },
  {
    name: "Wonder Woman",
    number: "800-GRL-WNDR",
    group: "DC",
    img: "img/wonder_woman.jpg"
  },
  {
    name: "Storm",
    number: "800-DRK-CLDS",
    group: "Marvel",
    img: "img/storm.gif"
  },
  {
    name: "Iron Man",
    number: "800-STA-RKME",
    group: "Marvel",
    img: "img/ironman.png"
  },
  {
    name: "Black Panther",
    number: "800-TCH-ALLA",
    group: "Marvel",
    img: "img/black_panther.gif"
  },
  {
    name: "Princess Peach",
    number: "800-NO-DAMSL",
    group: "Independent",
    img: "img/princess_peach.jpg"
  },
  {
    name: "Batman",
    number: "800-DRK-NITE",
    group: "DC",
    img: "img/batman.jpg"
  },
  {
    name: "Supergirl",
    number: "800-KYR-PTON",
    group: "DC",
    img: "img/supergirl.jpg"
  }
]
