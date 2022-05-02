const express = require('express');
const notifier = require('node-notifier');

const notifyRouter = express.Router();

notifyRouter.get('/notify', (req, res) => {
    // String
    notifier.notify('Message');

    // Object
    notifier.notify({
    title: 'My notification',
    message: undefined,
    sound: true,
    });
  });


module.exports = notifyRouter;
