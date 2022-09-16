import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import Navbars from "../../component/navbar";
import { Link, Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function Buku() {
  const [buku, setBuku] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [penulis, setPenulis] = useState();
  const [id_penulis, setIdPenulis] = useState();
  const [kategori, setKategori] = useState();
  const [id_kategori, setIdKategori] = useState();
  useEffect(() => {
    let penulis = id_penulis ? `?id_penulis=${id_penulis}` : "";
    let kategori = id_kategori ? `?id_kategori=${id_kategori}` : "";
    axios
      .get(`http://localhost:3000/api/buku${penulis}${kategori}`)
      .then((res) => setBuku(res.data.data));
  }, [id_penulis, refresh, id_kategori]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/penulis")
      .then((res) => setPenulis(res.data.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/kategori")
      .then((res) => setKategori(res.data.data));
  }, []);

  const deleteHandler = (id) => {
    try {
      axios.delete(`http://localhost:3000/api/buku/${id}`);
      toast.success("data berhasil dhiapus");
      setRefresh(!refresh);
    } catch (error) {}
  };
  return (
    <div>
      <Navbars />
      <Container className="mt-5">
        <Toaster position="top-center" reverseOrder={false} />
        <Row lg={12}>
          <Col lg={6}>
            <Link to="/tambah-buku">
              <button className="btn btn-primary mb-3"> tambah</button>
            </Link>
          </Col>
          <Col lg={3}>
            <select
              className="form-select "
              aria-label="Default select example"
            >
              <option selected onClick={() => setIdPenulis()}>
                Semua penulis
              </option>
              {penulis?.map((el) => {
                return (
                  <option onClick={() => setIdPenulis(el.id)}>
                    {el.nama_penulis}
                  </option>
                );
              })}
            </select>
          </Col>
          <Col lg={3}>
            <select
              className="form-select "
              aria-label="Default select example"
            >
              <option selected onClick={() => setIdKategori()}>
                Semua kategori
              </option>
              {kategori?.map((el) => {
                return (
                  <option onClick={() => setIdKategori(el.id)}>
                    {el.nama_kategori}
                  </option>
                );
              })}
            </select>
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama buku</th>
              <th>Nama penulis</th>
              <th>Nama kategori</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {buku.map((el) => {
              return (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.nama_buku}</td>
                  <td>{el?.penuli?.nama_penulis}</td>
                  <td>{el?.kategori?.nama_kategori}</td>
                  <td>
                    <Link
                      to={`/buku/${el.id}`}
                      state={{ data: el }}
                      className="link"
                    >
                      <button className="btn btn-primary"> edit</button>{" "}
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={() => deleteHandler(el.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Buku;
