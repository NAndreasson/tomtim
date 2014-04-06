var util = require('util');
var EventEmitter = require('events').EventEmitter;

exports = module.exports = Timer;

function Timer(config) {
   if ( !(this instanceof Timer) ) return new Timer(config);

   this.config = config || {};
}

Timer.prototype.__proto__ = EventEmitter.prototype;

Timer.prototype.startPom = function() {
   var config = this.config;
   var time = (config.pomodoro || 25) * 60 * 1000; // the specified time, or 25 min as default (in ms)

   setTimeout(function() {
      this.emit('pomodoro');
   }.bind(this), time);
};

Timer.prototype.startBreak = function() {
   var config = this.config;
   var time = (config.rest || 5) * 60 * 1000; // specified time, or 5 min break

   setTimeout(function() {
      this.emit('break');
   }.bind(this), time);
};

