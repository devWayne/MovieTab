var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){SubTab[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;SubTab.prototype=Object.create(____SuperProtoOf____Class1);SubTab.prototype.constructor=SubTab;SubTab.__superConstructor__=____Class1;function SubTab(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}

	Object.defineProperty(SubTab.prototype,"render",{writable:true,configurable:true,value:function()
	{"use strict";
	var data=this.props.data;
	
	if (data.Flag) {
	var classString = 'movie-flag ',
	flagName = (parseInt(data.Flag) & 2) ? "promo" :
		(parseInt(data.Flag) & 4) ? "sold" : false;
	 	if(flagName){
    		classString += flagName;
		var Flag=React.createElement("div", {className: classString})
		}
  	}
	return (React.createElement("div", {className: "J_native_url J_ga small item", "data-ga": "movie5_newmain_hotmovie", "data-ga-value": "", "data-ga-label": "", "data-url": data.url}, 
		Flag, 
                 React.createElement("div", {className: "block-bg"}, 
            React.createElement("span", {className: ""}, data.Movie.Name
	    ), 
		React.createElement("strong", {className: "num"}, data.Movie.Grade)
		), 
        	React.createElement("div", {className: "image"}, React.createElement("img", {src: data.Movie.Image}))
    		))
 	}});


module.exports=SubTab;

