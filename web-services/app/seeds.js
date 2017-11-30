const Language = require('./models/preferences/language');
const Currency = require('./models/preferences/currency');
const Timezone = require('./models/preferences/timezone');

const langageList = new Map();
langageList.set('en', 'English');
langageList.set('es', 'Spanish');
langageList.set('fr', 'French');
langageList.set('de', 'German');
langageList.set('ko', 'Korean');
langageList.set('zh', 'Chinese');
langageList.set('ja', 'Japanese');
langageList.set('it', 'Italian');
langageList.set('sv', 'Swedish');
langageList.set('th', 'Thai');

const currencyList = new Map();
currencyList.set('USD', 'U.S. dollar($)');
currencyList.set('EUR', 'Euro(€)');
currencyList.set('CHF', 'Swiss franc(Fr)');
currencyList.set('CNY', 'Chinese yuan(元)');
currencyList.set('JPY', 'Japanese yen(¥)');
currencyList.set('GBP', 'British pound(£)');
currencyList.set('SGD', 'Singapore dollar($)');
currencyList.set('VND', 'Vietnamese đồng(₫)');
currencyList.set('INR', 'Indian rupee(₹)');
currencyList.set('THB', 'Thai baht(฿)');

const timezoneList = new Map();
timezoneList.set('-10:00', '(UTC-02:00) Pacific/Honolulu');
timezoneList.set('-06:00', '(UTC-02:00) America/Chicago');
timezoneList.set('-05:00', '(UTC-02:00) America/Atikokan');
timezoneList.set('-03:00', '(UTC-03:00) America/Argentina/Catamarca');
timezoneList.set('-02:00', '(UTC-02:00) America/Noronha');
timezoneList.set('+00:00', '(UTC+00:00) UTC');
timezoneList.set('+01:00', '(UTC+01:00) Europe/Amsterdam');
timezoneList.set('+02:00', '(UTC+02:00) Africa/Cairo');
timezoneList.set('+07:00', '(UTC+07:00) Asia/Bangkok');
timezoneList.set('+10:00', '(UTC+07:00) Australia/Melbourne');

const seedLanguage = async () => {
  const count = await Language.count({});
  if (count === 0) {
    console.log('======= seedLanguage =======');
    langageList.forEach((text, id) => Language.create({ id, text }));
  }
};

const seedCurrency = async () => {
  const count = await Currency.count({});
  if (count === 0) {
    console.log('======= seedCurrency =======');
    currencyList.forEach((text, id) => Currency.create({ id, text }));
  }
};

const seedTimezone = async () => {
  const count = await Timezone.count({});
  if (count === 0) {
    console.log('======= seedTimezone =======');
    timezoneList.forEach((text, id) => Timezone.create({ id, text }));
  }
};

module.exports = {
  seedLanguage,
  seedCurrency,
  seedTimezone,
};

