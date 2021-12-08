//import logo from './logo.svg';
import axios from 'axios';
import './App.css';


import React, { useState, useEffect } from 'react'


export default function Crudhook() {
  const [state, setState] = useState({ user: [] })

  const [form, setForm] = useState({ id: "", userId: "", title: "", body: "" })


  //(to fetch data only once)   
  useEffect(() => {
    async function fetchData() {
      var response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts');
      //console.log(response)
      //console.log(response.data)
      setState({ user: response.data })

    } fetchData();

  }, [])



  // to have a difference between update and crete data by using key value
  let handlesubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      updateData()
    }
    else {
      createData()
    }

  }
  //creating data 
  let createData = async () => {
    var response = await axios.post('https://jsonplaceholder.typicode.com/posts',
      {
        userId: form.userId,
        title: form.title,
        body: form.body,
      })
    //console.log(response)
    //adding the data to the table
    var user = [...state.user];
    user.push(response.data);
    //console.log(user)
    setState({ user: user })
    setForm({ userId: "", title: "", body: "" })
  }
  let updateData = async () => {
    //updating the data 
    var response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${form.id}`,
      {
        id: form.id,
        userId: form.userId,
        title: form.title,
        body: form.body,
      }
    );
    console.log(response.data)
    var index = state.user.findIndex((row) => row.id === form.id);
    console.log(index)
    var user = [...state.user];
    user[index] = response.data;
    setState({
      user,
    });
    setForm({
      userId: '',
      body: '',
      title: '',
      id: '',
    });

  }

  //populating the data in the form
  let onpopulate = (id) => {
    var selectedData = state.user.filter((row) => row.id === id)[0];
    console.log(selectedData)
    setForm({
      id: selectedData.id,
      userId: selectedData.userId,
      title: selectedData.title,
      body: selectedData.body,

    })

  }

  //deleting the data
  let deleteData = async (id) => {
    var response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    var user = state.user.filter((row) => row.id !== id);
    setState({ user });
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <h3>USER FORM</h3>
        <label>userid </label>
        <input type="text" name="userid" value={form.userId}
          onChange={(e) => { setForm({ ...form, userId: e.target.value }) }}
        /><br /><br />
        <label>title </label>
        <input type="text" name="title" value={form.title}
          onChange={(e) => { setForm({ ...form, title: e.target.value }) }}
        /><br /><br />
        <label>body </label>
        <input type="text" name="body" value={form.body}
          onChange={(e) => { setForm({ ...form, body: e.target.value }) }}
        /><br /><br />
        <button>submit</button>
      </form>
      {/fetched data palced inside the table/}
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>userId</td>
            <td>title</td>
            <td>body</td>
            <td>Actions</td>

          </tr>
        </thead>
        <tbody>
          {state.user.map((data) => (
            <tr >
              <td>{data.id}</td>
              <td>{data.userId}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
              <td><button onClick={() => onpopulate(data.id)}>
                update
              </button>
                <button onClick={() => deleteData(data.id)}>
                  delete
                </button></td>
            </tr>

          ))}

        </tbody>
      </table>



    </>
  )
}