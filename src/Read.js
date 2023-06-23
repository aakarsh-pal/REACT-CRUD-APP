import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState([]);

  const Navigate = useNavigate();

  const handleDelete = (id) => {
    axios
      .delete(`https://648ccc548620b8bae7ed636f.mockapi.io/CRUD/${id}`)
      .then(() => {
        getData();
      });
  };

  const handleEdit = (id , name , email) => {
       
       localStorage.setItem("id" , id)
       localStorage.setItem("name" , name)
       localStorage.setItem("email" , email)
       Navigate('/update')
  }



  const getData = () => {
    axios
      .get("https://648ccc548620b8bae7ed636f.mockapi.io/CRUD")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
        <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
      {data.map((item) => {
        return (
          <>
            
              <tbody>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    {" "}
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      type="button"
                      onClick={() => handleEdit(item.id , item.name , item.email)}
                      className="btn btn-success"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
           
          </>
        );
      })} </table>
    </div>
  );
};

export default Read;
