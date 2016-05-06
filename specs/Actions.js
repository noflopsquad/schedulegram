'use strict';

var Actions = require('../src/Actions');

describe('Gathering call',function(){

	it('has a reason and a caller',function(){
		let gathering = {
			caller : "Xavi",
			reason: "dinner"
		};
		expect(Actions.call(gathering)).toBe("A gathering is called by Xavi for: dinner")
	})
  
})