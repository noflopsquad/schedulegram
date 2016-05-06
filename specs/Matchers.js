
var customMatchers = {
  toCallForGathering: function() {
  	return {
  		compare:function(actual,expected){
    		var result = {};
        result.message = "Expected " + actual.gathering + 
                    " to be a call for gathering";
        result.pass = actual.gathering;
        return result;
  		}
  	};
  }
}	

module.exports = customMatchers;