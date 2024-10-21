import DirectorCardList from '../Components/DirectorCardList/DirectorCardList'
import DirectorForm from '../Components/DirectorForm.tsx/DirectorForm'

type Props = {}

const Directors = (props: Props) => {
  return (
    <div>
        <DirectorForm/>
        <div className='title-container'>
            <h2 className='title'>List of available directors</h2>
        </div>
        <DirectorCardList />
    </div>
  )
}

export default Directors