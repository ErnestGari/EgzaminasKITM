import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FilmsComponent from './components/FilmsComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import ListFilmComponent from './components/ListFilmComponent.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpComponent from './components/SignUpComponent.jsx'
import LogInComponent from './components/LogInComponent.jsx'
import CategoriesComponent from './components/CategoriesComponent.jsx'
import ListCategoryComponent from './components/ListCategoryComponent.jsx'


function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          {/** http://localhost:3000 */}
          <Route path='/' element = {<ListFilmComponent/>}></Route>
          {/* http://localhost:3000/films */}
          <Route path='/films' element = { <ListFilmComponent />}></Route>
          {/* http://localhost:3000/add-film */}
          <Route path='/add-film' element = { <FilmsComponent/>}></Route>
          {/* http://localhost:3000/edit-film/1 */}
          <Route path='edit-film/:id' element = {<FilmsComponent/>}></Route>
          {/* http://localhost:3000/api/signup */}
          <Route path='/signup' element = {<SignUpComponent/>}></Route>
          {/* http://localhost:3000/api/login */}
          <Route path='/login' element={<LogInComponent/>}></Route>
          {/* http://localhost:3000/categories */}
          <Route path='/categories' element = { <ListCategoryComponent />}></Route>
          {/* http://localhost:3000/add-category */}
          <Route path='/add-category' element = { <CategoriesComponent/>}></Route>
          {/* http://localhost:3000/edit-category/1 */}
          <Route path='edit-category/:id' element = {<CategoriesComponent/>}></Route>
          {/* http://localhost:3000/api/signup */}
        </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App