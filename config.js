'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAACEZA4vVwVABANF7k6AqeA7SF3ZCQGpD0Cw693HUsgZBXFgmmKlb0yJf3YZAZBPRQeKUcPZBTyffumVQht6kVkhSy9PvE0zZB0ZBgomH26sJ8PvDW6n5TNWabbZAmnf1SUmO89JVFpaNrL3ZAqmomMEZCzfLc4RoJR5cCQtjhwH4lluAZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}
