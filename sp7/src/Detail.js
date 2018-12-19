import React, { Component } from 'react';
import data from "./data/data.json"

const Detail = ({ match }) => (
    
    <div>
        <h1>Details for {data.users[match.params.index].first} </h1>
        <img src={data.users[match.params.index].picture.large}></img>
        <p>Full name: {data.users[match.params.index].first + " " + data.users[match.params.index].last}</p>
        <p>Street: {data.users[match.params.index].street}</p>
        <p>City: {data.users[match.params.index].city}</p>
        <p>State: {data.users[match.params.index].state}</p>
        <p>Zip: {data.users[match.params.index].zip}</p>
        <p>Email: {data.users[match.params.index].email}</p>
        <p>Dob: {data.users[match.params.index].dob}</p>
        <p>Phone: {data.users[match.params.index].phone}</p>
        <p>Cell: {data.users[match.params.index].cell}</p>
        
    </div>
)


export default Detail;