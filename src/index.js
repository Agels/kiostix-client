import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import Kategori from './pages/kategori';
import Penulis from './pages/penulis';
import Home from './pages/home';
import Buku from './pages/buku';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditBuku from './pages/buku/edit';
import TambahBuku from './pages/buku/tambah';
import EditKategori from './pages/kategori/edit';
import TambahKategori from './pages/kategori/tambah';
import EditPenulis from './pages/penulis/edit';
import TambahPenulis from './pages/penulis/tambah';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
     <Route exact path='/' element={<Home />} />
     <Route exact path='/buku' element={<Buku />} />
     <Route exact path='/tambah-buku' element={<TambahBuku />} />
     <Route exact path='/buku/:id' element={<EditBuku />} />
     <Route exact path='/kategori' element={<Kategori />} />  
     <Route exact path='/tambah-kategori' element={<TambahKategori />} />  
     <Route exact path='/kategori/:id' element={<EditKategori />} />   
     <Route exact path='/penulis' element={<Penulis />} />
     <Route exact path='/penulis/:id' element={<EditPenulis />} />       
     <Route exact path='/tambah-penulis' element={<TambahPenulis />} />              
 </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
