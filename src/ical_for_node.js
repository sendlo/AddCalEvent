var express = require('express');
var iCalEvent = require('icalevent');


module.exports = function(req, res, next) {

    var event = new iCalEvent();

    event.set('offset', req.query.offset);
    event.set('start', format(req.query.start));  // '2014-07-01T02:00:00-05:00'  20140524T180000
    event.set('end', format(req.query.end));

    if (!!req.query.title) {
        event.set('summary', req.query.title);
    }
    if (!!req.query.desc) {
        event.set('description', req.query.desc);
    }
    if (!!req.query.loc) {
        event.set('location', req.query.loc);
    }
    if (!!req.query.org) {
        event.set('organizer', { name: req.query.org});
    }
    if (!!req.query.url) {
        event.set('url', req.query.url);
    }

    res.setHeader('Content-disposition', 'attachment; filename=event.ics');
    res.setHeader('Content-type', 'text/calendar');
    res.charset = 'UTF-8';
    res.write(event.toFile());
    res.end();

    function format(dateStr) {
        try {
            return dateStr.substr(0, 4) + '-' + dateStr.substr(4, 2) + '-' + dateStr.substr(6, 5) + ':' + dateStr.substr(11, 2) + ':' + dateStr.substr(13, 2);
        } catch (e) {
            return null;
        }
    }

};
