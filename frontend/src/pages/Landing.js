import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.png';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
          <nav>
            
          </nav>
          <div className='container page'>
            {/* info */}
            <div className='info'>
              <h1>
                Car <span>insurance</span> app
              </h1>
              <p>
              Car insurance, specifically liability coverage, is required in nearly every state, so you're financially protected if you're responsible for someone else's injuries or property damage. With additional coverages, your auto insurance can also help pay to repair or replace your vehicle. 
              If you're thinking about insurance costs, there are ways to get cheaper car insurance without compromising on your coverage.
              </p>
              <Link to='/register' className='btn btn-hero'>
                Login/Register
              </Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
          </div>
        </Wrapper>
      );
};
export default Landing;