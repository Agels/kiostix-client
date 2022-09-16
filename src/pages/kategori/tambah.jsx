import { Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, } from "react";
import toast, { Toaster } from 'react-hot-toast';

function TambahKategori() {
  const navigate = useNavigate();


  const [postData, setPostData] = useState({
    nama_kategori: ""
  });

  const submitHandler = async(e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/kategori/`, postData);
      toast.success('data berhasil di ditambah')
      setTimeout(()=> {
        navigate('/kategori')
      },1500)
      
    } catch (error) {
      toast.error('terjadi kesalahan')
      console.log('error')
    }
   
    
  };
  return (
    <Container className="mt-5">
       <Toaster position="top-center" reverseOrder={false} />
      <Form onSubmit={submitHandler} className="">
      <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
          <label htmlFor="validationCustom02" className="form-label">
            <h4>Nama Kategori</h4>
          </label>
          <Form.Control
            type="text"
            onChange={(e) =>
              setPostData({ ...postData, nama_kategori: e.target.value })
            }
          />
        </div>
        <button className="btn btn-danger mt-5" onClick={() => navigate('/kategori')}>back</button>{" "}
        <button className="btn btn-primary mt-5">Submit</button>
      </Form>
    </Container>
  );
}

export default TambahKategori;
