'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should populate top-panel with correct data', function() {
    expect(page.logo.getAttribute('src')).toMatch(/assets\/images\/portfolio\/logo.svg$/);
    expect(page.name.getText()).toBe('Scott Murphy');
    
    //expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  });

  // it('should list more than 5 awesome things', function () {
  //   expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  // });

});
