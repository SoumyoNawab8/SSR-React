/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(5);

var _Html = __webpack_require__(6);

var _Html2 = _interopRequireDefault(_Html);

var _reactRouterDom = __webpack_require__(1);

var _styledComponents = __webpack_require__(2);

var _Router = __webpack_require__(7);

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3054;
var server = (0, _express2.default)();

server.use(_express2.default.static('public'));

server.get('*', function (req, res) {
  /**
   * renderToString() will take our React app and turn it into a string
   * to be inserted into our Html template function.
   */
  var sheet = new _styledComponents.ServerStyleSheet();

  var body = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.path, context: {} },
    _react2.default.createElement(_Router2.default, null)
  )));
  var styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
  var title = 'Server side Rendering with Styled Components';

  res.send((0, _Html2.default)({
    body: body,
    styles: styles,
    title: title
  }));
});

server.listen(port);
console.log('Serving at http://localhost:' + port);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Html = function Html(_ref) {
  var body = _ref.body,
      styles = _ref.styles,
      title = _ref.title;
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n      " + styles + "\n      <link rel=\"stylesheet\" href=\"css/style.css\" />\n    </head>\n    <body style=\"margin:0\"> \n      <div id=\"app\">" + body + "</div>\n      <script src=\"bundle.js\"></script>\n    </body>\n  </html>\n";
};

exports.default = Html;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _newPage = __webpack_require__(8);

var _newPage2 = _interopRequireDefault(_newPage);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return _react2.default.createElement(
    'main',
    null,
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _App2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/new', component: _newPage2.default })
    )
  );
};

exports.default = Routes;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\nfont-size:3em;\n'], ['\n\nfont-size:3em;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DivStyled = _styledComponents2.default.div(_templateObject);

var AnotherPage = function (_Component) {
    _inherits(AnotherPage, _Component);

    function AnotherPage(props) {
        _classCallCheck(this, AnotherPage);

        var _this = _possibleConstructorReturn(this, (AnotherPage.__proto__ || Object.getPrototypeOf(AnotherPage)).call(this, props));

        _this.state = {
            quote: '',
            author: ''
        };
        return _this;
    }

    _createClass(AnotherPage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var self = this;
            _axios2.default.get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1').then(function (response) {
                var q = response.data[0].content;
                q = q.split(">");
                q = q[1].split("<");
                self.setState({ quote: q[0], author: response.data[0].title });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { marginLeft: '5em', marginRight: '5em' } },
                _react2.default.createElement(
                    DivStyled,
                    null,
                    'This is another page'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'h3',
                    null,
                    'below are the data from API:'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'em',
                    null,
                    this.state.quote
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    null,
                    this.state.author
                ),
                _react2.default.createElement('img', { src: '../images/img.jpg', style: { width: '100%' } })
            );
        }
    }]);

    return AnotherPage;
}(_react.Component);

exports.default = AnotherPage;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nmargin-left:5em;\nmargin-right:5em;\n\n'], ['\nmargin-left:5em;\nmargin-right:5em;\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DivContainer = _styledComponents2.default.div(_templateObject);

var List = function (_Component) {
    _inherits(List, _Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log('assa');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.props.style },
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        'This is another Fish'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        'This is another Component'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        'This is another Component'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        'This is another Component'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        'This is another Component'
                    )
                )
            );
        }
    }]);

    return List;
}(_react.Component);

var App = function (_Component2) {
    _inherits(App, _Component2);

    function App(props) {
        _classCallCheck(this, App);

        var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this2.handleclick = _this2.handleclick.bind(_this2);
        return _this2;
    }

    _createClass(App, [{
        key: 'handleclick',
        value: function handleclick() {
            this.props.history.push('new');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                DivContainer,
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Lorem Ipsum'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'This is my PAGE '
                ),
                _react2.default.createElement(List, { style: { marginTop: '1em' } }),
                _react2.default.createElement(
                    'a',
                    { href: '/new' },
                    'New'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.handleclick },
                    'Click'
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(App);

/***/ })
/******/ ]);