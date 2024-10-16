import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import logo from './assets/parasmelogo.jpg';
import fogo from './assets/paras.jpg';
import ser from './assets/server.jpg';
import data from './assets/database.jpg';
import midd from './assets/middlewear.jpg';
import int from './assets/integra.jpg';
import agen from './assets/agent.jpg';
import auto from './assets/autofix.jpg';
import lear from './assets/learn.jpg';
import ons from './assets/onsite.jpg';
import platf from './assets/platform.jpg';
import repo from './assets/report.jpg';



function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Parasme</h1>
          <p className="hero-subtitle">Database Enterprise Manager</p>
          <p className="hero-description">
            We offer software product automating IT infrastructure administration procedures.
            Our solution reduces manual intervention in complex repeatable processes with reliable and predictable deliveries,
            consistently meeting the evolving demands of modern businesses.
          </p>
          <Link to="/book-demo" className="hero-button">Book A Demo</Link>
        </div>
        <div className="hero-image">
          <img src={fogo} alt="Parasme Illustration" />
        </div>
      </div>

      
       <div className="what-we-do-section">
       <div className="left-section">
        <h2>What we do?</h2>
        <p>
          Automate any administration procedure, no matter how complex.
          Our software is platform-independent with in-built functionality to fix known issues during execution,
          ensuring quality deliveries consistently.
        </p>
        <Link to="/contact" className="contact-link">Get in touch with us </Link>
        </div>

        {/* Service Boxes */}
        <div className="services">
          <div className="service-box database">
            <div className="icon">
            <img src={data}  alt="Database" />
            </div>
            <h3>Database</h3>
            <p>Repetitive operations of provisioning, availability, & security compliance.</p>
          </div>

          <div className="service-box middleware">
            <div className="icon">
            <img src={midd}  alt="Middleware" />
            </div>
            <h3>Middleware</h3>
            <p>Provisioning, patching, user account management, security compliance & auditing.</p>
          </div>

          <div className="service-box server">
            <div className="icon">
            <img src={ser}  alt="Server" />
            </div>
            <h3>Server</h3>
            <p>
              Backup & Restore, Patching, Provisioning, Log management & Analysis, User Account management, Security Compliance & Auditing.
            </p>
          </div>
        </div>
      </div>
    
    
<div className="why-parasme-section">
  <h2>Why Parasme?</h2>
  <p className="why-parasme-subtitle">Automation for Reliable, Time and Cost </p>
  <p className="why-parasme-subtitle-emphasis">effective IT administration</p>


  <div className="features-grid">
    <div className="feature-box">
      <div className="feature-icon">
        <img src={platf} alt="Platform Independent" />
      </div>
      <h3>Platform Independent</h3>
      <p>Our product is compatible with major platforms i.e Linux, AIX, Solaris & Windows.</p>
    </div>

    <div className="feature-box">
      <div className="feature-icon">
        <img src={auto} alt="Auto Fixing" />
      </div>
      <h3>Auto Fixing</h3>
      <p>Software contains the functionality to fix all the known issues automatically during the execution of the operation.</p>
    </div>

    <div className="feature-box">
      <div className="feature-icon">
        <img src={repo} alt="Reporting" />
      </div>
      <h3>Reporting</h3>
      <p>Dashboard provides the report of the execution at every stage of the operation.</p>
    </div>
  </div>


  <div className="features-grid">
    <div className="feature-box">
      <div className="feature-icon">
        <img src={agen} alt="Agentless architecture" />
      </div>
      <h3>Agentless Architecture</h3>
      <p>The architecture of  the software includes open-source components without any agent running on the target hosts.</p>
    </div>

    <div className="feature-box">
      <div className="feature-icon">
        <img src={lear} alt="Learn,build and deploy" />
      </div>
      <h3>Learn, Build & Deploy</h3>
      <p>Continuous learning is being used to enhance software reliability and deployability.</p>
    </div>

    <div className="feature-box">
      <div className="feature-icon">
        <img src={ons} alt="on site support" />
      </div>
      <h3>On-Site Support</h3>
      <p>On-site support for critical & complex automations apart from non-critical support through remote operation.</p>
    </div>
  </div>

  <div className="features-grind">
    <div className="feature-box">
      <div className="feature-icon">
        <img src={int} alt="integration" />
      </div>
      <h3>Integration</h3>
      <p>Mandatory regulatory compliance software are integrated.</p>
    </div>
    </div>
</div>

