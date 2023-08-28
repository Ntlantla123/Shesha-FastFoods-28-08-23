import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import { TopNav } from './components/TopNav';
import { Home } from './components/Home';
import { Lessons } from './components/Lessons';
import { Recipes } from './components/Recipes';
import { ToastContainer } from 'react-toastify'; // Message Notification //
import { ViewIngredients } from './components/ViewIngredients';
import { ViewIngredientsburger } from './components/ViewIngredientsburger';
import { Video } from './components/Video';
import { Videoburger } from './components/Videoburger';
import HomeCard from './components/HomeCard';
import { Shushi } from './components/Shushi';
import { TandooriChicken } from './components/TandooriChicken';
import { ButternutRisotto } from './components/ButternutRisotto';
import BreadForTimes from './components/BreadForTimes';
import CreamyPasta from './components/CreamyPasta';
import MeatBalls from './components/MeatBalls';
import CarneTacos from './components/CarneTacos';
import Articles from './components/Articles';
import OrientalDrumStick from './components/OrientalDrumStick';
import CreamyChickenRossitto from './components/CreamyChickenRossitto';
import WrapperSausage from './components/WrapperSausage';
import ChickenTikka from './components/ChickenTikka';
import ButterChickenCurry from './components/ButterChickenCurry';
import SausageTomato from './components/SausageTomato';
import AfricanStylePap from './components/AfricanStylePap';
import BeaconCarbonara from './components/BeaconCarbonara';
import OnePotWonder from './components/OnePotWonder';
import MaroccanLamb from './components/MaroccanLamb';
import UmleqwaMeals from './components/UmleqwaMeals';


function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isDoneLoading, setIsDoneLoading] = useState("loading");


  return (
    <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/TopNav' element={<TopNav />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/Lessons' element={<Lessons />}></Route>
          <Route path='/recipes' element={<Recipes isDoneLoading={isDoneLoading} setIsDoneLoading={setIsDoneLoading} query={query} setQuery={setQuery} recipes={recipes} setRecipes={setRecipes} />}></Route>
          <Route path='/viewingredients' element={< ViewIngredients />}></Route>
          <Route path='/viewingredientsburger' element={< ViewIngredientsburger />}></Route>
          <Route path='/video' element={<Video />}></Route>
          <Route path='/videoburger' element={<Videoburger />}></Route>
          <Route path='/homecard' element={<HomeCard />}></Route>
          <Route path='/shushi' element={<Shushi />}></Route>
          <Route path='/tandoorichicken' element={<TandooriChicken />}></Route>
          <Route path='/butternutristto' element={<ButternutRisotto />}></Route>
          <Route path='/breadfortimes' element={<BreadForTimes />}></Route>
          <Route path='/CreamyPasta' element={<CreamyPasta />}></Route>
          <Route path='/meatballs' element={<MeatBalls />}></Route>
          <Route path='/CarneTacos' element={<CarneTacos />}></Route>
          <Route path='/articles' element={<Articles />}></Route>
          <Route path='/orientaldrumstick' element={<OrientalDrumStick />}></Route>
          <Route path='/CreamyChickenRossitto' element={<CreamyChickenRossitto />}></Route>
          <Route path='WrapperSausage' element={<WrapperSausage />}></Route>
          <Route path='ChickenTikka' element={<ChickenTikka />}></Route>
          <Route path='/ButterChickenCurry' element={<ButterChickenCurry />}></Route>
          <Route path='/sausagetomato' element={<SausageTomato />}></Route>
          <Route path='/AfricanStylePap' element={<AfricanStylePap />}></Route>
          <Route path='/BeaconCarbonara' element={<BeaconCarbonara />}></Route>
          <Route path='/onepotwonder' element={<OnePotWonder />}></Route>
          <Route path='/MaroccanLamb' element={<MaroccanLamb />}></Route>
          <Route path='/umleqwameals' element={<UmleqwaMeals />}></Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
