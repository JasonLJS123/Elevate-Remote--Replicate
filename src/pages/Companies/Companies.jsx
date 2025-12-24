import Paragraph from '../../components/Typography/Paragraph/Paragraph';
import styles from './companies.module.scss';
import Button from '../../components/Button/Button';
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
import useUser from '../../hooks/useUser';
import useLocales from '../../hooks/useLocales';

// assets
import CompanyBg from '../../assets/images/companies/CompanyBg.png';
import Google from '../../assets/images/companies/Google1.png';
import Intel from '../../assets/images/companies/Intel.png';
import Apple from '../../assets/images/companies/Apple.png';
import dentsu from '../../assets/images/companies/dentsu.png';
import DDB from '../../assets/images/companies/DDB.png';
import Microsoft from '../../assets/images/companies/Microsoft.png';

export default function Companies() {
  const navigate = useNavigate();
  const { get_user } = useUser();
  const { translate, currentLang } = useLocales();
  const sliderRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [loading, setLoading] = useState(false);

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
          <div className={styles['companies-page']}>
            <div className={`${styles.section} ${styles['section-1']}`}>
              {/* INNER CONTAINER */}
              <div className={styles['section1-inner']}>
                {/* ───────── BODY ROW ───────── */}
                <div className={styles['section1-body']}>
                  {/* LEFT IMAGE */}
                  <div className={styles['section1-left-image']}>
                    <img src={CompanyBg} alt='CompanyBg' />
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className={styles['section1-right-content']}>
                    <Paragraph
                      color='#496A63'
                      bold='700'
                      fontfamily='var(--primary-font)'
                      className={styles.S1title}
                    >
                      {translate('Find the best')}{' '}
                      <span style={{ color: '#83BFb3' }}>
                        {' '}
                        {translate('talent')}
                      </span>
                      <br />
                      {translate('for')}{' '}
                      <span style={{ color: '#83BFb3' }}>
                        {' '}
                        {translate('your company')}
                      </span>
                      {translate('.')}
                    </Paragraph>

                    <Paragraph
                      bold='400'
                      color='#496A63'
                      fontfamily='var(--primary-font)'
                      textAlign={'left'}
                      className={styles.S1text}
                    >
                      {translate(
                        'At Elevate Match, we make that process seamless.'
                      )}
                      <br />
                      {translate(
                        'We work closely with you to understand your company’s culture, goals, and the specific skills you’re seeking.'
                      )}
                    </Paragraph>

                    <Button
                      bg={'#83BFB3'}
                      br={'10px'}
                      label={translate('Post A Job')}
                      color={'#ffffff'}
                      bold={'600'}
                      textAlign={'Middle'}
                      className={styles['section1-button']}
                      onClick={() => console.log('Clicked!')}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.section} ${styles['section-2']}`}>
              <div className={styles.S2Lower}>
                <div className={styles.S2Title}>
                  <Paragraph
                    fontfamily='var(--primary-font)'
                    bold='700'
                    textAlign='center'
                    className={styles.S2Text}
                  >
                    <span style={{ color: '#496a63' }}>
                      {translate('Trusted by')}{' '}
                    </span>
                    <span style={{ color: '#83bfb3' }}>
                      {translate('Companies')}
                    </span>
                    <span style={{ color: '#496a63' }}>
                      {translate(' across worldwide')}
                    </span>
                  </Paragraph>
                </div>

                <div className={styles.S2ImageBox}>
                  <div className={styles.logoBox + ' ' + styles.google}>
                    <img src={Google} alt='Google' />
                  </div>

                  <div className={styles.logoBox + ' ' + styles.intel}>
                    <img src={Intel} alt='Intel' />
                  </div>

                  <div className={styles.logoBox + ' ' + styles.apple}>
                    <img src={Apple} alt='Apple' />
                  </div>

                  <div className={styles.logoBox + ' ' + styles.dentsu}>
                    <img src={dentsu} alt='Dentsu' />
                  </div>

                  <div className={styles.logoBox + ' ' + styles.ddb}>
                    <img src={DDB} alt='DDB' />
                  </div>

                  <div className={styles.logoBox + ' ' + styles.microsoft}>
                    <img src={Microsoft} alt='Microsoft' />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.section} ${styles['section-3']}`}>
              <div className={styles.S3TextBox}>
                <Paragraph
                  bold='700'
                  textAlign='center'
                  className={styles.S3Title}
                >
                  <span style={{ color: '#496a63' }}>
                    {translate('What makes us')}{' '}
                  </span>
                  <span style={{ color: '#83bfb3' }}>
                    {translate('unique')}
                  </span>
                </Paragraph>

                <Paragraph
                  bold='400'
                  color='#496A63'
                  className={styles.S3Text}
                  textAlign={'left'}
                >
                  {translate('Our vast network of professionals ensures')}
                  <br />
                  {translate(
                    'that you’ll find candidates who are not just qualified,'
                  )}
                  <br />
                  {translate('but are the perfect fit for your team.')}
                  <br />
                  <br />
                  {translate(
                    'Partner with Elevate Match and take the next step'
                  )}
                  <br />
                  {translate('in building a stronger, more dynamic workforce.')}
                </Paragraph>

                <Button
                  bg={'#83BFB3'}
                  br={'10px'}
                  label={translate('Contact Us Now')}
                  color={'#ffffff'}
                  bold={'600'}
                  textAlign={'center'}
                  className={styles['S3button']}
                  onClick={() => console.log('Clicked!')}
                />
              </div>
            </div>

            <div className={`${styles.section} ${styles['section-4']}`}></div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
