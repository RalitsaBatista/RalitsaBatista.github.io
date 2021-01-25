'use strict';

describe('check', function() {

  beforeEach(module('core'));

  it('should convert boolean values to unicode checkmark or cross',
    inject(function(checkFilter) {
      expect(checkFilter(true)).toBe('\u2713');
      expect(checkFilter(false)).toBe('\u2718');
    })
  );

});
