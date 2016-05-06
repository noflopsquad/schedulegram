'use strict';

class Lexer{

	parse(sentence){
		var pattern = /\¿Quedamos/g;
		
		function callsForAGathering(sample){
			return pattern.test(sample);
		}

		var result = {};
		result.gathering = callsForAGathering(sentence);
		return result;
	}
}

module.exports = new Lexer;