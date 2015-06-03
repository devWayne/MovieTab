var MovieTab=require('./movietab');
var DPApp = require("dpapp");
var $=require("zepto");
var Q= require('q');


var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){Wrapper[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;Wrapper.prototype=Object.create(____SuperProtoOf____Class2);Wrapper.prototype.constructor=Wrapper;Wrapper.__superConstructor__=____Class2;
         function Wrapper(props) {"use strict";
             ____Class2.call(this,props);
             this.state = {
                 data: {
			 List: [{Movie:{}},{Movie:{}},{Movie:{}},{Movie:{}},{Movie:{}}]
                 }
             };
         }
         Object.defineProperty(Wrapper.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
	     var self=this;
	     Q.fcall(function(){
		var deferred = Q.defer();
		DPApp.getCityId({
			success: function(e) {
				deferred.resolve({cityId:e.cityId});	
			}
		});
		return deferred.promise;
	     }).then(function(infoData){
		var deferred = Q.defer();
	     	DPApp.ajax({
			 url: self.props.url,
                         data: {
                             "source":"eftemain",
			     "filter":1,
			     "limit":5,
			     "start":0,
			     "cityid":infoData.cityId
                         },
                         keys: [
                             "List",
			     "PreSale",
			     "FavCount",
			     "IsGoToMovieDetail",
			     "MinPrice",
			     "ShowCountForToday",
			     "CinemaCountForToday",
			     "Movie",
			     "Flag",
			     "Info",
			     "HasMovieShow",
			     "Name",
			     "LargeImage",
			     "Grade",
			     "Image",
			     "ID",
			     "DetailUrl",
			     "IsGoToMovieDetail"
                         ],
                         success: function(data) {
                             deferred.resolve(data);
                         }

		})
		return deferred.promise;
	     }).then(function(infoData){
		 var $Wrapper_data=infoData;
		$Wrapper_data.List.forEach(function(v,idx){
			var detailUrl = v.Movie.DetailUrl;
			var detailSchema;
			if (detailUrl == null || detailUrl == "") {
				detailSchema = "dianping://moviedetail?id="+v.Movie.ID;
			}else {
				detailSchema = "dianping://web?url=" + encodeURIComponent(detailUrl);
			}
			v.url = (v.HasMovieShow && !v.IsGoToMovieDetail) ? ("dianping://cinemalist?movieid="+v.Movie.ID) : (detailSchema);
		})
	     	self.setState({data: $Wrapper_data});
	     })

         }});
	
	 Object.defineProperty(Wrapper.prototype,"scaleFix",{writable:true,configurable:true,value:function(){"use strict";
		var bigItem=$('.big.item img'),
    		smallItem=$('.small.item img');
		var SCALE = 208/148;
		bigItem.height(bigItem.width()*SCALE);
		smallItem.height(smallItem.width()*SCALE);
	}});

	Object.defineProperty(Wrapper.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
		var List = this.state.data.List;
		this.scaleFix();
		var bigItem=document.querySelector('.big.item img'),
		smallItem=document.querySelector('.small.item img');

		return (  React.createElement("section", {className: "section nav-lay"}, 
				React.createElement("div", {className: "navbar b-line J_native_url J_ga", "data-ga": "movie5_newmain_allmovies", "data-url": "dianping://movielist"}, "热映电影", React.createElement("span", {className: "look-all"}, "全部", React.createElement("span", {className: "arrow-ent right"}))), 
			React.createElement(MovieTab, {data: List})
			))
	}});



module.exports = Wrapper;

