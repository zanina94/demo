import React, { useEffect,useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const Albums = () => {
    const [userId,setUserId] = useState('')
    const [albums, setAlbums] = useState()

    const handleClick = (e) =>{
        e.preventDefault();
        axios.get('https://jsonplaceholder.typicode.com/users/'+userId+'/albums').then((response) => {
            setAlbums(response.data);
    console.log(response.data)

    })
    // console.log(albums)
    }

    // useEffect(() => console.log("re-render because userId changed:", userId), [userId])

    const handleChange = (e) =>{
       setUserId(e.target.value);
       console.log('userId',userId);
    }

  return (
    <>
    <Form>
    <Form.Group className="mt-2" controlId="exampleForm.ControlInput1">
      <Form.Label>User Id</Form.Label>
      <Form.Control onChange={handleChange} style={{marginLeft:'460px' ,width:'30%'}} type="text" />
    </Form.Group>
    <Button onClick={handleClick} className='mt-3' variant="primary" type="submit">
        Submit
      </Button>
  </Form>
     {albums && <table className="mt-3 table table-bordered table-striped"> 
      <thead> 
          <tr>
          <th>ID</th>
          <th>TITLE</th>
          </tr>
      </thead>
      <tbody>
      {albums.map(album => {return(
          <tr>
          <td>{album.id}</td>
          <td>{album.title}</td>
          </tr>)
      })}
      </tbody>
  </table>
}
  </>
  )
}

export default Albums