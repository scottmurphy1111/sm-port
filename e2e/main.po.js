/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var PortfolioPage = function() {
  this.logo = element(by.css('.logo'));
  this.name = element(by.css('.name'));
  this.title = element(by.css('.title'));
  this.tagline = element(by.css('.tagline'));
  this.skills = element(by.css('.skills')).all(by.repeater('skill in skills'));
};

module.exports = new PortfolioPage();
