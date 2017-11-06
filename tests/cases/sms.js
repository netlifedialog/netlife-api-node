const netlife = require('../../lib/index');

describe('SMS API', () => {

  describe('Authenticate', () => {
    it('should return with error when `credentials` is undefined', (done) => {
      try {
        netlife.sms.auth();
      } catch (e) {
        return done();
      }
      done(new Error('The auth() method should return with error when `credentials` is undefined'));

    });

    it('should return with error when `credentials` is empty object', (done) => {
      try {
        netlife.sms.auth({});
      } catch (e) {
        return done();
      }
      done(new Error('The auth() method should return with error when `credentials` is undefined'));

    });

    it('should return with error when `credentials.apiKey` is undefined', (done) => {
      try {
        netlife.sms.auth({
          apiAccount: process.env.SMS_BDN_ACCOUNT
        });
      } catch (e) {
        return done();
      }
      done(new Error('The auth() method should return with error when `credentials` is undefined'));

    });

    it('should return with error when `credentials.apiAccount` is undefined', (done) => {
      try {
        netlife.sms.auth({
          apiKey: process.env.SMS_BDN_KEY,
        });
      } catch (e) {
        return done();
      }
      done(new Error('The auth() method should return with error when `credentials` is undefined'));

    });

    it('should return without error', () => {
      netlife.sms.auth({
        apiKey: process.env.SMS_BDN_KEY,
        apiAccount: process.env.SMS_BDN_ACCOUNT
      });
    });
  });

  describe('Send single SMS', () => {
    it('should return with error when `options.recipient` is undefined', (done) => {
      netlife.sms.sendSingle({
        from: 'Netlife',
        message: 'This is a test generated by Mocha.',
      }, (err) => {
        if (err) {
          return done();
        }

        // => No error returned
        return done(new Error('Did not return error when it was supposed to.'));
      });
    });

    it('should return with error when `options.recipient` is empty', (done) => {
      netlife.sms.sendSingle({
        recipient: '',
        from: 'Netlife',
        message: 'This is a test generated by Mocha.',
      }, (err) => {
        if (err) {
          return done();
        }

        // => No error returned
        return done(new Error('Did not return error when it was supposed to.'));
      });
    });

    it('should return with error when `options.message` is undefined', (done) => {
      netlife.sms.sendSingle({
        recipient: '+4795033467',
        from: 'Netlife',
      }, (err) => {
        if (err) {
          return done();
        }

        // => No error returned
        return done(new Error('Did not return error when it was supposed to.'));
      });
    });

    it('should return with error when `options.message` is empty', (done) => {
      netlife.sms.sendSingle({
        recipient: '+4795033467',
        from: 'Netlife',
        message: '',
      }, (err) => {
        if (err) {
          return done();
        }

        // => No error returned
        return done(new Error('Did not return error when it was supposed to.'));
      });
    });

    // it('should return without error', function (done) {
    //   // Tweak what’s Mocha considers “slow”
    //   this.timeout(9000);
    //   this.slow(1000);
    //
    //   netlife.sms.sendSingle({
    //     recipient: '+4795033467',
    //     from: 'Netlife',
    //     message: 'This is a test generated by Mocha.',
    //   }, (err) => {
    //     if (err) {
    //       return done(err);
    //     }
    //
    //     // => No error returned
    //     done()
    //   });
    // });
  });

  describe('Send bulk SMS', () => {
    it('should return with error when `options.recipients` is undefined', (done) => {
      netlife.sms.sendBulk({
        from: 'Netlife',
        message: 'This is a test generated by Mocha.',
      }, (err, shipmentId) => {
        if (err) {
          return done();
        }

        // => No error returned
        return done(new Error('Did not return error when it was supposed to.'));
      });
    });

    it('should return with error when `options.recipients` is empty', (done) => {
      netlife.sms.sendBulk({
        recipients: [],
        from: 'Netlife',
        message: 'This is a test generated by Mocha.',
      }, (err, shipmentId) => {
        if (err) {
          return done();
        }

        // => No error returned
        return done(new Error('Did not return error when it was supposed to.'));
      });
    });

    it('should return with error when `options.message` is undefined', (done) => {
      netlife.sms.sendBulk({
        recipients: ['+4795033467'],
        from: 'Netlife',
      }, (err, shipmentId) => {
        if (err) {
          return done();
        }

        // => No error returned
        return done(new Error('Did not return error when it was supposed to.'));
      });
    });

    it('should return with error when `options.message` is empty', (done) => {
      netlife.sms.sendBulk({
        recipients: ['+4795033467'],
        from: 'Netlife',
        message: '',
      }, (err, shipmentId) => {
        if (err) {
          return done();
        }

        // => No error returned
        return done(new Error('Did not return error when it was supposed to.'));
      });
    });

    // it('should return without error', function (done) {
    //   // Tweak what’s Mocha considers “slow”
    //   this.timeout(9000);
    //   this.slow(1000);
    //
    //   netlife.sms.sendBulk({
    //     recipients: ['+4712345678', '+4787654321'],
    //     from: 'Netlife',
    //     message: 'This is a test generated by Mocha.',
    //   }, (err, shipmentId) => {
    //     if (err) {
    //       return done(err);
    //     }
    //
    //     //All done
    //     done();
    //   });
    // });
  });
});
