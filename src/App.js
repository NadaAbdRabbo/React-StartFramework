import React, { Component } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MasterLayout from './components/MasterPage/MasterLayout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Notfound from './components/Notfound/Notfound';


const router = createBrowserRouter([
{path:'',element:<MasterLayout/>, children:[
{path:'',element:<Home/>},
{path:'home',element:<Home/>},
{path:'about',element:<About/>},
{path:'portfolio',element:<Portfolio/>},
{path:'contact',element:<Contact/>},
{path:'*',element:<Notfound/>}
]}




])

export default class App extends Component {
  render() {
    return (
      <>
      <RouterProvider router={router}/>
      </>
    )
  }
}

