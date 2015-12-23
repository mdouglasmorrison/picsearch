(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Home = require('../Pages/Home/Home');

var _Home2 = _interopRequireDefault(_Home);

var _About = require('../Pages/About/About');

var _About2 = _interopRequireDefault(_About);

var _Contact = require('../Pages/Contact/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'appContainer' },
                _react2.default.createElement(_Header2.default, null),
                this.props.children
            );
        }
    }]);

    return App;
})(_react2.default.Component);

exports.default = App;

},{"../Header/Header":2,"../Pages/About/About":3,"../Pages/Contact/Contact":4,"../Pages/Home/Home":5,"react":"react"}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'nav',
                    { className: 'navbar navbar-default navbar-fixed-top' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'navbar-header' },
                            _react2.default.createElement(
                                'a',
                                { className: 'navbar-brand', href: '/' },
                                _react2.default.createElement('img', { src: '/img/logo.png', alt: '' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { id: 'navbar', className: 'pull-right' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'nav nav-pills' },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'nav-item' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/about', className: 'nav-link' },
                                        'About'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'nav-item' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/contact', className: 'nav-link' },
                                        'Contact'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
})(_react2.default.Component);

exports.default = Header;

},{"react":"react","react-router":"react-router"}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = (function (_React$Component) {
    _inherits(About, _React$Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(About).apply(this, arguments));
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'about' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Matt Morrison'
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Technical Skills'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Front End:​'
                        ),
                        ' JavaScript, CSS 3, HTML 5'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Frameworks/Libraries:'
                        ),
                        ' ​AngularJS, lodash, jQuery, PhantomJS, CasperJS, LESS, Bootstrap, Google Maps'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Unit Testing:'
                        ),
                        ' ​Jasmine, Protractor'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Design:'
                        ),
                        ' ​Photoshop, OmniGraffle, Balsamiq'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Development Environments:'
                        ),
                        ' ​Sublime Text 3, Coda, Visual Studio, WebStorm, IntelliJ'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Version Control:'
                        ),
                        ' ​Git, GitHub, SVN, Team Foundation Server, Stash'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Automation/Dependency Management:'
                        ),
                        '​ NPM, Gulp, Grunt, Yeoman, Bower'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'strong',
                            null,
                            'I\'ve also dabbled in:'
                        )
                    ),
                    _react2.default.createElement(
                        'h6',
                        null,
                        'Node.js, Parse/Firebase, PHP, SQL/MySQL, PhoneGap'
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Experience and Education'
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Backbase​ - Technical Consultant Front End ­ 12/14 to present – Atlanta, GA'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'b',
                            null,
                            'Projects and Responsibilities:'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Internal Product Development ​­ JS, AngularJS, LESS, CSS, HTML, Bootstrap, XML'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Developed and implemented widgets for use in multiple applications across multiple clients, using Angular and LESS.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Because of the wide application of uses, widgets had to conform to requirements for fault tolerance, security, accessibility, device compatibility, as well as be documented for use by other developers across the company.'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Keybank ​­ JS, LESS, CSS, HTML, Bootstrap, XML'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Developed and implemented custom widgets and containers.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Consulted on site at the Keybank headquarters, in order to ensure successful delivery of the product.'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Recall Portal​­ JS, AngularJS, LESS, CSS, HTML, Bootstrap, JSP, XML'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Developed and implemented custom widgets and containers, including dynamic styling containers, dynamic opt in/opt out widgets and WYSIWYG widgets.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Refactored existing Angular widgets to conform to Angular best practices.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Refactored widgets that use the pub­sub pattern so that they separate concerns more elegantly.'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'ADP​ - UI Developer - 8/14 to 11/14 - Alpharetta, GA'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'b',
                            null,
                            'Projects and Responsibilities:'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        '​Project Redbox​­ AngularJS, JS, LESS, CSS, HTML, Bootstrap, Jasmine, Protractor, Grunt, Bower'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Interpreted requirements from the product team and designs from the UX team in order to build and style new features using AngularJS and LESS'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Adapted the Bootstrap Tour jQuery plugin into a corresponding Angular Service and Directive.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Debugged the code of other team members during hardening.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Wrote unit tests in Jasmine for all new code, as well as for bug fixes.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Wrote automated tests in Protractor for new code and bug fixes.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Named scrum team CSS leader.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Contributed to release and sprint planning.'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Cardlytics​​ - UI Engineer - 6/13 to 7/14 - Atlanta, GA'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'b',
                            null,
                            'Projects and Responsibilities:'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Bank UI Integration ​­ HTML, CSS, JS, jQuery, Bootstrap, SQL, IIS, TFS, Photoshop'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used both vanilla JS and jQuery to inject secure, personalized offer content built with HTML and CSS(including Bootstrap) into a customer’s online banking portal, giving the customer cash back rewards based on their purchase behavior.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Manipulated offer details and behavior using SQL queries in SQL Management Studio.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Designed the UI components to be injected on the bank page.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Configured each project in IIS and practiced version control with TFS.'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Next Generation App Suite ​­ HTML, LESS, JS, AngularJS, Bootstrap, IIS, TFS, OmniGraffle, Photoshop'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Contributed significantly to the adoption of AngularJS as the next­gen JavaScript framework by creating an AngularJS demo that was compared to a Knockout/Require/jQuery demo to determine which framework was most suited to team needs.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Gathered business requirements and used those requirements to develop OmniGraffle wireframes for the application suite.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used Photoshop to design a next gen application that allowed an internal team to associate bank transactions with their parent company.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Developed applications alongside senior level software engineers using AngularJS.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used LESS and Bootstrap to style the application.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Demonstrated the functionality of the applications to company stakeholders, including the CIO and several VPs.'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Merchant Demo Application ​­ HTML, CSS, JS, jQuery, TFS'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Area Owner'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used the above technologies to maintain and enhance the company external sales tool, a tool that uses replicas of partner online banking portals to demonstrate core offer presentation product to merchants and advertisers.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Created replica UI’s for all new partner banks as part of their onboarding process.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Updated the application to allow sales staff to customize transactions and their associated offers within the banking portals.'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Beacons Heat Map Project ​­ HTML, CSS, JS, jQuery, Google Maps API'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used AJAX to obtain an array of recent offer activations.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used the Google Maps API to create a heatmap that plotted the location and density of offer activations worldwide.'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Bank Scraping Project ​­ Node.js, PhantomJS, CasperJS, PHP, MySQL'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Created an application that, given a users login credentials, automatically accesses the users online banking portal, grabs the users transactions, and saves those transactions to a database.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Created an Express.js application that takes in user credentials as input.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used node.js to save user credentials to a mySQL database and spawn a PhantomJS/CasperJS process that consumed the user credentials, navigated to the user transaction page, copied the transaction table, and posted it to that same mySQL database.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Project was a direct request from the CIO.'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Phonegap Mobile Prototype ​­ HTML, CSS, JS, jQuery, Google Maps API, Phonegap IDE'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Created a mobile application prototype using Phonegap and Google Maps that plots the offers available to a user on a map, based on their current location and how far they are willing to go to obtain an offer.'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Institute for Advanced Advertising Studies - Atlanta 4A’s­ 2/13 to 5/13 - Atlanta, GA'
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Sharpdot Inc ​– Javascript Developer ­ 1/13 to 6/13 – Atlanta, GA'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'b',
                            null,
                            'Projects and Responsibilities:'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'My Strategic Plan'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used JavaScript to debug custom data table filtering tools.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used JavaScript to create an activity log that tracked all strategic plan changes.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Built custom survey forms using HTML/CSS/JavaScript and AJAX.'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'What To Expect Foundation'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Built and implemented custom homepage sliders using HTML, CSS and jQuery.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Implemented jQuery storybook plugin and edited to make ie7 compatible.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Styled Drupal nodes and modules with CSS.'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Playback Now'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Created custom header/login bar using HTML/CSS/jQuery.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used JavaScript to manipulate the HTML5 video element.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Prototyped online storefront WebApp using HTML5, CSS3, JS in the Titanium Studio development environment.'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'The Creative Circus​ - Interactive Development Student - 1/12 to 1/13 - Atlanta, GA'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        _react2.default.createElement(
                            'b',
                            null,
                            'Notable Projects:'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Sweetwater Brewery Interactive Tour'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Created an interactive experience for the SweetWater Brewery using HTML5, CSS3, JavaScript, the HTML5 canvas element and the jQuery and KineticJS frameworks.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used JQuery and KineticJS to create scrollable and navigable panoramas of the brewery interior.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Wireframed the site in OmniGraffle using UX best practices.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Designed and comped the site in Photoshop.'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'SportsData/Google Maps/Yelp API Mashup'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Made AJAX calls to the SportsData/Google Maps/Yelp APIs to create an interactive visitors guide to the 2012 college bowl games.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Parsed JSON and XML and appended results to the DOM.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used HTML5 and CSS3 to build and style the site.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Designed and comped the site in Photoshop.'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Instagram/Google Maps API Mashup'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Made AJAX calls to the Instagram and Google Maps APIs to plot the location of Instagram pictures on a Google Map.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Parsed JSON and appended results to the DOM.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Authenticated AJAX calls using OAuth2.'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Responsive Online Magazine Theme'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used HTML5 and CSS3 to build a responsive magazine theme.'
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Twitter Search WebApp'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Made AJAX calls to the Twitter API in order to append search result to the DOM'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'The Morrison Agency​ - Project Associate - 9/11­12/11 - Atlanta, GA'
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'The University of Georgia​, ​Terry College of Business'
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Bachelor of Business Administration in Banking and Finance (May 2010)'
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Additional Experience'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Used HTML and CSS to build and maintain the website for my college rock band. (2007­2009)'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Taught myself HTML in order to build and maintain a sports blog during high school. (2004­2006)'
                        )
                    )
                )
            );
        }
    }]);

    return About;
})(_react2.default.Component);

