import React from 'react';
import {Link} from 'react-router';


class About extends React.Component {
    render() {
        return (
            <div className='about'>
                <div className="container">
                    <h1>Matt Morrison</h1>
                    <h2>Technical Skills</h2>
                    <h4><strong>Front End:​</strong> JavaScript, CSS 3, HTML 5</h4>
                    <h4><strong>Frameworks/Libraries:</strong> ​AngularJS, lodash, jQuery, PhantomJS, CasperJS, LESS, Bootstrap, Google Maps</h4>
                    <h4><strong>Unit Testing:</strong> ​Jasmine, Protractor</h4>
                    <h4><strong>Design:</strong> ​Photoshop, OmniGraffle, Balsamiq</h4>
                    <h4><strong>Development Environments:</strong> ​Sublime Text 3, Coda, Visual Studio, WebStorm, IntelliJ</h4>
                    <h4><strong>Version Control:</strong> ​Git, GitHub, SVN, Team Foundation Server, Stash</h4>
                    <h4><strong>Automation/Dependency Management:</strong>​ NPM, Gulp, Grunt, Yeoman, Bower</h4>
                    <h4><strong>I've also dabbled in:</strong></h4>
                    <h6>Node.js, Parse/Firebase, PHP, SQL/MySQL, PhoneGap</h6>

                    <h2>Experience and Education</h2>
                    <h3>Backbase​ - Technical Consultant Front End ­ 12/14 to present – Atlanta, GA</h3>
                    <h4><b>Projects and Responsibilities:</b></h4>
                    <h5>Internal Product Development ​­ JS, AngularJS, LESS, CSS, HTML, Bootstrap, XML</h5>
                    <ul>
                        <li>Developed and implemented widgets for use in multiple applications across multiple clients, using Angular and LESS.</li>
                        <li>Because of the wide application of uses, widgets had to conform to requirements for fault tolerance, security, accessibility, device compatibility, as well as be documented for use by other developers across the company.</li>
                    </ul>
                    <h5>Keybank ​­ JS, LESS, CSS, HTML, Bootstrap, XML</h5>
                    <ul>
                        <li>Developed and implemented custom widgets and containers.</li>
                        <li>Consulted on site at the Keybank headquarters, in order to ensure successful delivery of the product.</li>
                    </ul>
                    <h5>Recall Portal​­ JS, AngularJS, LESS, CSS, HTML, Bootstrap, JSP, XML</h5>
                    <ul>
                        <li>Developed and implemented custom widgets and containers, including dynamic styling containers, dynamic opt in/opt out widgets and WYSIWYG widgets.</li>
                        <li>Refactored existing Angular widgets to conform to Angular best practices.</li>
                        <li>Refactored widgets that use the pub­sub pattern so that they separate concerns more elegantly.</li>
                    </ul>

                    <h3>ADP​ - UI Developer - 8/14 to 11/14 - Alpharetta, GA</h3>
                    <h4><b>Projects and Responsibilities:</b></h4>
                    <h5>​Project Redbox​­ AngularJS, JS, LESS, CSS, HTML, Bootstrap, Jasmine, Protractor, Grunt, Bower</h5>
                    <ul>
                        <li>Interpreted requirements from the product team and designs from the UX team in order to build and style new features using AngularJS and LESS</li>
                        <li>Adapted the Bootstrap Tour jQuery plugin into a corresponding Angular Service and Directive.</li>
                        <li>Debugged the code of other team members during hardening.</li>
                        <li>Wrote unit tests in Jasmine for all new code, as well as for bug fixes.</li>
                        <li>Wrote automated tests in Protractor for new code and bug fixes.</li>
                        <li>Named scrum team CSS leader.</li>
                        <li>Contributed to release and sprint planning.</li>
                    </ul>

                    <h3>Cardlytics​​ - UI Engineer - 6/13 to 7/14 - Atlanta, GA</h3>
                    <h4><b>Projects and Responsibilities:</b></h4>
                    <h5>Bank UI Integration ​­ HTML, CSS, JS, jQuery, Bootstrap, SQL, IIS, TFS, Photoshop</h5>
                    <ul>
                        <li>Used both vanilla JS and jQuery to inject secure, personalized offer content built with HTML and CSS(including Bootstrap) into a customer’s online banking portal, giving the customer cash back rewards based on their purchase behavior.</li>
                        <li>Manipulated offer details and behavior using SQL queries in SQL Management Studio.</li>
                        <li>Designed the UI components to be injected on the bank page.</li>
                        <li>Configured each project in IIS and practiced version control with TFS.</li>
                    </ul>
                    <h5>Next Generation App Suite ​­ HTML, LESS, JS, AngularJS, Bootstrap, IIS, TFS, OmniGraffle, Photoshop</h5>
                    <ul>
                        <li>Contributed significantly to the adoption of AngularJS as the next­gen JavaScript framework by creating an AngularJS demo that was compared to a Knockout/Require/jQuery demo to determine which framework was most suited to team needs.</li>
                        <li>Gathered business requirements and used those requirements to develop OmniGraffle wireframes for the application suite.</li>
                        <li>Used Photoshop to design a next gen application that allowed an internal team to associate bank transactions with their parent company.</li>
                        <li>Developed applications alongside senior level software engineers using AngularJS.</li>
                        <li>Used LESS and Bootstrap to style the application.</li>
                        <li>Demonstrated the functionality of the applications to company stakeholders, including the CIO and several VPs.</li>
                    </ul>
                    <h5>Merchant Demo Application ​­ HTML, CSS, JS, jQuery, TFS</h5>
                    <ul>
                        <li>Area Owner</li>
                        <li>Used the above technologies to maintain and enhance the company external sales tool, a tool that uses replicas of partner online banking portals to demonstrate core offer presentation product to merchants and advertisers.</li>
                        <li>Created replica UI’s for all new partner banks as part of their onboarding process.</li>
                        <li>Updated the application to allow sales staff to customize transactions and their associated offers within the banking portals.</li>
                    </ul>
                    <h5>Beacons Heat Map Project ​­ HTML, CSS, JS, jQuery, Google Maps API</h5>
                    <ul>
                        <li>Used AJAX to obtain an array of recent offer activations.</li>
                        <li>Used the Google Maps API to create a heatmap that plotted the location and density of offer activations worldwide.</li>
                    </ul>
                    <h5>Bank Scraping Project ​­ Node.js, PhantomJS, CasperJS, PHP, MySQL</h5>
                    <ul>
                        <li>Created an application that, given a users login credentials, automatically accesses the users online banking portal, grabs the users transactions, and saves those transactions to a database.</li>
                        <li>Created an Express.js application that takes in user credentials as input.</li>
                        <li>Used node.js to save user credentials to a mySQL database and spawn a PhantomJS/CasperJS process that consumed the user credentials, navigated to the user transaction page, copied the transaction table, and posted it to that same mySQL database.</li>
                        <li>Project was a direct request from the CIO.</li>
                    </ul>
                    <h5>Phonegap Mobile Prototype ​­ HTML, CSS, JS, jQuery, Google Maps API, Phonegap IDE</h5>
                    <ul>
                        <li>Created a mobile application prototype using Phonegap and Google Maps that plots the offers available to a user on a map, based on their current location and how far they are willing to go to obtain an offer.</li>
                    </ul>

                    <h3>Institute for Advanced Advertising Studies - Atlanta 4A’s­ 2/13 to 5/13 - Atlanta, GA</h3>

                    <h3>Sharpdot Inc ​– Javascript Developer ­ 1/13 to 6/13 – Atlanta, GA</h3>
                    <h4><b>Projects and Responsibilities:</b></h4>
                    <h5>My Strategic Plan</h5>
                    <ul>
                        <li>Used JavaScript to debug custom data table filtering tools.</li>
                        <li>Used JavaScript to create an activity log that tracked all strategic plan changes.</li>
                        <li>Built custom survey forms using HTML/CSS/JavaScript and AJAX.</li>
                    </ul>
                    <h3>What To Expect Foundation</h3>
                    <ul>
                        <li>Built and implemented custom homepage sliders using HTML, CSS and jQuery.</li>
                        <li>Implemented jQuery storybook plugin and edited to make ie7 compatible.</li>
                        <li>Styled Drupal nodes and modules with CSS.</li>
                    </ul>
                    <h3>Playback Now</h3>
                    <ul>
                        <li>Created custom header/login bar using HTML/CSS/jQuery.</li>
                        <li>Used JavaScript to manipulate the HTML5 video element.</li>
                        <li>Prototyped online storefront WebApp using HTML5, CSS3, JS in the Titanium Studio development environment.</li>
                    </ul>

                    <h3>The Creative Circus​ - Interactive Development Student - 1/12 to 1/13 - Atlanta, GA</h3>
                    <h4><b>Notable Projects:</b></h4>
                    <h5>Sweetwater Brewery Interactive Tour</h5>
                    <ul>
                        <li>Created an interactive experience for the SweetWater Brewery using HTML5, CSS3, JavaScript, the HTML5 canvas element and the jQuery and KineticJS frameworks.</li>
                        <li>Used JQuery and KineticJS to create scrollable and navigable panoramas of the brewery interior.</li>
                        <li>Wireframed the site in OmniGraffle using UX best practices.</li>
                        <li>Designed and comped the site in Photoshop.</li>
                    </ul>
                    <h5>SportsData/Google Maps/Yelp API Mashup</h5>
                    <ul>
                        <li>Made AJAX calls to the SportsData/Google Maps/Yelp APIs to create an interactive visitors guide to the 2012 college bowl games.</li>
                        <li>Parsed JSON and XML and appended results to the DOM.</li>
                        <li>Used HTML5 and CSS3 to build and style the site.</li>
                        <li>Designed and comped the site in Photoshop.</li>
                    </ul>
                    <h5>Instagram/Google Maps API Mashup</h5>
                    <ul>
                        <li>Made AJAX calls to the Instagram and Google Maps APIs to plot the location of Instagram pictures on a Google Map.</li>
                        <li>Parsed JSON and appended results to the DOM.</li>
                        <li>Authenticated AJAX calls using OAuth2.</li>
                    </ul>
                    <h5>Responsive Online Magazine Theme</h5>
                    <ul>
                        <li>Used HTML5 and CSS3 to build a responsive magazine theme.</li>
                    </ul>
                    <h5>Twitter Search WebApp</h5>
                    <ul>
                        <li>Made AJAX calls to the Twitter API in order to append search result to the DOM</li>
                    </ul>

                    <h3>The Morrison Agency​ - Project Associate - 9/11­12/11 - Atlanta, GA</h3>

                    <h3>The University of Georgia​, ​Terry College of Business</h3>
                    <h5>Bachelor of Business Administration in Banking and Finance (May 2010)</h5>

                    <h3>Additional Experience</h3>
                    <ul>
                        <li>Used HTML and CSS to build and maintain the website for my college rock band. (2007­2009)</li>
                        <li>Taught myself HTML in order to build and maintain a sports blog during high school. (2004­2006)</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;