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
import styles from './jobapplication.module.scss';

//assets
import JS1Image1 from '../../assets/images/jobapplication/Google.png';
import JS1Image2 from '../../assets/images/home/HS4Location.svg';
import JS1Image3 from '../../assets/images/jobapplication/JS1Image3.svg';

export default function JobApplication() {
  const navigate = useNavigate();
  const { get_user } = useUser();
  const { translate, currentLang } = useLocales();
  const sliderRef = useRef(null);

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
            <div className={styles.JobApplicationPage}>
              <div className={styles.JSection1}>
                <div className={styles.JS1Box1}>
                  <div className={styles.JS1Top}>
                    <div className={styles.JS1Image1}>
                      <img src={JS1Image1} alt='JS1Image1' />
                    </div>
                    <div className={styles.JS1TextBox1}>
                      <div className={styles.JS1TitleBox1}>
                        <Paragraph size={'24px'} bold={'700'} color={'#496A63'}>
                          {translate('Business Admin')}
                        </Paragraph>

                        <div className={styles.JS1Image2}>
                          <img src={JS1Image2} alt='JS1Image2' />
                        </div>

                        <Paragraph size={'12px'} bold={'400'} color={'#A3A3A3'}>
                          {translate('California, USA')}
                        </Paragraph>

                        <div className={styles.JS1Image3}>
                          <img src={JS1Image3} alt='JS1Image3' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