exports.default = About;

},{"react":"react","react-router":"react-router"}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = (function (_React$Component) {
    _inherits(Contact, _React$Component);

    function Contact() {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Contact).apply(this, arguments));
    }

    _createClass(Contact, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'contact' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Contact Matt'
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Phone:'
                        ),
                        ' (404)444-6202'
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Email:'
                        ),
                        ' mdouglasmorrison@gmail.com'
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: 'https://github.com/mdouglasmorrison', target: '_blank' },
                            'GitHub'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: 'https://www.linkedin.com/in/mattlanta', target: '_blank' },
                            'LinkedIn'
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: 'https://twitter.com/MD_Morrison', target: '_blank' },
                            'Twitter'
                        )
                    )
                )
            );
        }
    }]);

    return Contact;
})(_react2.default.Component);

exports.default = Contact;

},{"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Search = require('../../Search/Search');

var _Search2 = _interopRequireDefault(_Search);

var _Results = require('../../Results/Results');

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

        _this.state = {
            pictureURL: '/img/default.png'
        };
        _this.getNewImage = _this.getNewImage.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: 'getNewImage',
        value: function getNewImage(data, err) {
            this.refs.setNew.setNewImage(data, err);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'Home' },
                _react2.default.createElement(_Search2.default, { getNewImage: this.getNewImage }),
                _react2.default.createElement(_Results2.default, { src: this.state.pictureURL, ref: 'setNew' })
            );
        }
    }]);

    return Home;
})(_react2.default.Component);

