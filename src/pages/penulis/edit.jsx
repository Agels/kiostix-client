import { Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState} from "react";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function EditPenulis() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;

  const [postData, setPostData] = useState({
    nama_penulis: data.nama_penulis,
  });

  const submitHandler = async(e) => {
    e.preventDefault();
    try {
        console.log(postData)
      await axios.put(`http://localhost:3000/api/penulis/${data.id}`, postData);
      toast.success('data berhasil di update')
      setTimeout(()=> {
        navigate('/penulis')
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
            defaultValue={data.nama_penulis}
            onChange={(e) =>
              setPostData({ ...postData, nama_penulis: e.target.value })
            }
          />
        </div>
        <button className="btn btn-danger mt-5" onClick={() => navigate('/buku')}>back</button>{" "}
        <button className="btn btn-primary mt-5">Submit</button>
      </Form>
    </Container>
  );
}

export default EditPenulis;
