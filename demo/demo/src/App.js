import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

const baseURL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users,setUsers]=useState(null)

  useEffect(()=>{
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  },[])
  if(!users) return null
  return (
    <div className="App">
      <header className="App-header">
      <table class="table table-bordered table-striped">
            <thead>
                <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>COMPANY</th>
                <th>ADDRESS</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                <th>WEBSITE</th>
                </tr>
            </thead>
            <tbody>
            {users.map(user =>{return(
                <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.company.name}</td>
                <td>{user.address.suite}, {user.address.street}, {user.address.zipcode} {user.address.city}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                </tr>)
            })}
            </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