exports.default = Home;

},{"../../Results/Results":6,"../../Search/Search":7,"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = (function (_React$Component) {
    _inherits(Results, _React$Component);

    function Results(props) {
        _classCallCheck(this, Results);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Results).call(this, props));

        _this.state = {
            src: _this.props.src,
            hasImage: false,
            serverError: false
        };
        _this.setNewImage = _this.setNewImage.bind(_this);
        return _this;
    }

    _createClass(Results, [{
        key: 'setNewImage',
        value: function setNewImage(url, err) {
            if (err) {
                this.setState({ serverError: err });
            } else {
                this.setState({ serverError: false });
            }

            this.setState({ hasImage: true });
            this.setState({ src: url });
        }
    }, {
        key: 'render',
        value: function render() {
            var resultClasses = (0, _classnames2.default)({
                'results': true,
                'hasImage': this.state.hasImage,
                'noImage': this.state.hasImage === false
            }),
                errorClass = (0, _classnames2.default)({
                'error': this.state.serverError !== false
            }),
                text = this.state.serverError ? this.state.serverError.responseText : 'Here\'s The Closest Match:';

            return _react2.default.createElement(
                'div',
                { className: resultClasses },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'h1',
                        { className: errorClass },
                        text
                    ),
                    _react2.default.createElement('img', { src: this.state.src, alt: '' })
                )
            );
        }
    }]);

    return Results;
})(_react2.default.Component);

