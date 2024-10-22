import React, { useEffect, useState } from 'react'
import DirectorCard from '../DirectorCard/DirectorCard'
import { Director } from '../../types'
import axios from 'axios'

const DirectorCardList : React.FC = () : JSX.Element => {
    const [directors, setDirectors] = useState<Director[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        
        const fetchDirectors = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/directors');
                setDirectors(response.data);
            } catch (err: any) {
                setError(err.message);
            }
        };

        fetchDirectors();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
    <div>
        <div className='director-list'>
            {
                directors.map(director => (
                    <DirectorCard 
                        key = {director.id}
                        id = {director.id}
                        firstName={director.firstName}
                        lastName={director.lastName}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default DirectorCardList