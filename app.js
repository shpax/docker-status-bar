const awilix = require('awilix');

const container = awilix.createContainer();

container.loadModules([
  'modules/App.js',
  'modules/*/*.js',
  'routes/*'
], {
  formatName: 'camelCase',
  registrationOptions: {
    lifetime: awilix.Lifetime.SINGLETON,
  }
});

const app = container.resolve('app');

module.exports = app;
