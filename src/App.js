import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/main/Home';
import About from './pages/main/About';
import Contacts from './pages/main/Contacts';
import NotFound from './pages/main/NotFound';
import Meals from './pages/main/Meals';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Beef');
  const text =
  {
    title: "Welcome  to The MealDB",
    description: "Welcome to TheMealDB:An open, crowd-sourced database of recipes from around the world. We offer a free recipe API for anyone wanting to use it, with additional premium features if required."
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path="about" element={<About text={text} />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path='meals' element={<Meals selectedCategory={selectedCategory} />}></Route>
          <Route path="*" element={<NotFound />} />

        </Route>
        {/* <Route path="/" element={<Layout />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contacts" element={<Contacts />}/> */}
      </Routes>
    </div>
  );
}

export default App;
