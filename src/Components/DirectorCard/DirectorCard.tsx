import React, { useState } from 'react'
import "./DirectorCard";
import axios from 'axios';
interface Props {
  id: number;
  firstName: string;
  lastName: string;
}

const DirectorCard: React.FC<Props> = ({ id, firstName, lastName }: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  

  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/directors/${id}`);
      setMessage('Item deleted successfully!');
      window.location.reload();

    } catch (error) {
      console.error('There was an error deleting the item!', error);
      setMessage('Failed to delete the item.');
    }
  }
  const onEdit = () => {

  }
  return (
    <>
      <div
        className="directorCard"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <img
          src=""
          alt="#"
        />
        <div className="credentials">
          <p>
            {firstName}
          </p>
          <p>
            {lastName}
          </p>
        </div>
        {isHovered && (
        <div className='button-container'>
          <button className='edit-button' onClick={onEdit}>Edit</button>
          <button className='delete-button' onClick={() => handleDelete(id)}>Delete</button>
        </div>
      )}
      </div>
    </>

  )
}

export default DirectorCard