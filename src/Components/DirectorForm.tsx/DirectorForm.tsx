import React, { useState } from 'react';

type Props = {};

const DirectorForm = (props: Props) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [biography, setBiography] = useState<string>("");
    const [birthDate, setBirthdate] = useState<Date>(new Date());
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    return (
        <>
            <div className='form-button add-new-button-container'>
                <button className='add-new-button' onClick={toggleForm} disabled={isFormOpen}>
                    <span className='plus'>&#65291;</span> Add New
                </button>
            </div>

            {isFormOpen && <div className="overlay" onClick={toggleForm}></div>}

            <div className='director-form'>
            {isFormOpen && (
                <form action="api/directors" method='post' className='popup'>
                    <div className='close-popup' onClick={toggleForm}>&times;</div>
                    <h2>Director Form</h2>
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id='first-name'
                        placeholder='Enter first name'
                    />
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id='last-name'
                        placeholder='Enter last name'
                    />
                    <label htmlFor="biography">Biography</label>
                    <textarea
                        id='biography'
                        placeholder='Biography'
                    />
                    <label htmlFor="birth-date">Date of Birth</label>
                    <input
                        type="date"
                        id='birth-date'
                    />
                    <div className='action-buttons-holder'>
                        <button type='submit' className='submit-button'>Submit</button>
                        <button type='reset' className='reset-button'>Reset</button>
                    </div>
                </form>
                )}
            </div>
        </>
    );
};

export default DirectorForm;