import React from 'react';
import Card from './Card';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

const cards = [
    {
        id: 1,
        title: 'Javascript',
        image: image1,
        instructor: 'Humberto',
        url: 'http://google.com/'
    },
    {
        id: 2,
        title: 'java',
        image: image2,
        instructor: 'Samuel',
        url: 'http://youtube.com/'
    },
    {
        id: 3,
        title: 'python', 
        image: image3,
        instructor: 'Angela',
        url: 'http://github.com/'
    },
];


export default function Cards () {
    return (
    <div class = 'conteiner d-flex justify-content-center align-item-center h-100'>
        <div class = 'row'>
            {
                cards.map((c) => (
                    <div className = 'col-md-4' key = {cards.id}>
                    <Card
                    key = {c.id}
                    id = {c.id}
                    title = {c.title}
                    image = {c.image}
                    instructor = {c.instructor}
                    url = {c.url}   />
                    </div>
                ))
            }
         </div>
    </div>
    );
}