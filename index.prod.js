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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/html/index.js":
/*!******************************!*\
  !*** ./client/html/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (html, data) {\n  return \"\\n  <!doctype html>\\n    <html>\\n    <head>\\n      <link rel=\\\"shortcut icon\\\" type=\\\"image/x-icon\\\" href=\\\"/public/images/favicon.ico\\\" />\\n      <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n      <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n      <script>window.__INITIAL__DATA__ = \" + JSON.stringify(data) + \"</script>\\n    </head>\\n    <body>\\n      <div id=\\\"root\\\">\" + html + \"</div>\\n      <script src=\\\"/public/js/home.js\\\"></script>\\n    </body>\\n  </html>\\n\";\n};\n\n//# sourceURL=webpack:///./client/html/index.js?");

/***/ }),

/***/ "./client/pages/Admin.js":
/*!*******************************!*\
  !*** ./client/pages/Admin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h2',\n      null,\n      'Home'\n    )\n  );\n};\n\nvar About = function About() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h2',\n      null,\n      'About'\n    )\n  );\n};\n\nvar Topics = function Topics(_ref) {\n  var match = _ref.match;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h2',\n      null,\n      'Topics'\n    ),\n    _react2.default.createElement(\n      'ul',\n      null,\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: match.url + '/rendering' },\n          'Rendering with React'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: match.url + '/components' },\n          'Components'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: match.url + '/props-v-state' },\n          'Props v. State'\n        )\n      )\n    ),\n    _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/:topicId', component: Topic }),\n    _react2.default.createElement(_reactRouterDom.Route, {\n      exact: true,\n      path: match.url,\n      render: function render() {\n        return _react2.default.createElement(\n          'h3',\n          null,\n          'Please select a topic.'\n        );\n      }\n    })\n  );\n};\n\nvar Topic = function Topic(_ref2) {\n  var match = _ref2.match;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h3',\n      null,\n      match.params.topicId\n    )\n  );\n};\n\nvar MultipleRoutes = function MultipleRoutes() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'ul',\n      null,\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/with-react-router' },\n          'Home'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/with-react-router/about' },\n          'About'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/with-react-router/topics' },\n          'Topics'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: '/' },\n          'return to server'\n        )\n      )\n    ),\n    _react2.default.createElement('hr', null),\n    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/with-react-router', component: Home }),\n    _react2.default.createElement(_reactRouterDom.Route, { path: '/with-react-router/about', component: About }),\n    _react2.default.createElement(_reactRouterDom.Route, { path: '/with-react-router/topics', component: Topics })\n  );\n};\n\nexports.default = MultipleRoutes;\n\n//# sourceURL=webpack:///./client/pages/Admin.js?");

/***/ }),

/***/ "./client/pages/Private.js":
/*!*********************************!*\
  !*** ./client/pages/Private.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h2',\n      null,\n      'Home'\n    )\n  );\n};\n\nvar About = function About() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h2',\n      null,\n      'About'\n    )\n  );\n};\n\nvar Topics = function Topics(_ref) {\n  var match = _ref.match;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h2',\n      null,\n      'Topics'\n    ),\n    _react2.default.createElement(\n      'ul',\n      null,\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: match.url + '/rendering' },\n          'Rendering with React'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: match.url + '/components' },\n          'Components'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: match.url + '/props-v-state' },\n          'Props v. State'\n        )\n      )\n    ),\n    _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/:topicId', component: Topic }),\n    _react2.default.createElement(_reactRouterDom.Route, {\n      exact: true,\n      path: match.url,\n      render: function render() {\n        return _react2.default.createElement(\n          'h3',\n          null,\n          'Please select a topic.'\n        );\n      }\n    })\n  );\n};\n\nvar Topic = function Topic(_ref2) {\n  var match = _ref2.match;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h3',\n      null,\n      match.params.topicId\n    )\n  );\n};\n\nvar MultipleRoutes = function MultipleRoutes() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'ul',\n      null,\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/with-react-router' },\n          'Home'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/with-react-router/about' },\n          'About'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/with-react-router/topics' },\n          'Topics'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: '/' },\n          'return to server'\n        )\n      )\n    ),\n    _react2.default.createElement('hr', null),\n    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/with-react-router', component: Home }),\n    _react2.default.createElement(_reactRouterDom.Route, { path: '/with-react-router/about', component: About }),\n    _react2.default.createElement(_reactRouterDom.Route, { path: '/with-react-router/topics', component: Topics })\n  );\n};\n\nexports.default = MultipleRoutes;\n\n//# sourceURL=webpack:///./client/pages/Private.js?");

/***/ }),

/***/ "./client/pages/Public.js":
/*!********************************!*\
  !*** ./client/pages/Public.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import { Link } from 'react-router-dom';\n\n\nvar Home = function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      console.log('cdm Home');\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Hello!!!!!! ',\n          this.props.name,\n          '!'\n        ),\n        _react2.default.createElement(\n          'a',\n          { href: '/with-react-router' },\n          'with React Router'\n        ),\n        _react2.default.createElement(\n          _Button2.default,\n          { variant: 'contained', color: 'primary' },\n          'Hello World'\n        )\n      );\n    }\n  }]);\n\n  return Home;\n}(_react2.default.Component);\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./client/pages/Public.js?");

/***/ }),

/***/ "./db/index.js":
/*!*********************!*\
  !*** ./db/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.security = exports.admin = exports.person = exports.anyone = undefined;\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nvar _anyone = __webpack_require__(/*! ./queries/anyone */ \"./db/queries/anyone.js\");\n\nvar _anyone2 = _interopRequireDefault(_anyone);\n\nvar _person = __webpack_require__(/*! ./queries/person */ \"./db/queries/person.js\");\n\nvar _person2 = _interopRequireDefault(_person);\n\nvar _admin = __webpack_require__(/*! ./queries/admin */ \"./db/queries/admin.js\");\n\nvar _admin2 = _interopRequireDefault(_admin);\n\nvar _security = __webpack_require__(/*! ./queries/security */ \"./db/queries/security.js\");\n\nvar _security2 = _interopRequireDefault(_security);\n\nvar _locks = __webpack_require__(/*! ./locks */ \"./db/locks.js\");\n\nvar _locks2 = _interopRequireDefault(_locks);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar dev = [process.env.DATABASE_LOCAL, process.env.DATABASE_USER_LOCAL, process.env.DATABASE_PASSWORD_LOCAL, {\n  host: 'localhost',\n  dialect: 'postgres',\n  define: {\n    freezeTableName: true\n  }\n}];\nvar prod = [process.env.DATABASE_CLOUD];\nvar config = process.NODE_ENV === 'production' ? prod : dev;\nvar db = new (Function.prototype.bind.apply(_sequelize2.default, [null].concat(config)))();\n\nvar anyone = exports.anyone = (0, _locks2.default)(_anyone2.default, _locks.anyoneOk, db);\nvar person = exports.person = (0, _locks2.default)(_person2.default, _locks.noRandos, db);\nvar admin = exports.admin = (0, _locks2.default)(_admin2.default, _locks.adminOnly, db);\nvar security = exports.security = security;\n\n//# sourceURL=webpack:///./db/index.js?");

/***/ }),

/***/ "./db/locks.js":
/*!*********************!*\
  !*** ./db/locks.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar anyoneOk = exports.anyoneOk = function anyoneOk(obj, args, context, info) {\n  console.log('anyone lock');\n  return true;\n};\n\nvar noRandos = exports.noRandos = function noRandos(obj, args, context, info) {\n  console.log('no randos');\n  return true;\n};\n\nvar adminOnly = exports.adminOnly = function adminOnly(obj, args, context, info) {\n  console.log('adminONly');\n  return true;\n};\n\n// This is literally where the magic happens\n// Pass the lock itself as lockPermits param\n\nexports.default = function (queriesObj, lockPermits, db) {\n  var queries = Object.keys(queriesObj);\n  return queries.reduce(function (accum, query) {\n    var func = function func(obj, args, context, info) {\n      console.log('args: ', !!args);\n      var req = args.req,\n          res = args.res;\n\n\n      console.log('query name:', query);\n      console.log('full query:', queriesObj[query](obj));\n      if (lockPermits(req, obj)) {\n        return db.query(queriesObj[query](obj));\n      } else {\n        // TODO how to redirect\n        // res.redirect('/login');\n      }\n    };\n    return Object.assign(accum, _defineProperty({}, query, func));\n  }, {});\n};\n\n//# sourceURL=webpack:///./db/locks.js?");

/***/ }),

