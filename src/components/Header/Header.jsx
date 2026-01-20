import styles from './header.module.scss';
import React, { useEffect, useState, useRef } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from '@mui/material';
import Marquee from 'react-fast-marquee';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast from 'react-simple-toasts';
import Loader from 'react-js-loader';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Paragraph from '../../components/Typography/Paragraph/Paragraph';
import Button from '../../components/Button/Button';
import useUser from '../../hooks/useUser';
import useLocales from '../../hooks/useLocales';
import { Menu, MenuItem, Drawer, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

// assets
import MainLogo from '../../assets/images/header/Main-Logo.png';
import LoginLogo from '../../assets/images/header/Login-Logo.svg';
import item1 from '../../assets/images/header/item1.svg';
import item2 from '../../assets/images/header/item2.svg';
import item3 from '../../assets/images/header/item3.svg';
import item4 from '../../assets/images/header/item4.svg';
import HProfile1 from '../../assets/images/header/HProfile1.png';

export default function Header() {
  const navigate = useNavigate();
  const { get_user } = useUser();
  const { translate, currentLang } = useLocales();

  // Mobile drawer (< 768px)
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isDesktop = useMediaQuery('(min-width:768px)');

  //Menu for 768px and above
  const [MenuAnchorEl, setMenuAnchorEl] = useState(null);
  const openMenu = Boolean(MenuAnchorEl);
  const handleMenuClick = (e) => setMenuAnchorEl(e.currentTarget);
  const handleMenuClose = () => setMenuAnchorEl(null);

  //Menu Handler

  const handleMenuButtonClick = (e) => {
    if (isDesktop) {
      handleMenuClick(e); // your existing Menu logic
    } else {
      setDrawerOpen(true); // mobile Drawer
    }
  };

  const handleCloseAllMenus = () => {
    handleMenuClose(); // desktop
    setDrawerOpen(false); // mobile
  };

  const menuItems = (
    <>
      <Link to='/jobfind' style={{ textDecoration: 'none' }}>
        <MenuItem className={styles.menuItem} onClick={handleCloseAllMenus}>
          <img src={item1} alt='Find A Job' className={styles.menuIcon} />
          <Paragraph size='16px' color='#2C3F3C' bold='600'>
            {translate('Find A Job')}
          </Paragraph>
        </MenuItem>
      </Link>

      <Link to='/companies' style={{ textDecoration: 'none' }}>
        <MenuItem className={styles.menuItem} onClick={handleCloseAllMenus}>
          <img src={item2} alt='For Companies' className={styles.menuIcon} />
          <Paragraph size='16px' color='#2C3F3C' bold='600'>
            {translate('For Companies')}
          </Paragraph>
        </MenuItem>
      </Link>

      <Link to='/about' style={{ textDecoration: 'none' }}>
        <MenuItem className={styles.menuItem} onClick={handleCloseAllMenus}>
          <img src={item3} alt='About Us' className={styles.menuIcon} />
          <Paragraph size='16px' color='#2C3F3C' bold='600'>
            {translate('About Us')}
          </Paragraph>
        </MenuItem>
      </Link>

      <MenuItem className={styles.menuItem} onClick={handleCloseAllMenus}>
        <img src={item4} alt='Contact Us' className={styles.menuIcon} />
        <Paragraph size='16px' color='#2C3F3C' bold='600'>
          {translate('Contact Us')}
        </Paragraph>
      </MenuItem>
    </>
  );

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <React.Fragment>
      {/* ───────── HEADER CONTAINER ───────── */}
      <div
        className={`${styles['header-container']} ${
          scrolled ? styles.scrolled : ''
        }`}
      >
        {/* ───────── TOP BAR ───────── */}
        <div className={styles['header-topbar']}>
          {/* LEFT LOGO + LABELS */}
          <div className={styles['header-left']}>
            <Link to='/' className={styles.mainLogo}>
              <img src={MainLogo} alt='MainLogo' />
            </Link>

            <div className={styles['header-labels']}>
              <Link to='/' className={styles.navLink}>
                <Paragraph
                  textAlign='center'
                  lineHeight='54px'
                  color='#83BFB3'
                  bold='600'
                  fontfamily='var(--primary-font)'
                  className={styles.labels}
                >
                  {translate('Home')}
                </Paragraph>
              </Link>
              <Link to='/jobfind' className={styles.navLink}>
                <Paragraph
                  textAlign='center'
                  lineHeight='54px'
                  color='#83BFB3'
                  bold='600'
                  fontfamily='var(--primary-font)'
                  className={styles.labels}
                >
                  {translate('Find A Job')}
                </Paragraph>
              </Link>
              <Link to='/companies' className={styles.navLink}>
                <Paragraph
                  size='16px'
                  textAlign='center'
                  lineHeight='54px'
                  color='#83BFB3'
                  bold='600'
                  fontfamily='var(--primary-font)'
                  className={styles.labels}
                >
                  {translate('For Companies')}
                </Paragraph>
              </Link>
              <Link to='/about' className={styles.navLink}>
                <Paragraph
                  size='16px'
                  textAlign='center'
                  lineHeight='54px'
                  color='#83BFB3'
                  bold='600'
                  fontfamily='var(--primary-font)'
                  className={styles.labels}
                >
                  {translate('About Us')}
                </Paragraph>
              </Link>
            </div>
          </div>

          {/* RIGHT LOGO + MENU */}
          <div className={styles['header-right']}>
            <Link to='/login' className={styles.loginLogo}>
              <img src={LoginLogo} alt='Login Logo' />
            </Link>

            <Button
              label='Menu'
              bg='#83BFB3'
              hvbg='#6DAAA0'
              br='10px'
              color='#ffffff'
              bold='600'
              className={styles.button}
              onClick={handleMenuButtonClick}
            />
          </div>

          {/* MOBILE DRAWER (< 768px) */}
          {!isDesktop && (
            <Drawer
              anchor='right'
              open={drawerOpen}
              onClose={handleCloseAllMenus}
              slotProps={{
                paper: {
                  sx: {
                    width: '100vw', // ✅ full viewport width
                    maxWidth: '100vw',
                    borderRadius: 0, // optional: edge-to-edge
                  },
                },
              }}
            >
              {/* Drawer Header */}
              <div className={styles.drawerHeader}>
                <Paragraph size='18px' color='#2c3f3c' bold='600'>
                  {translate('Menu')}
                </Paragraph>
                <IconButton
                  onClick={handleCloseAllMenus}
                  aria-label='Close menu'
                  sx={{ fontSize: 32 }} // bigger X icon
                >
                  <CloseIcon fontSize='inherit' />
                </IconButton>
              </div>
              {/* Conditional: Login or Profile 
                // <div className={styles.drawerLoginButton}>
                //   <Button
                //     label={translate('Login')}
                //     bg='#83BFB3'
                //     hvbg='#6DAAA0'
                //     br='10px'
                //     color='#ffffff'
                //     bold='600'
                //     className={styles.Button1}
                //     onClick={() => {}}
                //   />
                // </div> */}
              <div className={styles.profileBox}>
                {/* Profile Info */}
                <div className={styles.profileHeader}>
                  <img
                    src={HProfile1}
                    alt='Profile'
                    className={styles.profileImage}
                  />
                  <div className={styles.profileText}>
                    <Paragraph size='16px' color='#496A63' bold='700'>
                      {translate('John Cena')}
                    </Paragraph>
                    <Paragraph size='12px' color='#A3A3A3'>
                      {translate('UI/UX Designer')}
                    </Paragraph>
                  </div>
                </div>

                {/* Bio Paragraph */}
                <Paragraph
                  size='14px'
                  color='#A3A3A3'
                  className={styles.profileBio}
                >
                  {translate(
                    'Full stack product designer with hands-on experience in solving problems for clients ranging from Real Estate, Hospitality, Rentals, On Demand Healthcare, IT Services & Social Network among others.'
                  )}
                  <br />
                  <br />
                  {translate(
                    'I’ve good communication skills, well-defined process for engagement, a toolkit for collaboration & a user-centered approach to design.'
                  )}
                </Paragraph>

                {/* Skills */}
                <div className={styles.skillsBox}>
                  <Paragraph
                    size='16px'
                    color='#496A63'
                    bold='600'
                    className={styles.skillsTitle}
                  >
                    {translate('Skills')}
                  </Paragraph>
                  <div className={styles.skillsList}>
                    {[
                      'UI/UX',
                      'Adobe XD',
                      'Wireframe',
                      'Adobe Photoshop',
                      'UI Design',
                    ].map((skill, idx) => (
                      <div key={idx} className={styles.skillItem}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <Link to='/profile' style={{ textDecoration: 'none' }}>
                  <Button
                    label={translate('Go to Profile')}
                    bg='#83BFB3'
                    hvbg='#6DAAA0'
                    br='10px'
                    color='#ffffff'
                    bold='600'
                    onClick={() => {
                      handleCloseAllMenus(); // Close the drawer
                    }}
                    className={styles.button2}
                  />
                </Link>
              </div>
              {/* Drawer Content */}
              {menuItems}
            </Drawer>
          )}

          {/* DESKTOP MENU (>= 768px) */}
          {isDesktop && (
            <Menu
              anchorEl={MenuAnchorEl}
              open={openMenu}
              onClose={handleCloseAllMenus}
              disableAutoFocusItem
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              slotProps={{
                paper: {
                  sx: {
                    mt: '17px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                  },
                },
              }}
            >
              {menuItems}
              <Link to='/profile' style={{ textDecoration: 'none' }}>
                <MenuItem
                  className={styles.menuItem}
                  onClick={handleCloseAllMenus}
                >
                  <img src={item3} alt='Profile' className={styles.menuIcon} />
                  <Paragraph size='16px' color='#2C3F3C' bold='600'>
                    {translate('Profile')}
                  </Paragraph>
                </MenuItem>
              </Link>
            </Menu>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
