#AddCalEvent

A jQuery plugin to create a button that opens as a dropdown with options to add an event to a variety of online calendars.


##Installation

Include the [AddCalEvent.js](https://github.com/sendlo/AddCalEvent/blob/master/src/AddCalEvent.js) and [AddCalEvent.css](https://github.com/sendlo/AddCalEvent/blob/master/src/AddCalEvent.css) files in your project.

##Usage
1. Create the following html structure on your page. The anchor tag can be structured to look like any button you want. The only requirement is that the anchor tag should be displayed as inline-block.

<code>
	&lt;a>ADD TO CALENDAR&lt;/a>
</code>
		
2. Add the event data. This can be passed in the config, or if you need multiple buttons on one page you can pass the data as a JSON string in a "data-ace" attribute on the anchor tag.

3. Call the plugin:

<code>
	$(SELECTOR).addcalevent();
</code>

##Data
All parameters are optional. However, if you want this to work for Outlook and iCal you must provide the url that will generate the ics file response.
<code><pre>
$(SELECTOR).addcalevent({
    'onclick': true,
    'apps': [1,2,4],
    'ics': '',
    'data': {}
});
</pre></code>
<ul>
<li>onclick: Open the dropdown on click rather than mouseover (default: false)</li>
<li>data: Event data (see below for format). This can also be set individually as a json string directly on each HTML element.</li>
<li>linkText: Array containing localized or customized text for the calendar links (order is critical)</li>
<li>ics: Url that will generate the server-side ics response based on the event details. Not optional if Outlook or iCal is needed.</li>
<li>apps: Array containing the applications available to the user. (default: [] - which is all apps)
	<ul>
		<li>0 = Outlook</li>
		<li>1 = Google</li>
		<li>2 = Yahoo</li>
		<li>3 = Hotmail</li>
		<li>4 = iCal</li>
	</ul>
</ul>
###Format of event data object:
This object can be passed as the plugin config or inserted directly on the anchor tag as a JSON string in a "data-ace" attribute.
<code><pre>
{
	title: '',
	desc: '',
	location: '',
	url: '',         // only available in Yahoo calendars
	organizer: {     // only available in Outlook
		name: '',
		email: ''
	},
	time: {
		start: '',    // 'month day, year 14:30:00'
		end: '',      // 'month day, year 14:30:00'
		zone: '',     // '+tt:tt' - plus or minus from UTC time zone (example: Pacific Daylight Time is '-07:00')
		allday: false
	}
}
</pre></code>

##Demo
See the demo folder.

##AddCalEventZone.js <optional utility>
This file is optional. Ideally you will pass the timezone in the correct format (ie "+07:00"). But you can optionally include this helper JS file and pass the timezone in its abbreviated form (ie "PST"). Be warned, this unnecessarily increases your page weight.

##ics file generator
An example of how you can generate the ics file for nodeJS using the icalevent module can also be found in the src folder.


