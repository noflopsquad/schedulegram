'use strict';

var Lexer = require('.././src/Lexer');
var CustomMatchers = require('./Matchers');

describe('When someone talks in the channel',function(){

	beforeEach(function() {
    jasmine.addMatchers(CustomMatchers);
	 });

	it('detects it is calling for a gathering',function(){
		let aCalling = '¿Quedamos mañana a las 5 para comer?';
		expect(Lexer.parse(aCalling)).toCallForGathering();
	})
})