/***/ "./db/queries/admin.js":
/*!*****************************!*\
  !*** ./db/queries/admin.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./db/queries/helpers.js\");\n\nexports.default = {\n  updateAddressById: function updateAddressById(_ref) {\n    var id = _ref.id,\n        address = _ref.address;\n    return 'UPDATE address SET ' + (0, _helpers.makeSet)(address) + ' WHERE id=' + id + ' RETURNING *;';\n  },\n  associateAddressToPerson: function associateAddressToPerson(_ref2) {\n    var id = _ref2.id,\n        personId = _ref2.personId;\n    return 'UPDATE person SET address_id=(SELECT id FROM address WHERE id=' + id + ') WHERE id=' + personId + ' RETURNING *;';\n  },\n  deleteAddressById: function deleteAddressById(_ref3) {\n    var id = _ref3.id;\n    return 'DELETE FROM address WHERE id=' + id + ' RETURNING *;';\n  },\n  getPersonById: function getPersonById(_ref4) {\n    var id = _ref4.id;\n    return 'SELECT id, email, firstname, lastname, phone, address_id, food, notes, preferences, settings FROM person WHERE id=' + id + ';';\n  },\n  getAllPeople: function getAllPeople() {\n    return 'SELECT p.id, p.email, p.firstname, p.lastname, p.phone, p.address_id, p.food, p.notes, p.preferences, p.settings, ad.address1, ad.address2, ad.city, ad.state, ad.zip, ad.country FROM person p JOIN address ad ON p.address_id=ad.id;';\n  },\n  updatePersonById: function updatePersonById(_ref5) {\n    var id = _ref5.id,\n        person = _ref5.person;\n    return 'UPDATE person SET ' + (0, _helpers.makeSet)(person) + ' WHERE id=' + id + ' RETURNING *;';\n  },\n  deletePersonById: function deletePersonById(_ref6) {\n    var id = _ref6.id;\n    return 'DELETE FROM person WHERE id=' + id + ' RETURNING *;';\n  },\n  createEvent: function createEvent(_ref7) {\n    var location = _ref7.location;\n    return 'INSERT INTO event (' + (0, _helpers.makeColumns)(event) + ') VALUES (' + (0, _helpers.makeValues)(event) + ') RETURNING *;';\n  },\n  getEventById: function getEventById(_ref8) {\n    var id = _ref8.id;\n    return 'SELECT id, name, time, address_id, send_invitations, auto_invite, notes, settings FROM event WHERE id=' + id + ';';\n  },\n  updateEventById: function updateEventById(_ref9) {\n    var id = _ref9.id,\n        event = _ref9.event;\n    return 'UPDATE event SET ' + (0, _helpers.makeSet)(event) + ' WHERE id=' + id + ' RETURNING *;';\n  },\n  deleteEventById: function deleteEventById(_ref10) {\n    var id = _ref10.id;\n    return 'DELETE FROM event WHERE id=' + id + ' RETURNING *;';\n  },\n  createAttendance: function createAttendance(_ref11) {\n    var attendance = _ref11.attendance;\n    return 'INSERT INTO attendance (' + (0, _helpers.makeColumns)(attendance) + ') VALUES (' + (0, _helpers.makeValues)(attendance) + ');';\n  },\n  deleteGroupById: function deleteGroupById(_ref12) {\n    var id = _ref12.id;\n    return 'DELETE FROM group WHERE id=' + id + ' RETURNING *;';\n  },\n  createLocation: function createLocation(_ref13) {\n    var location = _ref13.location;\n    return 'INSERT INTO location (' + (0, _helpers.makeColumns)(location) + ') VALUES (' + (0, _helpers.makeValues)(location) + ') RETURNING *;';\n  },\n  updateLocationById: function updateLocationById(_ref14) {\n    var id = _ref14.id,\n        location = _ref14.location;\n    return 'UPDATE location SET ' + (0, _helpers.makeSet)(location) + ' WHERE id=' + id + ' RETURNING *;';\n  },\n  deleteLocationById: function deleteLocationById(_ref15) {\n    var id = _ref15.id;\n    return 'DELETE FROM location WHERE id=' + id + ' RETURNING *;';\n  },\n  updateQuoteById: function updateQuoteById(_ref16) {\n    var id = _ref16.id,\n        quote = _ref16.quote;\n    return 'UPDATE quote SET ' + (0, _helpers.makeSet)(quote) + ' WHERE id=' + id + ' RETURNING *;';\n  },\n  deleteQuoteById: function deleteQuoteById(_ref17) {\n    var id = _ref17.id;\n    return 'DELETE FROM quote WHERE id=' + id + ' RETURNING *;';\n  },\n  createBlog: function createBlog(_ref18) {\n    var blog = _ref18.blog;\n    return 'INSERT INTO blog (' + (0, _helpers.makeColumns)(blog) + ') VALUES (' + (0, _helpers.makeValues)(blog) + ') RETURNING *;';\n  },\n  updateBlogById: function updateBlogById(_ref19) {\n    var id = _ref19.id,\n        blog = _ref19.blog;\n    return 'UPDATE blog SET ' + (0, _helpers.makeSet)(blog) + ' WHERE id=' + id + ' RETURNING *;';\n  },\n  deleteBlogById: function deleteBlogById(_ref20) {\n    var id = _ref20.id;\n    return 'DELETE FROM blog WHERE id=' + id + ' RETURNING *;';\n  },\n  createSong: function createSong(_ref21) {\n    var song = _ref21.song;\n    return 'INSERT INTO song (' + (0, _helpers.makeColumns)(song) + ') VALUES (' + (0, _helpers.makeValues)(song) + ') RETURNING *;';\n  },\n  updateSongById: function updateSongById(_ref22) {\n    var id = _ref22.id,\n        song = _ref22.song;\n    return 'UPDATE song SET ' + (0, _helpers.makeSet)(song) + ' WHERE id=' + id + ' RETURNING *;';\n  },\n  deleteSongById: function deleteSongById(_ref23) {\n    var id = _ref23.id;\n    return 'DELETE FROM song WHERE id=' + id + ' RETURNING *;';\n  },\n  createList: function createList(_ref24) {\n    var list = _ref24.list;\n    return 'INSERT INTO list (' + (0, _helpers.makeColumns)(list) + ') VALUES (' + (0, _helpers.makeValues)(list) + ') RETURNING *;';\n  },\n  updateListById: function updateListById(_ref25) {\n    var id = _ref25.id,\n        list = _ref25.list;\n    return 'UPDATE list SET ' + (0, _helpers.makeSet)(list) + ' WHERE id=' + id + ' RETURNING *;';\n  },\n  deleteListById: function deleteListById(_ref26) {\n    var id = _ref26.id;\n    return 'DELETE FROM list WHERE id=' + id + ' RETURNING *;';\n  },\n  getListById: function getListById(_ref27) {\n    var id = _ref27.id;\n    return 'SELECT id, name, settings FROM list WHERE id=' + id + ';';\n  },\n  getAllLists: function getAllLists() {\n    return 'SELECT id, name, settings FROM list;';\n  },\n  getListMembersByListId: function getListMembersByListId(_ref28) {\n    var id = _ref28.id;\n    return 'SELECT p.id, p.email, p.firstname, p.lastname, p.phone, p.food, p.preferences, p.notes, p.settings FROM person p JOIN listmember m ON p.id=m.person_id WHERE m.list_id=' + id + ';';\n  },\n  addToListByPersonId: function addToListByPersonId(_ref29) {\n    var id = _ref29.id,\n        personId = _ref29.personId;\n    return 'INSERT INTO listMember (id, person_id) VALUES (' + id + ', ' + personId + ') RETURNING *;';\n  }\n};\n\n//# sourceURL=webpack:///./db/queries/admin.js?");

/***/ }),

/***/ "./db/queries/anyone.js":
/*!******************************!*\
  !*** ./db/queries/anyone.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./db/queries/helpers.js\");\n\nexports.default = {\n  createPerson: function createPerson(_ref) {\n    var person = _ref.person;\n    return 'INSERT INTO person (' + (0, _helpers.makeColumns)(person) + ') VALUES (' + (0, _helpers.makeValues)(person) + ') RETURNING *;';\n  },\n  createAddress: function createAddress(_ref2) {\n    var address = _ref2.address;\n    return 'INSERT INTO address (' + (0, _helpers.makeColumns)(address) + ') VALUES (' + (0, _helpers.makeValues)(address) + ') RETURNING *;';\n  },\n  getLocationById: function getLocationById(_ref3) {\n    var id = _ref3.id;\n    return 'SELECT * FROM location WHERE id=' + id + ';';\n  },\n  getAllLocations: function getAllLocations() {\n    return 'SELECT * FROM location;';\n  },\n  getQuoteById: function getQuoteById(_ref4) {\n    var id = _ref4.id;\n    return 'SELECT * FROM quote WHERE id=' + id + ';';\n  },\n  getAllQuotes: function getAllQuotes() {\n    return 'SELECT * FROM quote;';\n  },\n  getBlogById: function getBlogById(_ref5) {\n    var id = _ref5.id;\n    return 'SELECT * FROM blog WHERE id=' + id + ';';\n  },\n  getAllBlogs: function getAllBlogs() {\n    return 'SELECT * FROM blog;';\n  },\n  getSongById: function getSongById(_ref6) {\n    var id = _ref6.id;\n    return 'SELECT * FROM song WHERE id=' + id + ';';\n  },\n  getAllSongs: function getAllSongs() {\n    return 'SELECT * FROM song;';\n  }\n};\n\n//# sourceURL=webpack:///./db/queries/anyone.js?");

/***/ }),

/***/ "./db/queries/helpers.js":
/*!*******************************!*\
  !*** ./db/queries/helpers.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar makeValues = exports.makeValues = function makeValues(items) {\n  return Object.values(items).map(function (value) {\n    return ('\\'' + value + '\\',').slice(0, -1);\n  });\n};\nvar makeColumns = exports.makeColumns = function makeColumns(items) {\n  return Object.keys(items);\n};\nvar makeSet = exports.makeSet = function makeSet(items) {\n  var keys = Object.keys(items);\n  var set = keys.reduce(function (accumString, key) {\n    return accumString + (key + '=\\'' + items[key] + '\\', ');\n  }, '').slice(0, -2);\n  return set;\n};\n\n//# sourceURL=webpack:///./db/queries/helpers.js?");

/***/ }),

