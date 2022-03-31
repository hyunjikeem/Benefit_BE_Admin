require('dotenv').config();
const express = require('express');
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSSequelize = require('@adminjs/sequelize');
const { sequelize } = require('./models');
const app = express();
const cors =require('cors');
const port = 3000;

app.use(cors());

const ADMIN = {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PW,
};

AdminJS.registerAdapter(AdminJSSequelize);

const db = require('./models');
const adminJS = new AdminJS({
    databases: [db],
    rootPath: '/admin',
})

sequelize.sync({ force: false }).then(() => {
    console.log("DB Connected Success");
}).catch((err) => {
    console.error(err);
});



// const router = AdminJSExpress.buildRouter(adminJS);
const router = AdminJSExpress.buildAuthenticatedRouter(adminJS, {
    authenticate: async (email, password) => {
      if (ADMIN.password === password && ADMIN.email === email) {
        return ADMIN
      }
        return null
      },
    cookieName: 'adminJS',
    cookiePassword: 'testtest'
  });
  


app.use(adminJS.options.rootPath, router);
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});