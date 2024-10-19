import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

type Props = {}

const Search : React.FC<Props> = (props: Props) : JSX.Element => {
    const[search, setSearch] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }
    const onClick = (e: SyntheticEvent) => {

    }
  return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)} />
        <button onClick={(e) => onClick(e)}/>
    </div>
  )
}

export default Search