/***/ "./db/queries/person.js":
/*!******************************!*\
  !*** ./db/queries/person.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./db/queries/helpers.js\");\n\nexports.default = {\n  getAddressById: function getAddressById(_ref) {\n    var id = _ref.id;\n    return 'SELECT * FROM address WHERE id=' + id + ';';\n  },\n  getAddressByPersonId: function getAddressByPersonId(_ref2) {\n    var id = _ref2.id;\n    return 'SELECT * FROM address WHERE id=(SELECT address_id FROM person WHERE id=' + id + ');';\n  },\n  createPerson: function createPerson(_ref3) {\n    var group = _ref3.group;\n    return 'INSERT INTO person (' + (0, _helpers.makeColumns)(group) + ') VALUES (' + (0, _helpers.makeValues)(group) + ') RETURNING *;';\n  },\n  getPersonById: function getPersonById(_ref4) {\n    var id = _ref4.id;\n    return 'SELECT id, email, firstname, lastname, phone, food, notes, preferences, settings FROM person WHERE id=' + id;\n  },\n  associateAddressToPerson: function associateAddressToPerson(_ref5) {\n    var id = _ref5.id,\n        personId = _ref5.personId;\n    return 'UPDATE person SET address_id=(SELECT id FROM address WHERE id=' + id + ') WHERE id=' + personId + ' RETURNING *;';\n  },\n  updateAttendanceToEventByPersonId: function updateAttendanceToEventByPersonId(_ref6) {\n    var id = _ref6.id,\n        personId = _ref6.personId,\n        attendance = _ref6.attendance;\n    return 'UPDATE attendance SET ' + (0, _helpers.makeColumns)(attendance) + ' WHERE event_id=' + id + ' AND person_id=' + personId;\n  },\n  getAttendanceByPersonId: function getAttendanceByPersonId(_ref7) {\n    var id = _ref7.id;\n    return 'SELECT a.event_id, a.invitation_sent, a.rsvpd, a.rsvpyes, a.preferences, e.settings, e.notes, e.id, e.name, e.time, e.send_invitations, e.auto_invite, d.address1, d.address2, d.city, d.state, d.zip, d.country FROM attendance a JOIN event e ON (e.id=a.event_id AND a.person_id=' + id + ') JOIN address d ON (e.address_id = d.id);';\n  },\n  getAttendanceByEventId: function getAttendanceByEventId(_ref8) {\n    var id = _ref8.id;\n    return 'SELECT a.event_id, p.id, p.email, p.firstname, p.lastname, a.notes, a.invitation_sent, a.rsvpd, a.preferences, a.settings FROM attendance a JOIN person p ON a.person_id=p.id WHERE a.event_id=' + id + ';';\n  },\n  getAllEvents: function getAllEvents() {\n    return 'SELECT id, name, time, address_id, send_invitations, auto_invite, notes, settings FROM event;';\n  },\n  createEvent: function createEvent(_ref9) {\n    var event = _ref9.event;\n    return 'INSERT INTO event (' + (0, _helpers.makeColumns)(event) + ') VALUES (' + (0, _helpers.makeValues)(event) + ') RETURNING *;';\n  },\n  createQuote: function createQuote(_ref10) {\n    var quote = _ref10.quote;\n    return 'INSERT INTO quote (' + (0, _helpers.makeColumns)(event) + ') VALUES (' + (0, _helpers.makeValues)(event) + ') RETURNING *;';\n  },\n  addToGroupByPersonId: function addToGroupByPersonId(_ref11) {\n    var id = _ref11.id,\n        personId = _ref11.personId;\n    return 'INSERT INTO groupomember (person_id, groupo_id) VALUES (' + personId + ', (SELECT id from groupo WHERE id=' + id + ')) RETURNING *;';\n  },\n  getGroupsByPersonId: function getGroupsByPersonId(_ref12) {\n    var id = _ref12.id;\n    return 'SELECT g.id, g.name, g.parent_id, g.notes, g.preferences, g.settings FROM groupo g JOIN groupomember m ON g.id=m.groupo_id WHERE m.person_id=' + id + ';';\n  },\n  getGroupMembersByGroupId: function getGroupMembersByGroupId(_ref13) {\n    var id = _ref13.id;\n    return 'SELECT p.id, p.email, p.firstname, p.lastname, p.phone, p.food, p.address_id, p.preferences, p.notes, p.settings FROM person p JOIN groupomember m ON p.id=m.person_id WHERE m.groupo_id=' + id + ';';\n  },\n  getListMembershipByPersonId: function getListMembershipByPersonId(_ref14) {\n    var id = _ref14.id;\n    return 'SELECT l.id, l.name FROM person p JOIN listmember m ON p.id=m.person_id JOIN list l ON l.id=m.list_id WHERE p.id=' + id + ';';\n  },\n  getQuotesByPersonId: function getQuotesByPersonId(_ref15) {\n    var id = _ref15.id;\n    return 'SELECT q.id, q.text, q.author FROM quote q JOIN quotemember m ON q.id=m.quote_id WHERE m.person_id=' + id + ';';\n  },\n  getListsByPersonId: function getListsByPersonId(_ref16) {\n    var id = _ref16.id;\n    return 'SELECT l.id, l.name, l.settings FROM list l JOIN listmember m ON l.id=m.list_id WHERE m.person_id=' + id + ';';\n  },\n\n  addToQuoteByPersonId: function addToQuoteByPersonId(_ref17) {\n    var id = _ref17.id,\n        personId = _ref17.personId;\n    return 'INSERT INTO quote_membership (person_id, quote_id) VALUES(' + personId + ', ' + id + ') RETURNING *';\n  },\n  getQuoteMembersByQuoteId: function getQuoteMembersByQuoteId(_ref18) {\n    var id = _ref18.id;\n    return 'SELECT p.id, p.email, p.firstname, p.lastname, m.quote_id FROM person p JOIN quotemember m ON p.id=m.person_id WHERE m.quote_id=' + id + ';';\n  },\n  getAllGroups: function getAllGroups() {\n    return 'SELECT * FROM groupo;';\n  },\n  removeFromGroupByPersonId: function removeFromGroupByPersonId(_ref19) {\n    var id = _ref19.id,\n        personId = _ref19.personId;\n    return 'DELETE FROM groupomember m WHERE person_id=' + personId + ' AND groupo_id=' + id + ';';\n  },\n  updateGroupById: function updateGroupById(_ref20) {\n    var id = _ref20.id,\n        group = _ref20.group;\n    return 'UPDATE groupo SET ' + (0, _helpers.makeSet)(group) + ' WHERE id=' + id + ' RETURNING *;';\n  }\n};\n\n//# sourceURL=webpack:///./db/queries/person.js?");

/***/ }),

/***/ "./db/queries/security.js":
/*!********************************!*\
  !*** ./db/queries/security.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./db/queries/helpers.js\");\n\nexports.default = {\n  createPerson: function createPerson(_ref) {\n    var person = _ref.person;\n    return 'INSERT INTO person (' + (0, _helpers.makeColumns)(person) + ') VALUES (' + (0, _helpers.makeValues)(person) + ') RETURNING *;';\n  }\n  // createAddress: ({ address }) => `INSERT INTO address (${makeColumns(address)}) VALUES (${makeValues(address)}) RETURNING *;`,\n  // getLocationById: ({ id }) => `SELECT * FROM location WHERE id=${id};`,\n}; // Public/ auth utils\n\n//# sourceURL=webpack:///./db/queries/security.js?");

/***/ }),

/***/ "./graphql/index.js":
/*!**************************!*\
  !*** ./graphql/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _expressGraphql = __webpack_require__(/*! express-graphql */ \"express-graphql\");\n\nvar _expressGraphql2 = _interopRequireDefault(_expressGraphql);\n\nvar _schema = __webpack_require__(/*! ./schema/ */ \"./graphql/schema/index.js\");\n\nvar _schema2 = _interopRequireDefault(_schema);\n\nvar _resolvers = __webpack_require__(/*! ./resolvers */ \"./graphql/resolvers/index.js\");\n\nvar _resolvers2 = _interopRequireDefault(_resolvers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _expressGraphql2.default)(async function (req, res) {\n  return {\n    schema: _schema2.default,\n    rootValue: _resolvers2.default,\n    graphiql: \"development\" !== 'production',\n    context: { req: req, res: res },\n    pretty: true\n  };\n});\n\n//# sourceURL=webpack:///./graphql/index.js?");

/***/ }),

