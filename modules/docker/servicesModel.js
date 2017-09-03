const { containers } = require('./mocks');

module.exports = () => ({
  getContainers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(containers)
      }, 250)
    });
  },

  getContainerInfo(containerId) {

  }
});