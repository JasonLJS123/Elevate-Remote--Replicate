import styles from './about.module.scss';
import React, { useEffect, useState, useRef } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Container,
} from '@mui/material';
import Marquee from 'react-fast-marquee';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import toast from 'react-simple-toasts';
import Loader from 'react-js-loader';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Paragraph from '../../components/Typography/Paragraph/Paragraph';
import Button from '../../components/Button/Button';
import useUser from '../../hooks/useUser';
import useLocales from '../../hooks/useLocales';

// assets
import AboutUs from '../../assets/images/about/AboutUs.png';
import List from '../../assets/images/about/List.png';
import AboutImage2 from '../../assets/images/about/AboutImage2.png';

export default function About() {
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
                    {/* Main content wrapper */}
                    <div className={styles.aboutCanvas}>
                        {/* Top Image */}
                        <div className={styles.AImage}>
                            <img src={AboutUs} alt="AboutUs" />
                        </div>

                        {/* Text Section */}
                        <div className={styles.ASection1}>
                            <div className={styles.AS1Box}>
                                <div className={styles.AS1Upper}>
                                    <div className={styles.AS1Title}>
                                        <Paragraph
                                            size="42px"
                                            lineHeight={"56px"}
                                            fontfamily="var(--primary-font)"
                                            bold="700"
                                            textAlign="center"
                                        >
                                            <span style={{ color: '#496a63' }}>{translate("Your")} </span>
                                            <span style={{ color: '#83BFB3' }}>{translate("Path")}</span>
                                            <span style={{ color: '#496a63' }}>{translate(", Our")} </span>
                                            <span style={{ color: '#83BFB3' }}>{translate("Priority")}</span>
                                        </Paragraph>
                                    </div>

                                    <div className={styles.AS1TextBox}>
                                        <div className={styles.AS1TextLeft}>
                                            <Paragraph
                                                fontfamily="var(--primary-font)"
                                                size="14px"
                                                bold="400"
                                                lineHeight="26px"
                                                textAlign="justify"
                                            >
                                                {translate("Founded in the heart of the USA in 2020, Elevate Match was created with a single mission: to simplify the job search process for both candidates and companies. We believe that the right match can elevate careers and businesses alike, and we've built our agency on that principle. With a global reach and a deep understanding of various industries, Elevate Match is dedicated to connecting talent with opportunity, ensuring that every match is not just a job, but a career step that makes a difference.")}
                                            </Paragraph>
                                        </div>

                                        <div className={styles.AS1TextRight}>
                                            <Paragraph
                                                fontfamily="var(--primary-font)"
                                                size="14px"
                                                bold="400"
                                                lineHeight="26px"
                                                textAlign="justify"
                                            >
                                                {translate("At Elevate Match, we make finding the ideal job easier, no matter where you are in the world. Our job recruitment agency serves as a global hub where employees and employers meet, ensuring that the best talent finds the right opportunity. From entry-level positions to executive roles, we match professionals with companies that align with their skills, values, and career goals. Whether you’re a job seeker or an employer, Elevate Match is here to support your journey every step of the way.")}
                                            </Paragraph>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.AS1Lower}>
                                    <div className={styles.AS1Title2}>
                                        <Paragraph
                                            size="36px"
                                            lineHeight={"48px"}
                                            fontfamily="var(--primary-font)"
                                            bold="700"
                                            textAlign="center"
                                        >
                                            <span style={{ color: '#496a63' }}>{translate("Trusted by")} </span>
                                            <span style={{ color: '#83BFB3' }}>{translate("Companies")}</span>
                                            <span style={{ color: '#496a63' }}>{translate("across worldwide")}</span>
                                        </Paragraph>
                                    </div>

                                    <div className={styles.AS1ImageBox}>
                                        <img src={List} alt="List" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Image */}
                        <div className={styles.AImage2}>
                            <img src={AboutImage2} alt="AboutImage2" />
                        </div>
                    </div>
                </React.Fragment>
            )
            }
        </React.Fragment >
    );
}
