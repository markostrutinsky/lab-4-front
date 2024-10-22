import axios from 'axios';
import React, { useState } from 'react';

type Props = {};

const DirectorForm = (props: Props) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [biography, setBiography] = useState<string>("");
    const [birthDate, setBirthdate] = useState<string>("");
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string | null>(null);

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return '';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formattedBirthDate = formatDate(birthDate);

        if (!formattedBirthDate) {
            setMessageError('Invalid date of birth');
            return;
        }

        const director = {
            firstName,
            lastName,
            biography,
            birthDate: formattedBirthDate,
        };

        setIsPending(true);
        setMessageError(null);

        try {
            const response = await axios.post('http://localhost:8080/api/directors', director, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            handleReset();
            window.location.reload();
        } catch (error: any) {
            if (error.response) {
                if (error.response.status === 409) {
                    setMessageError(error.response.data.message);
                }
            } else {
                console.error("Network error or request not made", error.message);
            }
        } finally {
            setIsPending(false);
        }
    };
    
    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setBiography('');
        setBirthdate('');
        setMessageError(null);
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
                    <form className='popup' onSubmit={handleSubmit}>
                        <div className='close-popup' onClick={toggleForm}>&times;</div>
                        <h2>Director Form</h2>
                        {messageError && <div className='error-message'>{messageError}</div>}
                        <label htmlFor="first-name">First Name</label>
                        <input
                            type="text"
                            id='first-name'
                            placeholder='Enter first name'
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <div></div>

                        <label htmlFor="last-name">Last Name</label>
                        <input
                            type="text"
                            id='last-name'
                            placeholder='Enter last name'
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <div></div>

                        <label htmlFor="biography">Biography</label>
                        <textarea
                            id='biography'
                            placeholder='Biography'
                            value={biography}
                            onChange={(e) => setBiography(e.target.value)}
                        />
                        <div></div>

                        <label htmlFor="birth-date">Date of Birth</label>
                        <input
                            type="date"
                            id='birth-date'
                            required
                            value={birthDate}
                            onChange={(e) => setBirthdate(e.target.value)}
                        />
                        <div></div>
                        
                        <div className='action-buttons-holder'>
                            <button type='button' className='reset-button' onClick={handleReset}>Reset</button>
                            {!isPending && <button type='submit' className='submit-button'>Submit</button>}
                            {isPending && <button type='submit' className='submit-button' disabled >Adding director...</button>}
                        </div>
                    </form>
                )}
            </div>
        </>
    );
};

export default DirectorForm;