/***/ "./graphql/resolvers/index.js":
/*!************************************!*\
  !*** ./graphql/resolvers/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _hello$createAddress$;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _db = __webpack_require__(/*! ../../db */ \"./db/index.js\");\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar keys = Object.keys,\n    values = Object.values;\nexports.default = (_hello$createAddress$ = {\n  //anyone\n\n  //Sanity test\n  hello: async function hello() {\n    var _ref = await _db.sequelize.query('SELECT * FROM songs'),\n        _ref2 = _slicedToArray(_ref, 1),\n        _ref2$ = _slicedToArray(_ref2[0], 1),\n        a = _ref2$[0];\n\n    return 'Hello!';\n  },\n\n  createAddress: async function createAddress() {\n    var _ref3 = await _db.anyone.createAddress.apply(_db.anyone, arguments),\n        _ref4 = _slicedToArray(_ref3, 1),\n        _ref4$ = _slicedToArray(_ref4[0], 1),\n        address = _ref4$[0];\n\n    return address || 'forcegraphqlerror';\n  },\n\n  createPerson: async function createPerson() {\n    var _ref5 = await _db.anyone.createPerson.apply(_db.anyone, arguments),\n        _ref6 = _slicedToArray(_ref5, 1),\n        _ref6$ = _slicedToArray(_ref6[0], 1),\n        person = _ref6$[0];\n\n    return person || 'forcegraphqlerror';\n  },\n\n  getLocationById: async function getLocationById() {\n    var _ref7 = await _db.anyone.getLocationById.apply(_db.anyone, arguments),\n        _ref8 = _slicedToArray(_ref7, 1),\n        _ref8$ = _slicedToArray(_ref8[0], 1),\n        location = _ref8$[0];\n\n    return location || 'forcegraphqlerror';\n  },\n\n  getAllLocations: async function getAllLocations() {\n    var _ref9 = await _db.anyone.getAllLocations.apply(_db.anyone, arguments),\n        _ref10 = _slicedToArray(_ref9, 1),\n        locations = _ref10[0];\n\n    return locations || 'forcegraphqlerror';\n  },\n\n  getQuoteById: async function getQuoteById() {\n    var _ref11 = await _db.anyone.getQuoteById.apply(_db.anyone, arguments),\n        _ref12 = _slicedToArray(_ref11, 1),\n        _ref12$ = _slicedToArray(_ref12[0], 1),\n        quote = _ref12$[0];\n\n    return quote || 'forcegraphqlerror';\n  },\n\n  getAllQuotes: async function getAllQuotes() {\n    var _ref13 = await _db.anyone.getAllQuotes.apply(_db.anyone, arguments),\n        _ref14 = _slicedToArray(_ref13, 1),\n        quotes = _ref14[0];\n\n    return quotes || 'forcegraphqlerror';\n  },\n\n  getBlogById: async function getBlogById() {\n    var _ref15 = await _db.anyone.getBlogById.apply(_db.anyone, arguments),\n        _ref16 = _slicedToArray(_ref15, 1),\n        _ref16$ = _slicedToArray(_ref16[0], 1),\n        blog = _ref16$[0];\n\n    return blog || 'forcegraphqlerror';\n  },\n\n  getAllBlogs: async function getAllBlogs() {\n    var _ref17 = await _db.anyone.getAllQuotes.apply(_db.anyone, arguments),\n        _ref18 = _slicedToArray(_ref17, 1),\n        blogs = _ref18[0];\n\n    return blogs || 'forcegraphqlerror';\n  },\n\n  getSongById: async function getSongById() {\n    var _ref19 = await _db.anyone.getBlogById.apply(_db.anyone, arguments),\n        _ref20 = _slicedToArray(_ref19, 1),\n        _ref20$ = _slicedToArray(_ref20[0], 1),\n        song = _ref20$[0];\n\n    return song || 'forcegraphqlerror';\n  },\n\n  getAllSongs: async function getAllSongs() {\n    var _ref21 = await _db.anyone.getAllQuotes.apply(_db.anyone, arguments),\n        _ref22 = _slicedToArray(_ref21, 1),\n        songs = _ref22[0];\n\n    return songs || 'forcegraphqlerror';\n  },\n\n  loadPublicData: async function loadPublicData() {\n    var _ref23 = await _db.anyone.getAllQuotes.apply(_db.anyone, arguments),\n        _ref24 = _slicedToArray(_ref23, 1),\n        quotes = _ref24[0];\n\n    var _ref25 = await _db.anyone.getAllBlogs.apply(_db.anyone, arguments),\n        _ref26 = _slicedToArray(_ref25, 1),\n        blogs = _ref26[0];\n\n    var _ref27 = await _db.anyone.getAllSongs.apply(_db.anyone, arguments),\n        _ref28 = _slicedToArray(_ref27, 1),\n        songs = _ref28[0];\n\n    return {\n      songs: songs || [],\n      blogs: blogs || [],\n      quotes: quotes || []\n    };\n  },\n\n  //private - no randos\n  getAddressById: async function getAddressById() {\n    var _ref29 = await _db.person.getAddressById.apply(_db.person, arguments),\n        _ref30 = _slicedToArray(_ref29, 1),\n        _ref30$ = _slicedToArray(_ref30[0], 1),\n        address = _ref30$[0];\n\n    return address || 'forcegraphqlerror';\n  },\n\n  getAddressByPersonId: async function getAddressByPersonId() {\n    var _ref31 = await _db.person.getAddressByPersonId.apply(_db.person, arguments),\n        _ref32 = _slicedToArray(_ref31, 1),\n        _ref32$ = _slicedToArray(_ref32[0], 1),\n        address = _ref32$[0];\n\n    return address || 'forcegraphqlerror';\n  },\n\n  associateAddressToPerson: async function associateAddressToPerson() {\n    var _ref33 = await _db.person.associateAddressToPerson.apply(_db.person, arguments),\n        _ref34 = _slicedToArray(_ref33, 1),\n        _ref34$ = _slicedToArray(_ref34[0], 1),\n        updatedPerson = _ref34$[0];\n\n    return updatedPerson || 'forcegraphqlerror';\n  },\n\n  //Duplicates ^\n  // Address are not changed, they are switched\n  createAndAssociateAddressToPerson: async function createAndAssociateAddressToPerson(obj, context) {\n    var _ref35 = await _db.anyone.createAddress(object, context),\n        _ref36 = _slicedToArray(_ref35, 1),\n        _ref36$ = _slicedToArray(_ref36[0], 1),\n        id = _ref36$[0].id;\n\n    var assocObj = Object.assign({}, obj, { id: id });\n\n    var _ref37 = await _db.person.associateAddressToPerson(assocObj, context),\n        _ref38 = _slicedToArray(_ref37, 1),\n        _ref38$ = _slicedToArray(_ref38[0], 1),\n        address = _ref38$[0];\n\n    return address || 'forcegraphqlerror';\n  },\n\n  updateOrChangeAddressByPersonId: async function updateOrChangeAddressByPersonId() {\n    var _ref39 = await _db.anyone.createAddress(object, context),\n        _ref40 = _slicedToArray(_ref39, 1),\n        _ref40$ = _slicedToArray(_ref40[0], 1),\n        id = _ref40$[0].id;\n\n    var assocObj = Object.assign({}, obj, { id: id });\n\n    var _ref41 = await _db.person.associateAddressToPerson.apply(_db.person, arguments),\n        _ref42 = _slicedToArray(_ref41, 1),\n        _ref42$ = _slicedToArray(_ref42[0], 1),\n        address = _ref42$[0];\n\n    return address || 'forcegraphqlerror';\n  },\n\n  // ie RSVP and other things\n  updateAttendanceToEventByPersonId: async function updateAttendanceToEventByPersonId() {\n    var _ref43 = await _db.person.updateAttendanceToEventByPersonId.apply(_db.person, arguments),\n        _ref44 = _slicedToArray(_ref43, 1),\n        _ref44$ = _slicedToArray(_ref44[0], 1),\n        event = _ref44$[0];\n\n    return event || 'forcegraphqlerror';\n  },\n\n  getAttendanceByEventId: async function getAttendanceByEventId() {\n    var _ref45 = await _db.person.getAttendanceByEventId.apply(_db.person, arguments),\n        _ref46 = _slicedToArray(_ref45, 1),\n        attendees = _ref46[0];\n\n    console.log('attendances: ', attendees);\n    return attendees || 'forcegraphqlerror';\n  },\n\n  getAttendanceByPersonId: async function getAttendanceByPersonId() {\n    var _ref47 = await _db.person.getAttendanceByPersonId.apply(_db.person, arguments),\n        _ref48 = _slicedToArray(_ref47, 1),\n        attendances = _ref48[0];\n\n    return attendances || 'forcegraphqlerror';\n  },\n\n  getListMembershipByPersonId: async function getListMembershipByPersonId() {\n    var _ref49 = await _db.person.getListMembershipByPersonId.apply(_db.person, arguments),\n        _ref50 = _slicedToArray(_ref49, 1),\n        lists = _ref50[0];\n\n    return lists || 'forcegraphqlerror';\n  },\n\n  loadPersonDataById: async function loadPersonDataById() {\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    var lastArgs = args.slice(1);\n\n    var _ref51 = await _db.person.getAddressByPersonId.apply(_db.person, args),\n        _ref52 = _slicedToArray(_ref51, 1),\n        _ref52$ = _slicedToArray(_ref52[0], 1),\n        _ref52$$ = _ref52$[0],\n        address = _ref52$$ === undefined ? {} : _ref52$$;\n\n    var _ref53 = await _db.person.getPersonById.apply(_db.person, args),\n        _ref54 = _slicedToArray(_ref53, 1),\n        _ref54$ = _slicedToArray(_ref54[0], 1),\n        personData = _ref54$[0];\n\n    var _ref55 = await _db.person.getAttendanceByPersonId.apply(_db.person, args),\n        _ref56 = _slicedToArray(_ref55, 1),\n        eventsWithAttendance = _ref56[0];\n\n    var _ref57 = await _db.person.getGroupsByPersonId.apply(_db.person, args),\n        _ref58 = _slicedToArray(_ref57, 1),\n        mygroups = _ref58[0];\n\n    var groups = [];\n    await Promise.all(mygroups.map(function (group) {\n      return new Promise(function (resolve, reject) {\n        _db.person.getGroupMembersByGroupId.apply(_db.person, [{ id: group.id }].concat(_toConsumableArray(lastArgs))).then(function (_ref59) {\n          var _ref60 = _slicedToArray(_ref59, 1),\n              members = _ref60[0];\n\n          groups.push(Object.assign(group, { members: members }));\n          resolve();\n        });\n      });\n    })).then(function () {\n      return console.log('getting members complete');\n    });\n\n    var _ref61 = await _db.person.getQuotesByPersonId.apply(_db.person, args),\n        _ref62 = _slicedToArray(_ref61, 1),\n        quotes = _ref62[0];\n\n    var _ref63 = await _db.person.getListsByPersonId.apply(_db.person, args),\n        _ref64 = _slicedToArray(_ref63, 1),\n        lists = _ref64[0];\n\n    var result = {\n      address: address || [],\n      person: personData,\n      events: eventsWithAttendance || [],\n      groups: groups,\n      lists: lists,\n      quotes: quotes\n    };\n\n    return result;\n  },\n\n  getGroupsByPersonId: async function getGroupsByPersonId() {\n    var _ref65 = await _db.person.getGroupsByPersonId.apply(_db.person, arguments),\n        _ref66 = _slicedToArray(_ref65, 1),\n        groups = _ref66[0];\n\n    return groups || 'forcegraphqlerror';\n  },\n\n  getGroupMembersByGroupId: async function getGroupMembersByGroupId() {\n    var _ref67 = await _db.person.getGroupMembersByGroupId.apply(_db.person, arguments),\n        _ref68 = _slicedToArray(_ref67, 1),\n        groups = _ref68[0];\n\n    return groups || 'forcegraphqlerror';\n  },\n\n  getAllGroups: async function getAllGroups() {\n    var _ref69 = await _db.person.getAllGroups.apply(_db.person, arguments),\n        _ref70 = _slicedToArray(_ref69, 1),\n        groups = _ref70[0];\n\n    return groups || 'forcegraphqlerror';\n  },\n\n  createGroup: async function createGroup() {\n    var _ref71 = await _db.person.createGroup.apply(_db.person, arguments),\n        _ref72 = _slicedToArray(_ref71, 1),\n        _ref72$ = _slicedToArray(_ref72[0], 1),\n        group = _ref72$[0];\n\n    return group || 'forcegraphqlerror';\n  },\n\n  addToGroupByPersonId: async function addToGroupByPersonId() {\n    var _ref73 = await _db.person.addToGroupByPersonId.apply(_db.person, arguments),\n        _ref74 = _slicedToArray(_ref73, 1),\n        _ref74$ = _slicedToArray(_ref74[0], 1),\n        group = _ref74$[0];\n\n    return { success: !!result };\n  },\n\n  removeFromGroupByPersonId: async function removeFromGroupByPersonId() {\n    var _ref75 = await _db.person.removeFromGroupByPersonId.apply(_db.person, arguments),\n        _ref76 = _slicedToArray(_ref75, 1),\n        _ref76$ = _slicedToArray(_ref76[0], 1),\n        result = _ref76$[0];\n\n    return { success: !!result };\n  },\n\n  updateGroupById: async function updateGroupById() {\n    var _ref77 = await _db.person.updateGroupById.apply(_db.person, arguments),\n        _ref78 = _slicedToArray(_ref77, 1),\n        _ref78$ = _slicedToArray(_ref78[0], 1),\n        group = _ref78$[0];\n\n    return group;\n  },\n\n  getAllEvents: async function getAllEvents() {\n    var _ref79 = await _db.admin.getAllEvents.apply(_db.admin, arguments),\n        _ref80 = _slicedToArray(_ref79, 1),\n        events = _ref80[0];\n\n    return events || 'forcegraphqlerror';\n  },\n\n  createQuote: async function createQuote() {\n    var _ref81 = await _db.person.createQuote.apply(_db.person, arguments),\n        _ref82 = _slicedToArray(_ref81, 1),\n        _ref82$ = _slicedToArray(_ref82[0], 1),\n        quote = _ref82$[0];\n\n    return quote || 'forcegraphqlerror';\n  },\n\n  getQuoteMembersByQuoteId: async function getQuoteMembersByQuoteId() {\n    var _ref83 = await _db.person.getQuoteMembersByQuoteId.apply(_db.person, arguments),\n        _ref84 = _slicedToArray(_ref83, 1),\n        members = _ref84[0];\n\n    return members || 'forcegraphqlerror';\n  },\n\n  addToQuoteByPersonId: async function addToQuoteByPersonId() {\n    var _person$addToQuoteByP = _db.person.addToQuoteByPersonId.apply(_db.person, arguments),\n        _person$addToQuoteByP2 = _slicedToArray(_person$addToQuoteByP, 1),\n        _person$addToQuoteByP3 = _slicedToArray(_person$addToQuoteByP2[0], 1),\n        quote = _person$addToQuoteByP3[0];\n\n    return quote || 'forcegraphqlerror';\n  },\n\n  getListsByPersonId: async function getListsByPersonId() {\n    var _me;\n\n    var _ref85 = await (_me = me).getListsByPersonId.apply(_me, arguments),\n        _ref86 = _slicedToArray(_ref85, 1),\n        lists = _ref86[0];\n\n    return lists || 'forcegraphqlerror';\n  },\n\n  //admin\n\n  //TODO use me as model for success check\n  updateAddressById: async function updateAddressById() {\n    var _ref87 = await _db.admin.updateAddressById.apply(_db.admin, arguments),\n        _ref88 = _slicedToArray(_ref87, 1),\n        _ref88$ = _slicedToArray(_ref88[0], 1),\n        address = _ref88$[0];\n\n    return address || 'forcegraphqlerror';\n  }\n\n}, _defineProperty(_hello$createAddress$, 'associateAddressToPerson', async function associateAddressToPerson() {\n  var _ref89 = await _db.admin.associateAddressToPerson.apply(_db.admin, arguments),\n      _ref90 = _slicedToArray(_ref89, 1),\n      _ref90$ = _slicedToArray(_ref90[0], 1),\n      updatedPerson = _ref90$[0];\n\n  return updatedPerson || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'deleteAddressById', async function deleteAddressById() {\n  var _ref91 = await _db.admin.deleteAddressById.apply(_db.admin, arguments),\n      _ref92 = _slicedToArray(_ref91, 1),\n      _ref92$ = _slicedToArray(_ref92[0], 1),\n      address = _ref92$[0];\n\n  return address || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'getPersonById', async function getPersonById() {\n  var _ref93 = await _db.admin.getPersonById.apply(_db.admin, arguments),\n      _ref94 = _slicedToArray(_ref93, 1),\n      _ref94$ = _slicedToArray(_ref94[0], 1),\n      personData = _ref94$[0];\n\n  return personData || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'getAllPeople', async function getAllPeople() {\n  var _ref95 = await _db.admin.getAllPeople.apply(_db.admin, arguments),\n      _ref96 = _slicedToArray(_ref95, 1),\n      people = _ref96[0];\n\n  return people || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'updatePersonById', async function updatePersonById() {\n  var _ref97 = await _db.admin.updatePersonById.apply(_db.admin, arguments),\n      _ref98 = _slicedToArray(_ref97, 1),\n      _ref98$ = _slicedToArray(_ref98[0], 1),\n      updatedPerson = _ref98$[0];\n\n  return updatedPerson || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'deletePersonById', async function deletePersonById() {\n  var _ref99 = await _db.admin.deleteAddressById.apply(_db.admin, arguments),\n      _ref100 = _slicedToArray(_ref99, 1),\n      _ref100$ = _slicedToArray(_ref100[0], 1),\n      deletedPerson = _ref100$[0];\n\n  return deletedPerson || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'getEventById', async function getEventById() {\n  var _ref101 = await _db.admin.getEventById.apply(_db.admin, arguments),\n      _ref102 = _slicedToArray(_ref101, 1),\n      _ref102$ = _slicedToArray(_ref102[0], 1),\n      event = _ref102$[0];\n\n  return event || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'createEvent', async function createEvent() {\n  var _ref103 = await _db.admin.createEvent.apply(_db.admin, arguments),\n      _ref104 = _slicedToArray(_ref103, 1),\n      _ref104$ = _slicedToArray(_ref104[0], 1),\n      event = _ref104$[0];\n\n  return event || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'updateEventById', async function updateEventById() {\n  var _ref105 = await _db.admin.updateEventById.apply(_db.admin, arguments),\n      _ref106 = _slicedToArray(_ref105, 1),\n      _ref106$ = _slicedToArray(_ref106[0], 1),\n      event = _ref106$[0];\n\n  return event || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'deleteEventById', async function deleteEventById() {\n  var _ref107 = await _db.admin.deleteEventById.apply(_db.admin, arguments),\n      _ref108 = _slicedToArray(_ref107, 1),\n      _ref108$ = _slicedToArray(_ref108[0], 1),\n      event = _ref108$[0];\n\n  return event || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'createAttendance', async function createAttendance() {\n  var _ref109 = await _db.admin.createAttendance.apply(_db.admin, arguments),\n      _ref110 = _slicedToArray(_ref109, 1),\n      _ref110$ = _slicedToArray(_ref110[0], 1),\n      attendance = _ref110$[0];\n\n  return attendance || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'deleteGroupById', async function deleteGroupById() {\n  var _ref111 = await _db.admin.deleteGroupById.apply(_db.admin, arguments),\n      _ref112 = _slicedToArray(_ref111, 1),\n      _ref112$ = _slicedToArray(_ref112[0], 1),\n      group = _ref112$[0];\n\n  return group || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'createLocation', async function createLocation() {\n  var _ref113 = await _db.admin.createLocation.apply(_db.admin, arguments),\n      _ref114 = _slicedToArray(_ref113, 1),\n      _ref114$ = _slicedToArray(_ref114[0], 1),\n      location = _ref114$[0];\n\n  return location || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'updateLocationById', async function updateLocationById() {\n  var _ref115 = await _db.admin.updateLocationById.apply(_db.admin, arguments),\n      _ref116 = _slicedToArray(_ref115, 1),\n      _ref116$ = _slicedToArray(_ref116[0], 1),\n      location = _ref116$[0];\n\n  return location || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'deleteLocationById', async function deleteLocationById() {\n  var _ref117 = await _db.admin.deleteLocationById.apply(_db.admin, arguments),\n      _ref118 = _slicedToArray(_ref117, 1),\n      _ref118$ = _slicedToArray(_ref118[0], 1),\n      location = _ref118$[0];\n\n  return location || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'updateQuoteById', async function updateQuoteById() {\n  var _ref119 = await _db.admin.updateQuoteById.apply(_db.admin, arguments),\n      _ref120 = _slicedToArray(_ref119, 1),\n      _ref120$ = _slicedToArray(_ref120[0], 1),\n      quote = _ref120$[0];\n\n  return quote || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'deleteQuoteById', async function deleteQuoteById() {\n  var _ref121 = await _db.admin.deleteQuoteById.apply(_db.admin, arguments),\n      _ref122 = _slicedToArray(_ref121, 1),\n      _ref122$ = _slicedToArray(_ref122[0], 1),\n      quote = _ref122$[0];\n\n  return quote || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'createBlog', async function createBlog() {\n  var _ref123 = await _db.admin.createBlog.apply(_db.admin, arguments),\n      _ref124 = _slicedToArray(_ref123, 1),\n      _ref124$ = _slicedToArray(_ref124[0], 1),\n      blog = _ref124$[0];\n\n  return blog || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'updateBlogById', async function updateBlogById() {\n  var _ref125 = await _db.admin.updateBlogById.apply(_db.admin, arguments),\n      _ref126 = _slicedToArray(_ref125, 1),\n      _ref126$ = _slicedToArray(_ref126[0], 1),\n      blog = _ref126$[0];\n\n  return blog || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'deleteBlogById', async function deleteBlogById() {\n  var _ref127 = await _db.admin.deleteBlogById.apply(_db.admin, arguments),\n      _ref128 = _slicedToArray(_ref127, 1),\n      _ref128$ = _slicedToArray(_ref128[0], 1),\n      blog = _ref128$[0];\n\n  return blog || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'createSong', async function createSong() {\n  var _ref129 = await _db.admin.createSong.apply(_db.admin, arguments),\n      _ref130 = _slicedToArray(_ref129, 1),\n      _ref130$ = _slicedToArray(_ref130[0], 1),\n      song = _ref130$[0];\n\n  return song || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'updateSongById', async function updateSongById() {\n  var _ref131 = await _db.admin.updateSongById.apply(_db.admin, arguments),\n      _ref132 = _slicedToArray(_ref131, 1),\n      _ref132$ = _slicedToArray(_ref132[0], 1),\n      song = _ref132$[0];\n\n  return song || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'deleteSongById', async function deleteSongById() {\n  var _ref133 = await _db.admin.deleteSongById.apply(_db.admin, arguments),\n      _ref134 = _slicedToArray(_ref133, 1),\n      _ref134$ = _slicedToArray(_ref134[0], 1),\n      song = _ref134$[0];\n\n  return song || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'getListById', async function getListById() {\n  var _ref135 = await _db.admin.getListById.apply(_db.admin, arguments),\n      _ref136 = _slicedToArray(_ref135, 1),\n      _ref136$ = _slicedToArray(_ref136[0], 1),\n      list = _ref136$[0];\n\n  return list || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'getAllLists', async function getAllLists() {\n  var _ref137 = await _db.admin.getAllLists.apply(_db.admin, _toConsumableArray(args)),\n      _ref138 = _slicedToArray(_ref137, 1),\n      lists = _ref138[0];\n\n  return lists || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'createList', async function createList() {\n  var _ref139 = await _db.admin.createList.apply(_db.admin, arguments),\n      _ref140 = _slicedToArray(_ref139, 1),\n      _ref140$ = _slicedToArray(_ref140[0], 1),\n      list = _ref140$[0];\n\n  return list || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'updateListById', async function updateListById() {\n  var _ref141 = await _db.admin.updateListById.apply(_db.admin, arguments),\n      _ref142 = _slicedToArray(_ref141, 1),\n      _ref142$ = _slicedToArray(_ref142[0], 1),\n      list = _ref142$[0];\n\n  return list || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'deleteListById', async function deleteListById() {\n  var _ref143 = await _db.admin.deleteListById.apply(_db.admin, arguments),\n      _ref144 = _slicedToArray(_ref143, 1),\n      _ref144$ = _slicedToArray(_ref144[0], 1),\n      list = _ref144$[0];\n\n  return list || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'addToListByPersonId', async function addToListByPersonId() {\n  var _ref145 = await _db.admin.addToListByPersonId.apply(_db.admin, arguments),\n      _ref146 = _slicedToArray(_ref145, 1),\n      _ref146$ = _slicedToArray(_ref146[0], 1),\n      listMember = _ref146$[0];\n\n  return { success: !!result };\n}), _defineProperty(_hello$createAddress$, 'getListMembersByListId', async function getListMembersByListId() {\n  var _ref147 = await _db.admin.getListMembersByListId.apply(_db.admin, arguments),\n      _ref148 = _slicedToArray(_ref147, 1),\n      members = _ref148[0];\n\n  return members || 'forcegraphqlerror';\n}), _defineProperty(_hello$createAddress$, 'loadAdminData', async function loadAdminData() {\n  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    args[_key2] = arguments[_key2];\n  }\n\n  var lastArgs = args.slice(1);\n\n  var _ref149 = await _db.person.getAllEvents.apply(_db.person, args),\n      _ref150 = _slicedToArray(_ref149, 1),\n      allevents = _ref150[0];\n\n  var _ref151 = await _db.admin.getAllPeople.apply(_db.admin, args),\n      _ref152 = _slicedToArray(_ref151, 1),\n      people = _ref152[0];\n\n  var events = [];\n  await Promise.all(allevents.map(function (event) {\n    return new Promise(function (resolve, reject) {\n      _db.person.getAttendanceByEventId.apply(_db.person, [{ id: event.id }].concat(_toConsumableArray(lastArgs))).then(function (_ref153) {\n        var _ref154 = _slicedToArray(_ref153, 1),\n            attendees = _ref154[0];\n\n        events.push(Object.assign(event, { attendees: attendees }));\n        resolve();\n      });\n    });\n  })).then(function () {\n    return console.log('getting event attendance complete');\n  });\n\n  // This is copied from loadPublicData above\n\n  var _ref155 = await _db.person.getAllGroups.apply(_db.person, args),\n      _ref156 = _slicedToArray(_ref155, 1),\n      allgroups = _ref156[0];\n\n  var groups = [];\n  await Promise.all(allgroups.map(function (group) {\n    return new Promise(function (resolve, reject) {\n      _db.person.getGroupMembersByGroupId.apply(_db.person, [{ id: group.id }].concat(_toConsumableArray(lastArgs))).then(function (_ref157) {\n        var _ref158 = _slicedToArray(_ref157, 1),\n            members = _ref158[0];\n\n        groups.push(Object.assign(group, { members: members }));\n        resolve();\n      });\n    });\n  })).then(function () {\n    return console.log('getting group members complete');\n  });\n\n  var _ref159 = await _db.anyone.getAllLocations.apply(_db.anyone, args),\n      _ref160 = _slicedToArray(_ref159, 1),\n      locations = _ref160[0];\n\n  var _ref161 = await _db.anyone.getAllQuotes.apply(_db.anyone, args),\n      _ref162 = _slicedToArray(_ref161, 1),\n      allquotes = _ref162[0];\n\n  var quotes = [];\n  await Promise.all(allquotes.map(function (quote) {\n    return new Promise(function (resolve, reject) {\n      _db.person.getQuoteMembersByQuoteId.apply(_db.person, [{ id: quote.id }].concat(_toConsumableArray(lastArgs))).then(function (_ref163) {\n        var _ref164 = _slicedToArray(_ref163, 1),\n            members = _ref164[0];\n\n        quotes.push(Object.assign(quote, { members: members }));\n        resolve();\n      });\n    });\n  })).then(function () {\n    return console.log('getting quote members complete');\n  });\n\n  var _ref165 = await _db.anyone.getAllSongs.apply(_db.anyone, args),\n      _ref166 = _slicedToArray(_ref165, 1),\n      songs = _ref166[0];\n\n  var _ref167 = await _db.anyone.getAllBlogs.apply(_db.anyone, args),\n      _ref168 = _slicedToArray(_ref167, 1),\n      blogs = _ref168[0];\n\n  var _ref169 = await _db.admin.getAllLists.apply(_db.admin, args),\n      _ref170 = _slicedToArray(_ref169, 1),\n      alllists = _ref170[0];\n\n  var lists = [];\n  await Promise.all(alllists.map(function (list) {\n    return new Promise(function (resolve, reject) {\n      _db.admin.getListMembersByListId.apply(_db.admin, [{ id: list.id }].concat(_toConsumableArray(lastArgs))).then(function (_ref171) {\n        var _ref172 = _slicedToArray(_ref171, 1),\n            members = _ref172[0];\n\n        lists.push(Object.assign(list, { members: members }));\n        resolve();\n      });\n    });\n  })).then(function () {\n    return console.log('getting list members complete');\n  });\n\n  return {\n    people: people,\n    events: events,\n    groups: groups,\n    locations: locations,\n    quotes: quotes,\n    blogs: blogs,\n    songs: songs,\n    lists: lists\n  };\n}), _hello$createAddress$);\n\n//# sourceURL=webpack:///./graphql/resolvers/index.js?");

