'use strict'

var Config = require('./config')
var wit = require('./services/wit').getWit()

// LETS SAVE USER SESSIONS
var sessions = {}

var findOrCreateSession = function (fbid) {
  var sessionId

  // DOES USER SESSION ALREADY EXIST?
  Object.keys(sessions).forEach(k => {
    if (sessions[k].fbid === fbid) {
      // YUP
      sessionId = k
    }
  })

  // No session so we will create one
  if (!sessionId) {
    sessionId = new Date().toISOString()
    sessions[sessionId] = {
      fbid: fbid,
      context: {
        _fbid_: fbid
      }
    }
  }

  return sessionId
}

var read = function (sender, message, reply) {

	if (message === 'hello' || message === 'hi') {
		// Let's reply back hello
		message = 'Hello yourself! I am a chat bot. How may I help you today'
		reply(sender, message)
	}
	else if (text=== 'Where is the project location?'){
				sendTextMessage(sender, "NIBM Annexe, Undri-Pisoli Road", token)
			}
			else if (text=== 'What all amenities do you have?'){
				sendTextMessage(sender, "Clubhouse, swimming pool, amphitheater, gymnasium, garden, power backups for elevators etc.", token)
			}
			else if (text=== 'What are the areas of 1BHK and 2BHK Flats?'){
				sendTextMessage(sender, "1 BHK is 560 sq ft and 2 BHK is 950 Sq Ft.", token)
			}
			else if (text=== 'What are the rates?'){
				sendTextMessage(sender, "1 BHK will be 28 Lakh (all inclusive) and 2BHK 46 Lakh (all inclusive)", token)
			}
			else if (text=== 'When will we get the possession?'){
				sendTextMessage(sender, "Flats are ready possession flats.", token)
			}
			else if (text=== 'When can I see the site?'){
				sendTextMessage(sender, "Sir, please let us know your convenient timings and we will book your site-visit accordingly.", token)
			}
			else if (text=== 'Do you have bank finance facility available?'){
				sendTextMessage(sender, "Yes, you can get the home-loan assistance from HDFC, AXIS and SBI.", token)
			}
			else if (text=== 'Will you provide the services to do the site visit?'){
				sendTextMessage(sender, "Our executives will assist you to locate the project. Although we do not provide pick and drop assistance.", token)
			}else {
		// Let's find the user
		var sessionId = findOrCreateSession(sender)
		// Let's forward the message to the Wit.ai bot engine
		// This will run all actions until there are no more actions left to do
		wit.runActions(
			sessionId, // the user's current session by id
			message,  // the user's message
			sessions[sessionId].context, // the user's session state
			function (error, context) { // callback
			if (error) {
				console.log('oops!', error)
			} else {
				// Wit.ai ran all the actions
				// Now it needs more messages
				console.log('Waiting for further messages')

				// Based on the session state, you might want to reset the session
				// Example:
				// if (context['done']) {
				// 	delete sessions[sessionId]
				// }

				// Updating the user's current session state
				sessions[sessionId].context = context
			}
		})
	}

}



module.exports = {
	findOrCreateSession: findOrCreateSession,
	read: read,
}
