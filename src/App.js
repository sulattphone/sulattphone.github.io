import React, { Component } from 'react';
import { BrowserRouter, Router,  Route, Routes } from 'react-router-dom';
import Logo from './components/Logo';
import Home from './routes/Home';
import AboutMe from './routes/AboutMe';
import Blog from './routes/Blog';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import SoftwareEngineeringInterview from './routes/articles/SoftwareEngineeringInterview';

class App extends Component {
    render() {
        return(
            <BrowserRouter basename="/personalwebsiteblog">
              <Logo />
              <Navigation />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutMe /> } />
                <Route path='/blog' element={<Blog /> } />

                {/* Articles Routes */}
                <Route path='/blog/softwareengineeringinterviewprep' element={<SoftwareEngineeringInterview />} />
              </Routes>
            </BrowserRouter>
        );
        
    }
}


export default App;