/***/ }),

/***/ "./graphql/schema/index.js":
/*!*********************************!*\
  !*** ./graphql/schema/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _graphql = __webpack_require__(/*! graphql */ \"graphql\");\n\nvar _types = __webpack_require__(/*! ./types */ \"./graphql/schema/types.js\");\n\nvar _types2 = _interopRequireDefault(_types);\n\nvar _inputs = __webpack_require__(/*! ./inputs */ \"./graphql/schema/inputs.js\");\n\nvar _inputs2 = _interopRequireDefault(_inputs);\n\nvar _queries = __webpack_require__(/*! ./queries */ \"./graphql/schema/queries.js\");\n\nvar _queries2 = _interopRequireDefault(_queries);\n\nvar _mutations = __webpack_require__(/*! ./mutations */ \"./graphql/schema/mutations.js\");\n\nvar _mutations2 = _interopRequireDefault(_mutations);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _graphql.buildSchema)('' + _types2.default + _inputs2.default + _queries2.default + _mutations2.default);\n\n//# sourceURL=webpack:///./graphql/schema/index.js?");

/***/ }),

/***/ "./graphql/schema/inputs.js":
/*!**********************************!*\
  !*** ./graphql/schema/inputs.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _settings = __webpack_require__(/*! ./settings */ \"./graphql/schema/settings.js\");\n\nvar _settings2 = _interopRequireDefault(_settings);\n\nvar _preferences = __webpack_require__(/*! ./preferences */ \"./graphql/schema/preferences.js\");\n\nvar _preferences2 = _interopRequireDefault(_preferences);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = '\\n  input AddressInput {\\n    address1: String!,\\n    address2: String,\\n    state: String!,\\n    zip: String!,\\n    country: String!,\\n    notes: String,\\n    settings: SettingsInput\\n  },\\n  input PersonInput {\\n    email: String!,\\n    firstname: String,\\n    lastname: String,\\n    phone: String,\\n    address_id: Int,\\n    food: String,\\n    notes: String,\\n    preferences: PreferencesInput,\\n    settings: SettingsInput\\n  }\\n  input EventInput {\\n    name: String!,\\n    time: String,\\n    address_id: Int,\\n    send_invitations: Boolean,\\n    auto_invite: Boolean,\\n    notes: String,\\n    settings: SettingsInput,\\n  },\\n  input AttendanceInput {\\n    person_id: String!,\\n    event_id: String!,\\n    notes: String,\\n    invitation_sent: Boolean,\\n    rsvpd: Boolean,\\n    rsvpyes: Boolean,\\n    preferences: PreferencesInput,\\n    settings: SettingsInput\\n  },\\n  input GroupoInput {\\n    parent_id: Int,\\n    name: String!,\\n    notes: String,\\n    preferences: PreferencesInput,\\n    settings: SettingsInput\\n  },\\n  input LocationInput {\\n    address_id: Int!,\\n    name: String!,\\n    notes: String,\\n    settings: SettingsInput,\\n  },\\n  input QuoteInput {\\n    text: String,\\n    author: String,\\n    settings: SettingsInput\\n  },\\n  input BlogInput {\\n    date: String!,\\n    title: String!,\\n    text: String!,\\n    settings: SettingsInput\\n  },\\n  input SongInput {\\n    artist: String!,\\n    title: String!,\\n    url: String!,\\n    notes: String,\\n    html: String,\\n    settings: SettingsInput\\n  },\\n  input ListInput {\\n    name: String!,\\n    settings: SettingsInput\\n  },\\n  input PreferencesInput {\\n    ' + _preferences2.default + '\\n  },\\n  input SettingsInput {\\n    ' + _settings2.default + '\\n  }\\n';\n\n//# sourceURL=webpack:///./graphql/schema/inputs.js?");

