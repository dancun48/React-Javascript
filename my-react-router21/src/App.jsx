

import React from 'react';
//import NavBar from './components/NavBar';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
//import Contact from './pages/Contact';
import RootLayout from './layout/RootLayout';
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';
import JobsLayout from './layout/JobsLayout';
import Jobs, { jobsLoader } from './pages/Jobs';
import JobDetails, { jobDetailsLoader } from './components/JobDetails';
import Error from './components/Error';



const App = () => {

  // another method of creating a router

  const router = createBrowserRouter(
                createRoutesFromElements(

                <Route path='/' element={<RootLayout />}>
                  
                  <Route index element={<Home />} />
                  <Route path='products' element={<Products />} />
                  <Route path='about' element={<About />} />

                  <Route path='contact' element={<ContactLayout />}>
                  
                    <Route path='info' element={<ContactInfo />}/>
                    <Route path='form' element={<ContactForm />} />
                  
                  </Route>

                  <Route path='jobs' element={<JobsLayout />} errorElement={<Error />}> {/*the ja=son page needs to load before this ppage loads so that the jobs data can be displayed upon visit */}
                    <Route index element={<Jobs />} loader={jobsLoader}/>

                    {/*dynaimc route for each of the jobs and an error for when a page or job cannot b found on the jobs page */}

                    <Route path=':id' element={<JobDetails />} loader={jobDetailsLoader}/>
                  </Route>

                  <Route path='*' element={<NotFound />} />
                  
                </Route>

                ))
    return (

      <RouterProvider router={router}/>

    /*  {/*
      <div>
        
          <NavBar />
          
          <div className='container'>
            
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            
          </div>
          
      </div>
      */

    )
}

export default App
