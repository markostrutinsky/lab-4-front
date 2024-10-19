import React from 'react'
import "./DirectorCard";
interface Props {
  firstName: string;
  lastName: string;
}

const DirectorCard : React.FC<Props> = ({ firstName, lastName }: Props) : JSX.Element => {
  return (
    <div className="directorCard">
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
    </div>
  )
}

export default DirectorCard