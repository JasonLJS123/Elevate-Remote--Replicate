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
import toast from 'react-simple-toasts';
import Loader from 'react-js-loader';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Paragraph from '../../components/Typography/Paragraph/Paragraph';
import Button from '../../components/Button/Button';
import useUser from '../../hooks/useUser';
import useLocales from '../../hooks/useLocales';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// assets
import MainLogo from '../../assets/images/header/Main-Logo.png';
import LoginLogo from '../../assets/images/header/Login-Logo.svg';
import item1 from '../../assets/images/header/item1.svg';
import item2 from '../../assets/images/header/item2.svg';
import item3 from '../../assets/images/header/item3.svg';
import item4 from '../../assets/images/header/item4.svg';

export default function Header() {
  const navigate = useNavigate();
  const { get_user } = useUser();
  const { translate, currentLang } = useLocales();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <img src={MainLogo} alt='MainLogo' />

            <div className={styles['header-labels']}>
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
            </div>
          </div>

          {/* RIGHT LOGO + MENU */}
          <div className={styles['header-right']}>
            <img src={LoginLogo} alt='LoginLogo' />
            <Button
              label='Menu'
              bg='#83BFB3' // button background color
              hvbg='#6DAAA0' // hover background (optional)
              br='10px' // border radius
              color='#ffffff' // text color
              bold='600' // text boldness
              className={styles.button}
              onClick={handleClick}
            />

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              PaperProps={{
                sx: {
                  mt: '17px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                },
              }}
            >
              <MenuItem onClick={handleClose} className={styles.menuItem}>
                <img src={item1} alt='Find A Job' className={styles.menuIcon} />

                <Paragraph
                  size='16px'
                  color='#2C3F3C'
                  bold='600'
                  fontfamily='var(--primary-font)'
                  className={styles.menuText}
                >
                  Find A Job
                </Paragraph>
              </MenuItem>

              <MenuItem onClick={handleClose} className={styles.menuItem}>
                <img
                  src={item2}
                  alt='For Companies'
                  className={styles.menuIcon}
                />

                <Paragraph
                  size='16px'
                  color='#2C3F3C'
                  bold='600'
                  fontfamily='var(--primary-font)'
                  className={styles.menuText}
                >
                  For Companies
                </Paragraph>
              </MenuItem>

              <MenuItem onClick={handleClose} className={styles.menuItem}>
                <img src={item3} alt='About Us' className={styles.menuIcon} />
                <Paragraph
                  size='16px'
                  color='#2C3F3C'
                  bold='600'
                  fontfamily='var(--primary-font)'
                  className={styles.menuText}
                >
                  About Us
                </Paragraph>
              </MenuItem>

              <MenuItem onClick={handleClose} className={styles.menuItem}>
                <img src={item4} alt='Contact Us' className={styles.menuIcon} />

                <Paragraph
                  size='16px'
                  color='#2C3F3C'
                  bold='600'
                  fontfamily='var(--primary-font)'
                  className={styles.menuText}
                >
                  Contact Us
                </Paragraph>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
