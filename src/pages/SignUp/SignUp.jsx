import React, { useEffect, useState, useRef } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
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
import FormInput from '../../components/FormInput/FormInput';
import useUser from '../../hooks/useUser';
import useLocales from '../../hooks/useLocales';
import styles from './signup.module.scss';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

//assets

import MainLogo from '../../assets/images/header/Main-Logo.png';
import SUSImage1 from '../../assets/images/signup/SUSImage1.png';
import SUSImage2 from '../../assets/images/signup/SUSImage2.png';
import SUSImage3 from '../../assets/images/signup/SUSImage3.png';
import SUSImage4 from '../../assets/images/signup/SUSImage4.png';
import SUSImage5 from '../../assets/images/signup/SUSImage5.png';
import SUSImage6 from '../../assets/images/signup/SUSImage6.png';
import SUSImage7 from '../../assets/images/login/SignUpImage.png';

export default function SignUp() {
  const navigate = useNavigate();
  const { get_user } = useUser();
  const { translate, currentLang } = useLocales();
  const sliderRef = useRef(null);

  useEffect(() => {
    const originalMinHeight = document.body.style.minHeight;
    document.body.style.minHeight = 'unset'; // override index.css
    document.body.classList.add('SignUpPage');

    return () => {
      document.body.style.minHeight = originalMinHeight; // restore
      document.body.classList.remove('SignUpPage');
    };
  }, []);

  const [country, setCountry] = useState('');

  const countries = [
    { name: 'Afghanistan', img: SUSImage1 },
    { name: 'Albania', img: SUSImage2 },
    { name: 'Algeria', img: SUSImage3 },
    { name: 'American Samoa', img: SUSImage4 },
    { name: 'Angola', img: SUSImage5 },
    { name: 'Anguilla', img: SUSImage6 },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [loading, setLoading] = useState(false);
  const [bannerData, setBannerData] = useState(null);
  const [marqueData, setMarqueData] = useState(null);

  const handleCustomer = async () => {
    // setLoading(true);
    // window.Tawk_API.maximize()
    // window._MEIQIA('showPanel')
    window.LiveChatWidget.call('maximize');
    // window.location.href = csData
    // window.location.href = 'https://line.me/ti/p/9Vc_hv-doA'
    // var resLevel = await customer_services({})
    // if (resLevel.status) {
    //   if (resLevel.data) {
    //     window.location.href = resLevel.data
    //   }
    // } else {
    //   toast(resLevel.message)
    // }
  };

  return (
    <React.Fragment>
      {loading ? (
        <div className='customContainer'>
          <div
            style={{
              display: 'flex',
              height: '100vh',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Loader
              type='bubble-loop'
              bgColor={'var(--primary-color)'}
              size={50}
            />
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div style={{ overflow: 'hidden' }}>
            <div className={styles.SignUpPage}>
              <div className={styles.SUSection1}>
                {/* Left content */}
                <div className={styles.LeftContent}>
                  <img src={MainLogo} alt='MainLogo' />

                  <Paragraph
                    color={'#496a63'}
                    textAlign={'left'}
                    className={styles.SUSTitle}
                  >
                    {translate('Get Started')}
                  </Paragraph>

                  <Paragraph
                    color={'#496a63'}
                    textAlign={'left'}
                    className={styles.SUSText}
                  >
                    <span>{translate('Already have an account?')} </span>
                    <span
                      style={{ fontWeight: 700, textDecoration: 'Underline' }}
                    >
                      {translate('Sign In')}
                    </span>
                  </Paragraph>

                  <FormInput
                    className={styles.SUSInput1}
                    placeholder={translate('Full Name')}
                    size='16px'
                    lineHeight='22px'
                    fontWeight={400}
                    textColor='#A3A3A3'
                    phtextColor='#A3A3A3'
                    border='none'
                    borderradius='0'
                    padding='0'
                    fullWidth={false}
                  />

                  <FormInput
                    className={styles.SUSInput2}
                    placeholder={translate('Email')}
                    size='16px'
                    lineHeight='22px'
                    fontWeight={400}
                    textColor='#A3A3A3'
                    phtextColor='#A3A3A3'
                    border='none'
                    borderradius='0'
                    padding='0'
                    fullWidth={false}
                  />

                  <FormControl className={styles.SUSInput3} variant='standard'>
                    <Select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      displayEmpty
                      IconComponent={ArrowDropDownIcon} // custom arrow
                      renderValue={(selected) => {
                        if (!selected) {
                          return translate('Select Country'); // placeholder when no value
                        }
                        return selected; // just the country name
                      }}
                    >
                      {/* Country options */}
                      {countries.map((c, index) => (
                        <MenuItem
                          key={index}
                          value={c.name}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            paddingTop: '6px',
                            gap: '12px',
                          }}
                        >
                          <img
                            src={c.img}
                            alt={c.name}
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: '50%',
                              objectFit: 'cover',
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontFamily: 'var(--primary-font)',
                              fontSize: '16px',
                              lineHeight: '22px',
                              whiteSpace: 'nowrap',
                              color: '#a3a3a3',
                            }}
                          >
                            {c.name}
                          </span>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Button
                    label={translate('Create Account')}
                    bg='#83BFB3'
                    color='#ffffff'
                    br='10px'
                    size='16px'
                    bold={600}
                    textAlign='center'
                    pd='0'
                    style={{
                      height: '40px',
                      width: '330px',
                      marginTop: 'clamp(23px, 5.47vw, 70px)',
                      fontFamily: 'var(--primary-font)',
                    }}
                  ></Button>

                  <Paragraph
                    color={'#A3A3A3'}
                    textAlign={'left'}
                    className={styles.SUSText2}
                  >
                    <span>{translate('By signing in, I agree to the')} </span>
                    <span style={{ fontWeight: 700 }}>
                      {translate('Term & Conditions')}
                    </span>
                    <br />
                    <span>{translate('and')} </span>
                    <span style={{ fontWeight: 700 }}>
                      {translate('Privacy Policy')}
                    </span>
                  </Paragraph>

                  {/* Mobile/Tablet image below text */}
                  <img
                    src={SUSImage7}
                    alt='SUSImage7'
                    className={styles.RightImageMobile}
                  />
                </div>

                {/* Desktop right-side image */}
                <img
                  src={SUSImage7}
                  alt='SUSImage7'
                  className={styles.RightImageDesktop}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
