'use strict';

class Actions{

	call(gathering){
		return "A gathering is called by " + gathering.caller + 
				" for: " + gathering.reason;
	}

}

module.exports = new Actions;