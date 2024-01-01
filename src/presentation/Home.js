import React, {Component} from 'react';
import HomeService from '../services/HomeService';
import { useEffect, useState } from 'react';


export default function Home(){

    const [message, setMessage] = useState(''); // [state, setState

    const homeService = new HomeService();
    homeService.getHomeData().then((response) => {
        setMessage(response.data)
        console.log(response.data);
    });
    return(<div>
        <h1>Welcome to Home page</h1>
        <h3>This is coming from BEAPI: {message}</h3>
    </div>)
}
