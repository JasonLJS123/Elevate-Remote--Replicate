
import styles from './footer.module.scss';
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

import Logo from '../../assets/images/header/Main-Logo.png';
import Mail from '../../assets/images/footer/Mail.svg';
import Phone from '../../assets/images/footer/Phone.svg';
import Instagram from '../../assets/images/footer/Instagram.svg';
import Facebook from '../../assets/images/footer/Facebook.svg';
import Twitter from '../../assets/images/footer/Twitter.svg';
import Linkedin from '../../assets/images/footer/Linkedin.svg';

export default function Footer() {
    const navigate = useNavigate();
    const { get_user } = useUser();
    const { translate, currentLang } = useLocales();

    return (
        <React.Fragment>

            <div className={styles.theFooter}>

                {/* BOX 1 LEFT */}
                <div className={styles.Box1}>

                    <div className={styles['logo-top']}>
                        <img src={Logo} alt="Logo" />
                    </div>

                    <div className={styles['box-horizontal']}>
                        <img src={Mail} alt="Mail" />
                        <Paragraph
                            bold="700"
                            color="#496a63"
                            className={styles.text1}
                        >
                            {translate("contactus@elevatematch.com")}
                        </Paragraph>
                    </div>

                    <div className={styles['box-horizontal']}>
                        <img src={Phone} alt="Phone" />
                        <Paragraph
                            bold="700"
                            color="#496a63"
                            className={styles.text1}
                        >
                            {translate("11 234 56 77 89 90")}
                        </Paragraph>
                    </div>

                    <div className={styles['text-bottom']}>
                        <Paragraph
                            bold="600"
                            color="#496a63"
                            className={styles.text2}
                        >
                            {translate("© All Rights Elevate Match")}
                        </Paragraph>
                    </div>

                </div>

                {/* BOX 2 RIGHT */}
                <div className={styles.Box2}>

                    <div className={styles.icons}>
                        <img src={Instagram} alt="Instagram" />
                        <img src={Facebook} alt="Facebook" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={Linkedin} alt="Linkedin" />
                    </div>

                    <div className={styles.labels}>
                        <Paragraph
                            fontfamily="Montserrat, sans-serif"
                            size="16px"
                            bold="400"
                            color="#496a63"
                            lineHeight="22px"
                        >
                            {translate("Find a Job")}
                        </Paragraph>

                        <Paragraph
                            fontfamily="Montserrat, sans-serif"
                            size="16px"
                            bold="400"
                            color="#496a63"
                            lineHeight="22px"
                        >
                            {translate("For Companies")}
                        </Paragraph>

                        <Paragraph
                            fontfamily="Montserrat, sans-serif"
                            size="16px"
                            bold="400"
                            color="#496a63"
                            lineHeight="22px"
                        >
                            {translate("Blog")}
                        </Paragraph>

                        <Paragraph
                            fontfamily="Montserrat, sans-serif"
                            size="16px"
                            bold="400"
                            color="#496a63"
                            lineHeight="22px"
                        >
                            {translate("About Us")}
                        </Paragraph>

                        <Paragraph
                            fontfamily="Montserrat, sans-serif"
                            size="16px"
                            bold="400"
                            color="#496a63"
                            lineHeight="22px"
                        >
                            {translate("Contact Us")}
                        </Paragraph>
                    </div>

                </div>
                {/* <div className="custo">
    <img src="" alt="" />
</div> */}
            </div>

        </React.Fragment>
    );
}
