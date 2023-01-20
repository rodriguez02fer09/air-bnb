import './Titles.css';

const Titles = ({ title }) => {
  return (
    <>
        <h3 className='title-h3'>{ title }</h3>
        <hr className='title-hr'/>
    </>
  )
}

export default Titles;
