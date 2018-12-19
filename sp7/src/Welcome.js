import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Welcome = () => (
    <div>
        <h1>Welcome to our friends site</h1>
        <Link to="/all">All users</Link>
    </div>
)

export default Welcome;