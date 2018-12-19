import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import data from "./data/data.json"
import Detail from './Detail';
const AllUsers = ({ match }) => (



    <div>

        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {data.users.map((user, index) =>
                    <tr>
                        <img src={user.picture.thumbnail}></img>
                        <td>{user.first + " " + user.last}</td>
                        <Link to={`details/${index}`}>Details</Link>
                    </tr>
                )}
            </tbody>
        </table>

    </div>


);






export default AllUsers;