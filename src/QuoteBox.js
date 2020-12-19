import React from 'react';
import Quote from './Quote'
import Button from './Button'
import Author from './Author'

export default function QuoteBox() {
    return (
    <div id="quote-box">
        <Quote/>
        <Button/>
        <Author/>
    </div>
    );
}