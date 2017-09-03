const express = require('express');

const RED_STATUS_CLASSNAME = 'mdl-color--red-400 mdl-color-text--white';
const GREEN_STATUS_CLASSNAME = 'mdl-color--green-300 mdl-color-text--white';
const GREY_STATUS_CLASSNAME = 'mdl-color--grey-400 mdl-color-text--white';

function addStatusTexts(container) {
  const statusText = [];

  ['rabbit', 'redis', 'elasticsearch'].map(dependency => {
    if (container.status[dependency] !== undefined) {
      const status = container.status[dependency];
      statusText.push({
        className: status ? GREEN_STATUS_CLASSNAME : RED_STATUS_CLASSNAME,
        text: dependency
      })
    }
    container.statusText = statusText;
  });

  return container;
}

module.exports = ({ servicesModel }) => {
  const router = express.Router();

  router.get('/:containerId?', function(req, res) {

    servicesModel.getContainers().then((containersList) => {

      containersList.forEach(addStatusTexts);

      res.render('index', { title: 'Services', contentView: 'services', payload: {
        containersList
      }});
    })
  });

  return router
};