/***/ }),

/***/ "./graphql/schema/mutations.js":
/*!*************************************!*\
  !*** ./graphql/schema/mutations.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = \"\\n  type Mutation {\\n    createAddress(address:AddressInput): Address,\\n    createAndAssociateAddressToPerson(address:AddressInput, personId:Int): Address,\\n    updateOrChangeAddressByPersonId(address:AddressInput, personId:Int): Address,\\n    updateAddressById(id:Int, address:AddressInput): Address,\\n    associateAddressToPerson(id:Int, personId:Int): Person,\\n    deleteAddressById(id:Int): Address,\\n    createPerson(person:PersonInput): Person,\\n    updatePersonById(id:Int, person:PersonInput): Person,\\n    deletePersonById(id:Int): Person,\\n    createEvent(event:EventInput): Event,\\n    updateEventById(id:Int, event:EventInput): Event,\\n    deleteEventById(id:Int): Event,\\n    createAttendance(attendance:AttendanceInput): Attendance,\\n    updateAttendanceToEventByPersonId(id:Int, personId:Int, attendance:AttendanceInput): Attendance,\\n    createGroup(group:GroupoInput): Groupo,\\n    addToGroupByPersonId(id:Int, personId:Int): SuccessOrError,\\n    removeFromGroupByPersonId(id:Int, personId:Int): SuccessOrError,\\n    updateGroupById(id:Int, group:GroupoInput): Groupo,\\n    deleteGroupById(id:Int): Groupo,\\n    createLocation(location:LocationInput): Location,\\n    updateLocationById(id:Int, location:LocationInput): Location,\\n    deleteLocationById(id:Int): Location,\\n    createQuote(quote:QuoteInput): Quote,\\n    updateQuoteById(id:Int, quote:QuoteInput): Quote,\\n    deleteQuoteById(id:Int): Quote,\\n    addToQuoteByPersonId(id:Int, personId:Int): Quote\\n    createBlog(blog:BlogInput): Blog,\\n    updateBlogById(id:Int, blog:BlogInput): Blog,\\n    deleteBlogById(id:Int): Blog,\\n    createSong(song:SongInput): Song,\\n    updateSongById(id:Int, song:SongInput): Song,\\n    deleteSongById(id:Int): Song,\\n    createList(list:ListInput): List,\\n    updateListById(id:Int, list:ListInput): List,\\n    deleteListById(id:Int): List,\\n    addToListByPersonId(id:Int, personId:Int): List\\n  },\\n\";\n\n//# sourceURL=webpack:///./graphql/schema/mutations.js?");

/***/ }),

