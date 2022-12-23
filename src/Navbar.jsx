import {IoRestaurant} from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to={'/'}>
      <div className='flex items-center my-8'>
        <IoRestaurant className='text-3xl text-red-600'/>
        <p className='text-xl font-semibold text-red-600'>Foodie</p>
      </div>
    </Link>
  )
}

export default Navbar