var MainTab = require('./maintab');
var SubTab = require('./subtab');

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){MovieTab[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;MovieTab.prototype=Object.create(____SuperProtoOf____Class0);MovieTab.prototype.constructor=MovieTab;MovieTab.__superConstructor__=____Class0;
         function MovieTab(props) {"use strict";
             ____Class0.call(this,props);
             this.state = {
                 data: {
                     List: {}
                 }
             };
         }
	Object.defineProperty(MovieTab.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
	var $MovieTab_data=this.props.data;
	return(React.createElement("aside", {className: "movie-vertical-wrap J_hot_movie"}, React.createElement("div", {className: "movie-vertical big"}, React.createElement(MainTab, {data: $MovieTab_data[0]})), React.createElement("div", {className: "movie-vertical movie-vertical-wide"}, 
React.createElement(SubTab, {data: $MovieTab_data[1]}), React.createElement(SubTab, {data: $MovieTab_data[3]})), React.createElement("div", {className: "movie-vertical movie-vertical-wide"}, 
React.createElement(SubTab, {data: $MovieTab_data[2]}), React.createElement(SubTab, {data: $MovieTab_data[4]}))))
	}});


module.exports=MovieTab;

