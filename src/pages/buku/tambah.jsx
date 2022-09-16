import { Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import toast, { Toaster } from 'react-hot-toast';

function TambahBuku() {
  const navigate = useNavigate();

  const [dataPenulis, setDataPenulis] = useState([]);
  const [dataKategori, setDataKategori] = useState([]);
  const [postData, setPostData] = useState({
    nama_buku: "",
    id_penulis: 0,
    id_kategori: 0,
  });


  useEffect(() => {
    axios.get(`http://localhost:3000/api/penulis`).then((res) => {
      setDataPenulis(res.data.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/kategori`).then((res) => {
      setDataKategori(res.data.data);
    });
  }, []);
  const submitHandler = async(e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/buku`, postData);
      toast.success('data berhasil di tambah')
      setTimeout(()=> {
        navigate('/buku')
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
            <h4>Nama buku</h4>
          </label>
          <Form.Control
            type="text"
            onChange={(e) =>
              setPostData({ ...postData, nama_buku: e.target.value })
            }
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
          <label htmlFor="validationCustom02" className="form-label">
            <h4>Nama Penulis</h4>
          </label>
          <select
            className="form-select rounded-pill"
            id="validationDefault04"
            required
            name="namaPenulis"
          >
            <option selected disabled>
              {postData.id_penulis
                ? postData.id_penulis
                : "nama penulis"}
            </option>
            {dataPenulis?.map((el, index) => {
              return (
                <>
                  <option
                    key={index}
                    onClick={() =>
                      setPostData({ ...postData, id_penulis: el.id })
                    }
                  >
                    {el.nama_penulis}
                  </option>
                </>
              );
            })}
          </select>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
          <label htmlFor="validationCustom02" className="form-label">
            <h4>Nama Kategori</h4>
          </label>
          <select
            className="form-select rounded-pill"
            id="validationDefault04"
            required
            name="nama-kategori"
          >
            <option selected disabled>
              {postData.id_kategori
                ? postData.id_kategori
                : "nama kategori"}
            </option>
            {dataKategori?.map((el, index) => {
              return (
                <>
                  <option
                    key={index}
                    onClick={() =>
                      setPostData({ ...postData, id_kategori: el.id })
                    }
                  >
                    {el.nama_kategori}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <button className="btn btn-danger mt-5" onClick={() => navigate('/buku')}>back</button>{" "}
        <button className="btn btn-primary mt-5">Submit</button>
      </Form>
    </Container>
  );
}

export default TambahBuku;
