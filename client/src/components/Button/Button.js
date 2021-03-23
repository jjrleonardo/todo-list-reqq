import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import Form from '../Form';

const Button = ({ todos, setTodosData, setFilter, filter }) => {
    const style = {
        content: {
            left: '10px',
            right: '10px',
            margin: 'auto',
            padding: '0',
            maxWidth: '500px',
            maxHeight: '400px',
            border: 'none',
            borderRadius: '0',
            overflow: 'visible',
        },

        overlay: {
            background: 'rgba(0, 0, 0, 0.6)',
        },
    };
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setTodosData(todos);
        setFilter('All');
    }, [todos, setTodosData, setFilter])

    return (
        <>
            <Modal style={style} isOpen={showModal} ariaHideApp={false}>
                <Form setShowModal={setShowModal} />
            </Modal>
            <button 
            onClick={() => {setShowModal(true)}}
            className='w-72 h-72 m-4 bg-yellow-100 hover:bg-yellow-200 transition duration-300 ease-in-out flex items-center justify-center animate-pulse shadow-lg'>
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </button>
        </>
    )
}

export default Button
