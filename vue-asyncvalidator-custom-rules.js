import ETools from 'etools';
export default {
  methods: {
    money(rule, value, callback) {
      let valueString = value.toString();
      if (valueString.indexOf('.') === -1) {
        callback();
      } else if (value.toString().split('.')[1].length > 2) {
        callback(new Error());
      } else {
        callback();
      }
    },
    idcard(rule, value, callback) {
      if (ETools.vertify.isIDCard(value)) {
        callback();
      } else {
        callback(new Error());
      }
    },
    telephone(rule, value, callback) {
      if (ETools.vertify.isTelephone(value)) {
        callback();
      } else {
        callback(new Error());
      }
    },
    mobile(rule, value, callback) {
      if (ETools.vertify.isMobile(value)) {
        callback();
      } else {
        callback(new Error());
      }
    },
    plusdigital(rule, value, callback) {
      if (ETools.vertify.isPlusDigit(value)) {
        callback();
      } else {
        callback(new Error());
      }
    },
    url(rule, value, callback) {
      if (ETools.vertify.isURL(value)) {
        callback();
      } else {
        callback(new Error());
      }
    }
  }
};
