import { Link } from 'react-router-dom';
import { useCabinsOpen } from '../../pages/cabin/useCabinsOpen';
import CabinsList from '../CabinsList_31';

function Landing_31() {
  const { cabins, isLoading } = useCabinsOpen();
  console.log('Landing_31 cabins', cabins);
  return (
    <>
      <div className='wild-oasis'>
        <div className='antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative'>
          <header className='border-b border-primary-900 px-8 py-5'>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
              <Link className='flex items-center gap-4 z-10' to='/'>
                <img width='48px' height='36px' src='/logo.webp' />
                <span>The Wild Oasis (211410831)</span>
              </Link>
              <nav className='z-10 text-xl'>
                <ul className='flex gap-16 items-center'>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/cabins'
                    >
                      Cabins
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/about'
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/contact'
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/login'
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <div className='flex-1 px-8 py-12 grid'>
            <CabinsList cabins={cabins} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing_31;
