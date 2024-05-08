import { Outlet } from 'react-router-dom';

import Navbar_02 from '../components/Navbar_02';

const HomeLayout_02 = () => {
  return (
    <>
      <Navbar_02 />
      <Outlet />
    </>
  );
};

export default HomeLayout_02;
