import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Html from './client/Html';
import {StaticRouter} from 'react-router-dom';
import {ServerStyleSheet} from 'styled-components';
import Routes from './client/Router';


const port = 3054;
const server = express(); 
 
server.use(express.static('public'));

server.get('*', (req, res) => {
  /**
   * renderToString() will take our React app and turn it into a string
   * to be inserted into our Html template function.
   */
  const sheet=new ServerStyleSheet();

  const body = renderToString(sheet.collectStyles(<StaticRouter location={req.path} context={{}}><Routes/></StaticRouter>));
  const styles=sheet.getStyleTags();// <-- getting all the tags from the sheet
  const title = 'Server side Rendering with Styled Components';

  res.send(
    Html({
      body,
      styles,
      title
    })
  );
});


server.listen(port);
console.log(`Serving at http://localhost:${port}`);