<div class="section_about-process">
            <div class="padding-global">
                <div class="container-large">
                    <div class="padding-bottom padding-xhuge"></div>
                    <h2 class="text-align-center max-width-small align-center">The process we follow</h2>
                    <div class="margin-top margin-large">
                        <div class="w-layout-grid process_component">
                            <div class="process_item">
                                <div class="process_connector-wrapper">
                                    <div class="process_circle"></div>
                                    <div class="process_connector-line"></div>
                                </div>
                                <div class="margin-bottom margin-xsmall">
                                    <h3 class="heading-style-h5">Observation </h3>
                                </div>
                                <p>Operation execution are observed.</p>
                            </div>
                            <div class="process_item">
                                <div class="process_connector-wrapper">
                                    <div class="process_circle"></div>
                                    <div class="process_connector-line"></div>
                                </div>
                                <div class="margin-bottom margin-xsmall">
                                    <h3 class="heading-style-h5">Design</h3>
                                </div>
                                <p>Designing of automation with due diligence of dependencies and impact analysis.</p>
                            </div>
                            <div class="process_item">
                                <div class="process_connector-wrapper">
                                    <div class="process_circle"></div>
                                    <div class="process_connector-line"></div>
                                </div>
                                <div class="margin-bottom margin-xsmall">
                                    <h3 class="heading-style-h5">Build</h3>
                                </div>
                                <p>Development of automation on the best practices with system customisation.</p>
                            </div>
                            <div class="process_item">
                                <div class="process_connector-wrapper">
                                    <div class="process_circle"></div>
                                    <div class="process_connector-line"></div>
                                </div>
                                <div class="margin-bottom margin-xsmall">
                                    <h3 class="heading-style-h5">Deployment</h3>
                                </div>
                                <p>Staged Deployment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
      
  );
}


function Database() {
  return <div className="content"><h2>This is database</h2></div>;
}

function Middleware() {
  return <div className="content"><h2>This is middleware</h2></div>;
}

function Server() {
  return <div className="content"><h2>This is the Server product</h2></div>;
}

function Automation() {
  return <div className="content"><h2>This is Automation</h2></div>;
}

function SolutionEngineering() {
  return <div className="content"><h2>This is Solutionengineering</h2></div>;
}

function BookADemo() {
  return <div className="content"><h2>The demo is booked</h2></div>;
}

function Form() {
  const [formData, setFormData] = useState({
    username: 'default',
    email: 'default@gmail.com',
    occupation: 'student',
    gender: 'male',
    languages: ['html'],
    dateOfBirth: '',
    phoneNumber: '',
    appointmentTime: ''
  });

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const onChangeHandler = (event) => {
    if (event.target.name === 'languages') {
      let copy = { ...formData };

      if (event.target.checked) {
        copy.languages.push(event.target.value);
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value);
      }

      setFormData(copy);
    } else if (event.target.name === 'email') {
      const email = event.target.value;
      setFormData({ ...formData, email });

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    } else if (event.target.name === 'phoneNumber') {
      const phoneNumber = event.target.value;
      setFormData({ ...formData, phoneNumber });

      if (phoneNumber.length !== 10) {
        setPhoneError('Phone number must be 10 digits');
      } else {
        setPhoneError('');
      }
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!emailError && !phoneError) {
      try {
        const response = await fetch('http://localhost:3001/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          alert('Form submitted successfully');
        } else {
          alert('Error while submitting form');
        }
      } catch (error) {
        console.error('Network error: ', error);
        alert('An error occurred while submitting form');
      }
    } else {
      console.error('Form contains errors');
    }
  };

  return (
    <div className="form-page">
    <div className="content form-section">
      <h1 className="form-title">Basic Form</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">User Name</label>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
          {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="occupation" className="form-label">Occupation</label>
          <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" name="dateOfBirth" onChange={onChangeHandler} value={formData.dateOfBirth} />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input className="form-control" name="phoneNumber" type="tel" maxLength="10" onChange={onChangeHandler} value={formData.phoneNumber} />
          {phoneError && <span style={{ color: 'red' }}>{phoneError}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="appointmentTime" className="form-label">Appointment Time</label>
          <input type="time" className="form-control" name="appointmentTime" onChange={onChangeHandler} value={formData.appointmentTime} />
        </div>

        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div>
            <div>
              <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="languages" className="form-label">Languages</label>
          <div>
            <div>
              <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
              <label htmlFor="javascript">Javascript</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <button className="btn" type="submit" disabled={!!emailError || !!phoneError}>Submit</button>
        </div>
      </form>
    </div>
  </div>
  );
}



function App() {
  return (
    <Router>
      <div className="navbar">
      <Link to="/" className="logo">
    <img src={logo} alt="Parasme Logo" className="logo-image" />
  </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/form" className={({ isActive }) => isActive ? 'active' : ''}>
                Form
              </NavLink>
            </li>
            <li className="dropdown">
              <span>Products</span>
              <ul className="dropdown-content">
              <li><Link to="/products/database">Database</Link></li>
              <li><Link to="/products/middleware">Middleware</Link></li>
              <li><Link to="/products/server">Server</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <span>Solutions</span>
              <ul className="dropdown-content">
              <li><Link to="/solutions/automation">Automation</Link></li>
              <li><Link to="/solutions/solution-engineering">Solution Engineering</Link></li>
              </ul>
            </li>
          </ul>
          <Link className="demo-btn" to="/book-demo">Book A Demo</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/products/database" element={<Database />} />
        <Route path="/products/middleware" element={<Middleware />} />
        <Route path="/products/server" element={<Server />} />
        <Route path="/solutions/automation" element={<Automation />} />
        <Route path="/solutions/solution-engineering" element={<SolutionEngineering />} />
        <Route path="/book-demo" element={<BookADemo />} />
      </Routes>
    </Router>
  );
}

export default App;
