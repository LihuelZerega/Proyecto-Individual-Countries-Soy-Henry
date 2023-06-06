import { Link } from 'react-router-dom';
import SeccionLandingPage from './SeccionLandingPage';
import './LandingPage.css';
import Boton1 from '../../Components/Boton1'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <SeccionLandingPage/>
      <Link to='/HomePage'>
        <Boton1/>
      </Link>
    </div>
  );
}

export default LandingPage;
