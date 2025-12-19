import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useScrollToTop from '../../hooks/useScrollToTop';

const Layout = ({ children }) => {
  useScrollToTop();
  const location = useLocation();

  // Pages where we DO NOT want header/footer
  const noHeaderFooterPaths = ['/signup', '/login'];

  const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);

  return (
    <div>
      {/* Render Header only if not in noHeaderFooterPaths */}
      {showHeaderFooter && <Header />}

      <div className='layout-container'>
        <div className='layout-content'>{React.Children.toArray(children)}</div>
      </div>

      {/* Render Footer only if not in noHeaderFooterPaths */}
      {showHeaderFooter && <Footer />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
