import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Router';

hydrate(<BrowserRouter><Routes/></BrowserRouter>,document.getElementById('app'));