/***/ "./graphql/schema/preferences.js":
/*!***************************************!*\
  !*** ./graphql/schema/preferences.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// MUST enunciate preferences obj fields for preferences on any/all models\n\nexports.default = \"\\n  language: String,\\n  preference1: String,\\n  preference2: Boolean\\n\";\n\n//# sourceURL=webpack:///./graphql/schema/preferences.js?");

/***/ }),

/***/ "./graphql/schema/queries.js":
/*!***********************************!*\
  !*** ./graphql/schema/queries.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = \"\\n  type Query {\\n    hello: String,\\n    getAddressById(id:Int!): Address,\\n    getAddressByPersonId(id:Int!): Address,\\n    getPersonById(id:Int!): Person,\\n    getAllPeople: [Person],\\n    getEventByID(id:Int!): Event,\\n    getAllEvents: [Event],\\n    getAttendanceByPersonId(personId:Int!): [Attendance],\\n    getAttendanceByEventId(id:Int): [Attendance],\\n    getGroupsByPersonId(id:Int!): [Groupo],\\n    getGroupMembersByGroupId(id:Int!): [Person],\\n    getAllGroups: [Groupo],\\n    getLocationById(id:Int!): Location,\\n    getAllLocations: [Location],\\n    getQuoteById(id:Int!): Quote,\\n    getQuotesByPersonId(id:Int!): [Quote],\\n    getAllQuotes: [Quote],\\n    getQuoteMembersByQuoteId: [Person],\\n    getBlogById(id:Int!): Blog,\\n    getAllBlogs: [Blog],\\n    getSongById(id:Int!): Song,\\n    getAllSongs: [Song],\\n    getListById(id:Int!): List,\\n    getListsByPersonId(id:Int!): [List],\\n    getAllLists: [List],\\n    getListMembersByListId(id:Int!): [Person],\\n    getListMembershipByPersonId(id:Int!): [List],\\n    loadPublicData: PublicData,\\n    loadPersonDataById(id:Int!): PersonData,\\n    loadAdminData: AdminData\\n  }\\n\";\n\n//# sourceURL=webpack:///./graphql/schema/queries.js?");

/***/ }),

/***/ "./graphql/schema/settings.js":
/*!************************************!*\
  !*** ./graphql/schema/settings.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// MUST enunciate settings obj fields for settings on any/all models\n\nexports.default = \"\\n  settings1: String,\\n  settings2: Boolean\\n\";\n\n//# sourceURL=webpack:///./graphql/schema/settings.js?");

/***/ }),

