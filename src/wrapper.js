var MovieTab=require('./movietab');
var DPApp = require("dpapp");
var $=require("zepto");
var Q= require('q');


class Wrapper extends  React.Component {
         constructor(props) {
             super(props);
             this.state = {
                 data: {
			 List: [{Movie:{}},{Movie:{}},{Movie:{}},{Movie:{}},{Movie:{}}]
                 }
             };
         }
         componentDidMount() {
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
		 var _data=infoData;
		_data.List.forEach(function(v,idx){
			var detailUrl = v.Movie.DetailUrl;
			var detailSchema;
			if (detailUrl == null || detailUrl == "") {
				detailSchema = "dianping://moviedetail?id="+v.Movie.ID;
			}else {
				detailSchema = "dianping://web?url=" + encodeURIComponent(detailUrl);
			}
			v.url = (v.HasMovieShow && !v.IsGoToMovieDetail) ? ("dianping://cinemalist?movieid="+v.Movie.ID) : (detailSchema);
		})
	     	self.setState({data: _data});
	     })

         }
	
	 scaleFix(){
		var bigItem=$('.big.item img'),
    		smallItem=$('.small.item img');
		var SCALE = 208/148;
		bigItem.height(bigItem.width()*SCALE);
		smallItem.height(smallItem.width()*SCALE);
	}

	render(){
		var List = this.state.data.List;
		this.scaleFix();
		var bigItem=document.querySelector('.big.item img'),
		smallItem=document.querySelector('.small.item img');

		return (  <section className="section nav-lay">
				<div className="navbar b-line J_native_url J_ga" data-ga="movie5_newmain_allmovies" data-url="dianping://movielist">热映电影<span className="look-all">全部<span className="arrow-ent right"></span></span></div>
			<MovieTab data={List}/>
			</section>)
	}

}

module.exports = Wrapper;

