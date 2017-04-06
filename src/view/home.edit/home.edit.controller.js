'use strict';

class HomeEditController {
  constructor($http,$rootScope) {
    this.$http = $http;
    this.$rootScope = $rootScope;
  	require('./home.edit.less');
    
    this.slide1 = require('../../assets/1.jpg');
    this.slide2 = require('../../assets/2.jpg');
    this.slide3 = require('../../assets/3.jpg');

    this.name = this.$rootScope.user_name;
    this.text = '';
  }
  change_name(){
    if(this.name!=''){
      this.$http.post('/home/edit/',{
        "name":this.name
      }).then(function(data){
        this.text = this.name + data.data.msg;
        this.$rootScope.$broadcast('changeName',this.name);
      }.bind(this));
    }else{
      this.text = "请输入用户名";
    }
  }
  del_name(){
    this.name='';
    this.$rootScope.$broadcast('changeName',this.name);
    this.text = "删除成功";
  }
}

export default angular
  .module('home.edit.controller', [])
  .controller('HomeEditController', HomeEditController);