/***/ "./graphql/schema/types.js":
/*!*********************************!*\
  !*** ./graphql/schema/types.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _preferences = __webpack_require__(/*! ./preferences */ \"./graphql/schema/preferences.js\");\n\nvar _preferences2 = _interopRequireDefault(_preferences);\n\nvar _settings = __webpack_require__(/*! ./settings */ \"./graphql/schema/settings.js\");\n\nvar _settings2 = _interopRequireDefault(_settings);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = '\\n  type Address {\\n    id: Int,\\n    createdat: String,\\n    address1: String!,\\n    address2: String,\\n    state: String!,\\n    zip: String!,\\n    country: String!,\\n    notes: String,\\n    settings: SettingsObject\\n  },\\n  type Person {\\n    id: Int,\\n    createdat: String,\\n    email: String!,\\n    firstname: String,\\n    lastname: String,\\n    phone: String,\\n    address_id: Int,\\n    address: [Address],\\n    food: String,\\n    notes: String,\\n    settings: SettingsObject,\\n    preferences: PreferencesObject\\n  },\\n  type Event {\\n    id: Int,\\n    createdat: String,\\n    name: String!,\\n    time: String,\\n    address_id: Int,\\n    address1: String!,\\n    address2: String,\\n    state: String!,\\n    zip: String!,\\n    country: String!,\\n    send_invitations: Boolean,\\n    auto_invite: Boolean,\\n    notes: String,\\n    preferences: PreferencesObject,\\n    settings: SettingsObject,\\n    invitation_sent: Boolean,\\n    rsvpd: Boolean,\\n    rsvpyes: Boolean,\\n    attendees: [Person]\\n  },\\n  type Attendance {\\n    id: Int,\\n    createdat: String,\\n    person_id: String!,\\n    event_id: String!,\\n    notes: String,\\n    invitation_sent: Boolean,\\n    rsvpd: Boolean,\\n    rsvpyes: Boolean,\\n    preferences: PreferencesObject,\\n    settings: SettingsObject,\\n    firstname: String,\\n    lastname: String,\\n    email: String\\n  },\\n  type Groupo {\\n    id: Int,\\n    createdat: String,\\n    parent_id: Int,\\n    name: String!,\\n    notes: String,\\n    preferences: PreferencesObject,\\n    settings: SettingsObject,\\n    members: [Person]\\n  },\\n  type Location {\\n    id: Int,\\n    createdat: String,\\n    name: String!,\\n    address_id: Int!,\\n    notes: String,\\n    settings: SettingsObject\\n  },\\n  type Quote {\\n    id: Int,\\n    createdat: String,\\n    text: String,\\n    author: String,\\n    members: [Person],\\n    settings: SettingsObject\\n  },\\n  type Blog {\\n    id: Int,\\n    createdat: String,\\n    date: String!,\\n    title: String!,\\n    text: String!,\\n    settings: SettingsObject\\n  },\\n  type Song {\\n    id: Int,\\n    createdat: String,\\n    artist: String!,\\n    title: String!,\\n    url: String!,\\n    notes: String,\\n    html: String,\\n    settings: SettingsObject\\n  },\\n  type List {\\n    id: Int,\\n    createdat: String,\\n    name: String!,\\n    members: [Person],\\n    settings: SettingsObject\\n  },\\n  type PublicData {\\n    quotes: [Quote],\\n    blogs: [Blog],\\n    songs: [Song]\\n  },\\n  type PersonData {\\n    address: Address,\\n    person: Person!,\\n    events: [Attendance],\\n    groups: [Groupo],\\n    quotes: [Quote],\\n    lists: [List]\\n  },\\n  type AdminData {\\n    people: [Person]!,\\n    events: [Event],\\n    groups: [Groupo],\\n    locations: [Location],\\n    quotes: [Quote],\\n    blogs: [Blog],\\n    songs: [Song],\\n    lists: [List]\\n  },\\n  type PreferencesObject {\\n    ' + _preferences2.default + '\\n  },\\n  type SettingsObject {\\n    ' + _settings2.default + '\\n  }\\n  type SuccessOrError {\\n    success: Boolean!,\\n    message: String\\n  }\\n';\n\n//# sourceURL=webpack:///./graphql/schema/types.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _router = __webpack_require__(/*! ./server/router */ \"./server/router/index.js\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\nvar _process$env$PORT = process.env.PORT,\n    PORT = _process$env$PORT === undefined ? 8080 : _process$env$PORT;\n\nvar app = (0, _express2.default)();\napp.use((0, _compression2.default)());\napp.use((0, _morgan2.default)('dev'));\napp.use(_router2.default);\napp.listen(PORT, function () {\n  return console.log('Listening on port ' + PORT + '!');\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./server/middleware/admin.js":
/*!************************************!*\
  !*** ./server/middleware/admin.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _db = __webpack_require__(/*! ../../db */ \"./db/index.js\");\n\nexports.default = function (req, res, next) {\n  next();\n};\n\n//# sourceURL=webpack:///./server/middleware/admin.js?");

/***/ }),

/***/ "./server/middleware/index.js":
/*!************************************!*\
  !*** ./server/middleware/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.graphqlMW = exports.adminMW = exports.privateMW = exports.publicMW = undefined;\n\nvar _whoami = __webpack_require__(/*! ./whoami */ \"./server/middleware/whoami.js\");\n\nvar _whoami2 = _interopRequireDefault(_whoami);\n\nvar _public = __webpack_require__(/*! ./public */ \"./server/middleware/public.js\");\n\nvar _public2 = _interopRequireDefault(_public);\n\nvar _person = __webpack_require__(/*! ./person */ \"./server/middleware/person.js\");\n\nvar _person2 = _interopRequireDefault(_person);\n\nvar _admin = __webpack_require__(/*! ./admin */ \"./server/middleware/admin.js\");\n\nvar _admin2 = _interopRequireDefault(_admin);\n\nvar _locks = __webpack_require__(/*! ./locks */ \"./server/middleware/locks.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar publicMW = exports.publicMW = [_whoami2.default, _locks.anyoneOk];\nvar privateMW = exports.privateMW = [_whoami2.default, _locks.noRandos, _public2.default, _person2.default];\nvar adminMW = exports.adminMW = [_whoami2.default, _locks.adminOnly, _admin2.default];\nvar graphqlMW = exports.graphqlMW = [_whoami2.default];\n\n//# sourceURL=webpack:///./server/middleware/index.js?");

/***/ }),

/***/ "./server/middleware/locks.js":
/*!************************************!*\
  !*** ./server/middleware/locks.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// lock router endpoins\n\nvar anyoneOk = exports.anyoneOk = function anyoneOk(obj, args, context, info) {\n  console.log('anyone lock');\n  return true;\n};\n\nvar noRandos = exports.noRandos = function noRandos(req, res, next) {\n  // if (req.person.role === 'person') {\n  next();\n  // }\n};\n\nvar adminOnly = exports.adminOnly = function adminOnly(req, res, next) {\n  // if (req.person.user.role === 'person') {\n  next();\n  // } else {\n  // res.redirect(...)\n  // }\n};\n\n//# sourceURL=webpack:///./server/middleware/locks.js?");

/***/ }),

/***/ "./server/middleware/person.js":
/*!*************************************!*\
  !*** ./server/middleware/person.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _db = __webpack_require__(/*! ../../db/ */ \"./db/index.js\");\n\nexports.default = function (req, res, next) {\n  next();\n};\n\n//# sourceURL=webpack:///./server/middleware/person.js?");

/***/ }),

/***/ "./server/middleware/public.js":
/*!*************************************!*\
  !*** ./server/middleware/public.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _db = __webpack_require__(/*! ../../db/ */ \"./db/index.js\");\n\nexports.default = function (req, res, next) {\n  next();\n};\n\n//# sourceURL=webpack:///./server/middleware/public.js?");

/***/ }),

/***/ "./server/middleware/whoami.js":
/*!*************************************!*\
  !*** ./server/middleware/whoami.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _db = __webpack_require__(/*! ../../db/ */ \"./db/index.js\");\n\nexports.default = function (req, res, next) {\n  console.log('whoami!!!!!!!!!!!!!!');\n  req.person = 'thisisfromwhoamitesting';\n  next();\n};\n\n//# sourceURL=webpack:///./server/middleware/whoami.js?");

/***/ }),

/***/ "./server/router/index.js":
/*!********************************!*\
  !*** ./server/router/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _graphql = __webpack_require__(/*! ../../graphql */ \"./graphql/index.js\");\n\nvar _graphql2 = _interopRequireDefault(_graphql);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _middleware = __webpack_require__(/*! ../middleware */ \"./server/middleware/index.js\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Public = __webpack_require__(/*! ../../client/pages/Public */ \"./client/pages/Public.js\");\n\nvar _Public2 = _interopRequireDefault(_Public);\n\nvar _Private = __webpack_require__(/*! ../../client/pages/Private */ \"./client/pages/Private.js\");\n\nvar _Private2 = _interopRequireDefault(_Private);\n\nvar _Admin = __webpack_require__(/*! ../../client/pages/Admin */ \"./client/pages/Admin.js\");\n\nvar _Admin2 = _interopRequireDefault(_Admin);\n\nvar _html = __webpack_require__(/*! ../../client/html */ \"./client/html/index.js\");\n\nvar _html2 = _interopRequireDefault(_html);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n// import models, { sequelize } from '../db/models';\n\n\nvar router = _express2.default.Router();\nvar fakeData = { name: 'JOE' };\nvar data = fakeData;\n\nrouter.get.apply(router, ['/'].concat(_toConsumableArray(_middleware.publicMW), [function (req, res) {\n  console.log('req: ', req);\n  var componentHTML = _server2.default.renderToString(_react2.default.createElement(_Public2.default, { name: data.name }));\n  var html = (0, _html2.default)(componentHTML, data);\n  res.send(html);\n}]));\n\nrouter.get.apply(router, ['/private'].concat(_toConsumableArray(_middleware.privateMW), [function (req, res) {\n  var context = {};\n  var componentHTML = _server2.default.renderToString(_react2.default.createElement(\n    _reactRouterDom.StaticRouter,\n    { location: req.url, context: context },\n    _react2.default.createElement(_Private2.default, null)\n  ));\n  var html = (0, _html2.default)(componentHTML, data);\n  res.send(html);\n}]));\n\nrouter.get.apply(router, ['/admin'].concat(_toConsumableArray(_middleware.adminMW), [function (req, res) {\n  var context = {};\n  var componentHTML = _server2.default.renderToString(_react2.default.createElement(\n    _reactRouterDom.StaticRouter,\n    { location: req.url, context: context },\n    _react2.default.createElement(_Admin2.default, null)\n  ));\n  var html = (0, _html2.default)(componentHTML, data);\n  res.send(html);\n}]));\n\nrouter.use.apply(router, ['/graphql'].concat(_toConsumableArray(_middleware.graphqlMW), [_graphql2.default]));\nrouter.use('/public', _express2.default.static(_path2.default.resolve(__dirname, 'public')));\nrouter.get('*', function (req, res) {\n  res.status(404).send('<body style=\"background-color: #3c3c3c;\"><h1>404 - Not Found</h1></body>');\n});\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/router/index.js?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-graphql\");\n\n//# sourceURL=webpack:///external_%22express-graphql%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });