'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN || 'YXJRNRKTUKG6CRDMNDDQU6UE7YYR7QMX'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAOnHAZAVIwoBAGQmSNI3ZAWZBWZBjDSmAbu1AboyfMc6ZAtLGv0k9bVQ0ejYr0q5d0o0BwgUgh8XBNeP7btimZBbbc7ApOu8ECjH6smP4DG02SBVvXCzy5ZCCwsdg5IVQUMS5lh8LLot32Vlj2mInhJPYi5rWXnVxgOYGBl8ZAEGAZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'itschamp'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}
