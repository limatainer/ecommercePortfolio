const Sequelize = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig', { //essa escrita e muito similar a como o mongoose funciona
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
});

Gig.sync().then(() => {
  console.log('table created');
});
module.exports = Gig;