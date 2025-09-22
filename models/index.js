'use strict'
import Debts from './debts.js'; //require the model
import Users from './users.js'; //require the model
// import Payments from './payments.js'; //require the model

async function init() {
    await Users.sync();
    await Debts.sync();
    // await Payments.sync(); 
    //sync the model
};

init();

export const Models = {
    Debts, //export the model
    Users, //export the model
    // Payments // export the model
};

