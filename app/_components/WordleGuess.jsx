"use client"
import React, { useState, useEffect } from 'react'
import useAlphaKeyPress from '../_util/KeyboardHandler';
import wordsData from '../_assets/words.json';

const WordleGuess = () => {
    const [word, setWord] = useState("");
    const [guess, setGuess] = useState([]);
    const [missPlaced, setMissPlaced] = useState(0);
    const [correctLetter, setCorrectLetter] = useState(0);
    const [guessCounter, setGuessCounter] = useState(6);
    const [keyPressed, setKeyPressed] = useState('');
    const [letterStatuses, setLetterStatuses] = useState([]);
    
    useEffect(() => {
        const { words } = wordsData;
        const randomIndex = Math.floor(Math.random() * words.length);
        setWord(words[randomIndex]);

        window.addEventListener('keydown', handleDelete);
        
        return () => {
            window.removeEventListener('keydown', handleDelete);
            
        }
    }, [])

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                handleEnterPress();
            }
        };
    
        window.addEventListener('keydown', handleKeyPress);
        
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [guess]);

    useAlphaKeyPress((key) => {
        setKeyPressed(key);
        if(guess.length < 5){
            setGuess(prev => [...prev, key.toLowerCase()])
            console.log(guess)
        } else {return} 
    })

    const handleDelete = (event) => {
        if(event.key === 'Backspace'){
            setGuess((prev) => {
                const newGuess = [...prev];
                newGuess.pop();
                return newGuess;
            })
        }
    }

    const handleEnterPress = () => {
        if(guess.length === 5){
            const statuses = guess.map((letter, index) => {
                if(word[index] === letter){
                    return 'correct';
                } else if(word.includes(letter)){
                    return 'missplaced';
                } else{
                    return 'wrong';
                }
            });
            setLetterStatuses(statuses);
            setGuess([]);
            setGuessCounter(prev => prev - 1);
        }
    }

    return (
        <section className='w-1/2 mx-auto text-center my-12'>
        <div className="text-4xl font-bold">{word}</div>
        <ul className='flex align-middle justify-center my-4'>
            {Array(5).fill().map((_, index) => {
                const letter = guess[index] || "";
                const status = letterStatuses[index] || ""; // Use status after Enter is pressed
                return (
                    <li key={index} data-index={index} className={`w-20 h-20 mx-3 rounded shadow-lg opacity-80 ${
                        status === 'correct' ? 'bg-green-500' : status === 'missplaced' ? 'bg-yellow-500' : 'bg-slate-400'
                    }`}>
                        <h2 className='text-2xl py-5 h-20 font-extrabold'>{letter}</h2>
                    </li>
                );
            })}
        </ul>
    </section>
    )
}

export default WordleGuess;