exports.default = Results;

},{"classnames":10,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = (function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));

        _this.state = {
            isValid: true,
            isClean: true,
            showSpinner: false
        };
        _this.validateOnChange = _underscore2.default.debounce(_this.validateOnChange, 750).bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.validateEmail = _this.validateEmail.bind(_this);
        return _this;
    }

    _createClass(Search, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var _this2 = this;

            var self = this;
            event.preventDefault();

            if (this.validateEmail(event.target[0].value)) {
                $.ajax({
                    url: '/api/search?email=' + event.target[0].value,
                    beforeSend: function beforeSend() {
                        self.setState({ showSpinner: true });
                    }
                }).done(function (data) {
                    _this2.setState({ isClean: false });
                    _this2.props.getNewImage(data, false);
                    _this2.setState({ showSpinner: false });
                }).fail(function (response, message) {
                    if (response.status === 404) {
                        _this2.props.getNewImage('/img/default.png', response);
                    } else {
                        _this2.props.getNewImage('/img/obi.gif', response);
                    }
                    _this2.setState({ isClean: false });
                    _this2.setState({ showSpinner: false });
                });
            } else {
                this.setState({ isValid: false });
            }
        }
    }, {
        key: 'validateOnChange',
        value: function validateOnChange(event) {
            this.setState({ isValid: event.target.value ? this.validateEmail(event.target.value) : true });
        }
    }, {
        key: 'validateEmail',
        value: function validateEmail(input) {
            var re;
            re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/i;

            return re.test(input);
        }
    }, {
        key: 'render',
        value: function render() {
            var inputClasses = (0, _classnames2.default)({
                'input-group': true,
                'valid': this.state.isValid,
                'invalid': this.state.isValid === false
            }),
                formClasses = (0, _classnames2.default)({
                'search': true,
                'clean': this.state.isClean,
                'dirty': this.state.isClean === false
            }),
                spinnerClasses = (0, _classnames2.default)({
                'spinner': true,
                'show': this.state.showSpinner,
                'hide': this.state.showSpinner === false
            });

            return _react2.default.createElement(
                'div',
                { className: formClasses },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'form',
                        { ref: 'searchForm', onSubmit: this.handleSubmit.bind(this) },
                        _react2.default.createElement(
                            'div',
                            { className: inputClasses },
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Enter Email!', onChange: this.validateOnChange.bind(this) }),
                            _react2.default.createElement(
                                'span',
                                { className: 'input-group-btn' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-default', type: 'submit' },
                                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' }),
                                    'Search'
                                )
                            )
                        ),
                        this.state.isValid ? null : _react2.default.createElement(
                            'span',
                            { className: 'invalid-text' },
                            'Invalid Email Address'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: spinnerClasses },
                    _react2.default.createElement('img', { src: '/img/yak-head.svg', alt: '' })
                )
            );
        }
    }]);

    return Search;
})(_react2.default.Component);

exports.default = Search;

},{"classnames":10,"react":"react","react-router":"react-router","underscore":"underscore"}],8:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":9,"history/lib/createBrowserHistory":19,"react":"react","react-dom":"react-dom","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Pages/Home/Home');

var _Home2 = _interopRequireDefault(_Home);

var _About = require('./components/Pages/About/About');

var _About2 = _interopRequireDefault(_About);

var _Contact = require('./components/Pages/Contact/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { component: _App2.default },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _Contact2.default })
);

},{"./components/App/App":1,"./components/Pages/About/About":3,"./components/Pages/Contact/Contact":4,"./components/Pages/Home/Home":5,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes += ' ' + arg;
			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],11:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":12,"./lib/keys.js":13}],12:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],13:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],14:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],16:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))
},{"_process":28,"warning":29}],17:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],18:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],19:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    return history.createLocation(path, state, undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./Actions":14,"./DOMStateStorage":16,"./DOMUtils":17,"./ExecutionEnvironment":18,"./createDOMHistory":20,"_process":28,"invariant":27}],20:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./DOMUtils":17,"./ExecutionEnvironment":18,"./createHistory":21,"_process":28,"invariant":27}],21:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, null, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, null, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(path, state, action) {
    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];

    return _createLocation3['default'](path, state, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":14,"./AsyncUtils":15,"./createLocation":22,"./deprecate":23,"./parsePath":25,"./runTransitionHook":26,"deep-equal":11}],22:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';

  // TODO: Deprecate passing state directly into createLocation.
  state = location.state || state;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":14,"./parsePath":25}],23:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":28,"warning":29}],24:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],25:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./extractPath":24,"_process":28,"warning":29}],26:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":28,"warning":29}],27:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))
},{"_process":28}],28:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],29:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))
},{"_process":28}]},{},[8]);
