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
import FormInput from '../../components/FormInput/FormInput';
import useUser from '../../hooks/useUser';
import useLocales from '../../hooks/useLocales';
import styles from './login.module.scss';

//assets

import MainLogo from '../../assets/images/header/Main-Logo.png';
import LSImage1 from '../../assets/images/login/SignUpImage.png';

export default function Login() {
  const navigate = useNavigate();
  const { get_user } = useUser();
  const { translate, currentLang } = useLocales();
  const sliderRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const originalMinHeight = document.body.style.minHeight;
    document.body.style.minHeight = 'unset'; // override index.css
    document.body.classList.add('LoginPage');

    return () => {
      document.body.style.minHeight = originalMinHeight; // restore
      document.body.classList.remove('LoginPage');
    };
  }, []);

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
            <div className={styles.LoginPage}>
              <div className={styles.LSection1}>
                {/* Left content */}
                <div className={styles.LeftContent}>
                  <img src={MainLogo} alt='MainLogo' />

                  <Paragraph
                    color={'#496a63'}
                    textAlign={'left'}
                    className={styles.LSTitle}
                  >
                    {translate('Welcome Back,')}
                  </Paragraph>

                  <Paragraph
                    color={'#496a63'}
                    textAlign={'left'}
                    className={styles.LSText}
                  >
                    <span>{translate('Don’t have an account?')} </span>
                    <span
                      style={{ fontWeight: 700, textDecoration: 'Underline' }}
                    >
                      {translate('Sign Up')}
                    </span>
                  </Paragraph>

                  <FormInput
                    className={styles.LSInput1}
                    placeholder={translate('Email / Username')}
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
                    className={styles.LSInput2}
                    placeholder={translate('Password')}
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

                  <Button
                    label={translate('Sign In')}
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
                      marginTop: 'clamp(51.46px, 12.11vw, 155px)',
                      fontFamily: 'var(--primary-font)',
                    }}
                  ></Button>

                  <Paragraph
                    color={'#A3A3A3'}
                    textAlign={'left'}
                    className={styles.LSText2}
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
                    src={LSImage1}
                    alt='LSImage1'
                    className={styles.RightImageMobile}
                  />
                </div>

                {/* Desktop right-side image */}
                <img
                  src={LSImage1}
                  alt='LSImage1'
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
