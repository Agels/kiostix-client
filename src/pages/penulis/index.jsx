import React from 'react'
import axios from 'axios';
import Navbars from '../../component/navbar';
import {useState, useEffect} from 'react';
import {Container, Table} from 'react-bootstrap'
import { Link,Navigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
function Kategori() {
    const [penulis, setPenulis] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(()=> {
        axios.get('http://localhost:3000/api/penulis')
        .then(res => setPenulis(res.data.data))
    },[refresh])
    const deleteHandler = (id) => {
      console.log(id)
      try {
        axios.delete(`http://localhost:3000/api/penulis/${id}`)
        toast.success('data berhasil dhiapus')
        setRefresh(!refresh)
       Navigate('/kategori')
      } catch (error) {
        
      }
 
  }
  return (
    <>
    <Navbars />
    <Container className="mt-5">
    <Toaster position="top-center" reverseOrder={false} />
    <Link to="/tambah-penulis">
          <button className="btn btn-primary mb-3"> tambah</button>
    </Link>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama penulis</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {penulis.map(el => {
            return (
                <tr>
                <td>{el.id}</td>
                <td>{el.nama_penulis}</td>
                <td>
                <Link
                      to={`/penulis/${el.id}`}
                      state={{ data: el }}
                    >
                      <button className="btn btn-primary"> edit</button>{" "}
                    </Link>
                    <button className="btn btn-danger" onClick={() => deleteHandler(el.id)}>delete</button>
                </td>
              </tr>
            )
        })}
       
      </tbody>
    </Table>
  </Container>
  </>
  )
}

export default Kategori;