// import 'zone.js/dist/zone-node';
// import 'reflect-metadata';
// import {enableProdMode} from '@angular/core';
// import {ngExpressEngine} from '@nguniversal/express-engine';
// import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

// import * as express from 'express';
// import * as bodyParser from 'body-parser';
// import * as cors from 'cors';
// import * as compression from 'compression';

// import {join} from 'path';

// enableProdMode();

// export const app = express();

// app.use(compression());
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // const DIST_FOLDER = join(process.cwd(), 'dist/boutbitn');

// const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/boutbitn/server/main');

// app.engine('html', ngExpressEngine({
//   bootstrap: AppServerModuleNgFactory,
//   providers: [
//     provideModuleMap(LAZY_MODULE_MAP)
//   ]
// }));

// app.set('view engine', 'html');
// app.set('views', './dist/boutbitn/browser');

// app.get('/redirect/**', (req, res) => {
//   const location = req.url.substring(10);
//   res.redirect(301, location);
// });

// app.get('*.*', express.static('./dist/boutbitn/browser', {
//   maxAge: '1y'
// }));

// app.get('/*', (req, res) => {
//   res.render('index', {req, res}, (err, html) => {
//     if (html) {
//       res.send(html);
//     } else {
//       console.error(err);
//       res.send(err);
//     }
//   });
// });




// Universal
// These are important and needed before anything else
// import 'zone.js/dist/zone-node';
// import 'reflect-metadata';

// import { enableProdMode } from '@angular/core';

// import * as express from 'express';
// import { join } from 'path';

// // Faster server renders w/ Prod mode (dev mode never needed)
// enableProdMode();

// // Express server
// const app = express();

// const PORT = process.env.PORT || 4000;
// const DIST_FOLDER = join(process.cwd(), 'dist');

// // * NOTE :: leave this as require() since this file is built Dynamically from webpack
// const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// // Express Engine
// import { ngExpressEngine } from '@nguniversal/express-engine';
// // Import module map for lazy loading
// import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

// app.engine('html', ngExpressEngine({
//   bootstrap: AppServerModuleNgFactory,
//   providers: [
//     provideModuleMap(LAZY_MODULE_MAP)
//   ]
// }));

// app.set('view engine', 'html');
// app.set('views', join(DIST_FOLDER, 'browser'));

// // TODO: implement data requests securely
// app.get('/api/*', (req, res) => {
//   res.status(404).send('data requests are not supported');
// });

// // Server static files from /browser
// app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// // All regular routes use the Universal engine
// app.get('*', (req, res) => {
//   res.render('index', { req });
// });

// // Start up the Node server
// app.listen(PORT, () => {
//   console.log(`Node server listening on http://localhost:${PORT}`);
// });



// These are important and needed before anything else
// import 'zone.js/dist/zone-node';
// import 'reflect-metadata';

// import { renderModuleFactory } from '@angular/platform-server';
// import { enableProdMode } from '@angular/core';

// import * as express from 'express';
// import { join } from 'path';
// import { readFileSync } from 'fs';

// // Import module map for lazy loading
// import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

// // Faster server renders w/ Prod mode (dev mode never needed)
// enableProdMode();

// // Express server
// const app = express();

// const PORT = process.env.PORT || 4000;
// const DIST_FOLDER = join(process.cwd(), 'dist');

// // Our index.html we'll use as our template
// const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

// app.engine('html', (_, options, callback) => {
//   renderModuleFactory(AppServerModuleNgFactory, {
//     // Our index.html
//     document: template,
//     url: options.req.url,
//     // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
//     extraProviders: [
//       provideModuleMap(LAZY_MODULE_MAP)
//     ]
//   }).then(html => {
//     callback(null, html);
//   });
// });

// app.set('view engine', 'html');
// app.set('views', join(DIST_FOLDER, 'browser'));

// // Server static files from /browser
// app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// // All regular routes use the Universal engine
// app.get('*', (req, res) => {
//   res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
// });

// // Start up the Node server
// app.listen(PORT, () => {
//   console.log(`Node server listening on http://localhost:${PORT}`);
// });








import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import { join } from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4200;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Example Express Rest API endpoints
app.get('/api/**', (req, res) => { });

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
