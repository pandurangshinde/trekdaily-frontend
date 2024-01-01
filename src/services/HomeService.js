import React, { Component } from 'react';
import axios from 'axios';

export default class HomeService extends Component {

    baseURL = `https://localhost:7062/api/Home`;

    getHomeData() {
        return axios.get(this.baseURL);
    }
}