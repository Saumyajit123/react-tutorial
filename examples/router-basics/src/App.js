
import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
// import Home from './components/Home';
// import About from './components/About';

import Login from './Facebook/login';
import Register from './Facebook/register';

// import Navigation from './components/Navigation';
// import Page404 from './components/Page404';
// import User from './components/User';
// import Contact from './components/Contact';
// import Filter from './components/Filter';
// import Channel from './components/Channel';
// import Company from './components/Company';
//import Api from './components/api';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      
    {/* <Api /> */}
    {/* <Dashboard /> */}
    <BrowserRouter>

      {/* <Navigation />  */}
      
      <Routes>
        <Route path='/' element = {<Navigate to="/login"/>} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register />} />
        <Route path='/dashboard' element = {<Dashboard />} /> 

        {/* <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/*' element = {<Page404 />} />
        <Route path='/user/:name' element={<User />}/>
        <Route path='/filter' element={<Filter />}/>
        <Route path='/contact/' element={<Contact />}>
          <Route path='channel' element={<Channel />}/>
          <Route path='company' element={<Company />}/>
        </Route> */}
          
      </Routes>
      
    </BrowserRouter>
      
    </div>
  );
}

export default App;
