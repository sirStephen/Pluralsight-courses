import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import CoursesPage from './courses/CoursesPage';
import ManageCoursesPage from './courses/ManageCoursesPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return(
        <div className="container-field">
            <Header />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/courses' component={CoursesPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/course/:slug' component={ManageCoursesPage} />
                <Route path='/course' component={ManageCoursesPage} />
                <Route component={PageNotFound} />
            </Switch>
            <ToastContainer autoClose={3000} hideProgressBar />
        </div>
    )
}

export default App;