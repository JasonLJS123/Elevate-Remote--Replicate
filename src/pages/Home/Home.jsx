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
import FormInput from '../../components/FormInput/FormInput';
import useUser from '../../hooks/useUser';
import useLocales from '../../hooks/useLocales';
import styles from './home.module.scss';


import HS1Image1 from '../../assets/images/home/HS1Image1.png';
import HS1Image2 from '../../assets/images/home/HS1Image2.png';
import HS3Image1 from '../../assets/images/home/HS3Image1.svg';
import HS3Image2 from '../../assets/images/home/HS3Image2.svg';
import HS3Image3 from '../../assets/images/home/HS3Image3.svg';
import HS3Image4 from '../../assets/images/home/HS3Image4.svg';
import HS3Image5 from '../../assets/images/home/HS3Image5.svg';
import HS3Image6 from '../../assets/images/home/HS3Image6.svg';
import HS3Image7 from '../../assets/images/home/HS3Image7.svg';
import HS3Image8 from '../../assets/images/home/HS3Image8.svg';
import HS4Image1 from '../../assets/images/home/HS4Image1.jpg';
import HS4Image2 from '../../assets/images/home/HS4Image2.jpg';
import HS4Image3 from '../../assets/images/home/HS4Image3.jpg';
import HS4Image4 from '../../assets/images/home/HS4Image4.jpg';
import HS4Image5 from '../../assets/images/home/HS4Image5.jpg';
import HS4Image6 from '../../assets/images/home/HS4Image6.jpg';
import HS4Image7 from '../../assets/images/home/HS4Image7.jpg';
import HS4Image8 from '../../assets/images/home/HS4Image8.jpg';
import HS4Location from '../../assets/images/home/HS4Location.svg';
import HS4Luggage from '../../assets/images/home/HS4Luggage.svg';
import HS4Clock from '../../assets/images/home/HS4Clock.svg';
import HS5Image1 from '../../assets/images/home/HS5Image1.svg';
import HS5Image2 from '../../assets/images/home/HS5Image2.svg';
import HS5Image3 from '../../assets/images/home/HS5Image3.svg';

import Shape1 from '../../assets/images/home/Shape1.svg';
import Shape2 from '../../assets/images/home/Shape2.svg';
import Shape3 from '../../assets/images/home/Shape3.svg';
import Google from '../../assets/images/companies/Google1.png';
import Intel from '../../assets/images/companies/Intel.png';
import Apple from '../../assets/images/companies/Apple.png';
import dentsu from '../../assets/images/companies/dentsu.png';
import DDB from '../../assets/images/companies/DDB.png';
import Microsoft from '../../assets/images/companies/Microsoft.png';

export default function Home() {
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
                        <div className={styles.homePage}>
                            <div className={styles.HSection1}>
                                <div className={styles.HS1BgImage}>
                                    <div className={styles.HS1InnerImage1}>
                                        <div className={styles.HS1InnerImage1Size}>
                                            <img src={HS1Image1} alt="HS1Image1" />
                                        </div>
                                    </div>

                                    <div className={styles.HS1InnerImage2}>
                                        <div className={styles.HS1InnerImage2Size}>
                                            <img src={HS1Image2} alt="HS1Image2" />
                                        </div>
                                    </div>

                                    <div className={styles.HS1TextBox}>

                                        <Paragraph

                                            className={styles.HS1Title}
                                        >
                                            <span style={{ color: '#496a63' }}>{translate("Your")} </span>
                                            <span style={{ color: '#83BFB3' }}>{translate("Path,")}</span>
                                            <br />
                                            <span style={{ color: '#496a63' }}>{translate("Our ")} </span>
                                            <span style={{ color: '#83BFB3' }}>{translate("Priority")}</span>
                                        </Paragraph>

                                        <Paragraph

                                            color={"#000000"}
                                            className={styles.HS1Text}
                                        >
                                            {translate("Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day")}
                                        </Paragraph>

                                        <div className={styles.HS1SearchWrapper}>
                                            <div className={styles.HS1InputWrapper}>
                                                <FormInput
                                                    bg="white"
                                                    size="var(--search-font)"
                                                    fontWeight="400"
                                                    phfontweight="400"
                                                    style={{
                                                        "--height": "var(--search-height)",
                                                        "--width": "var(--search-width)",
                                                    }}
                                                />
                                                <span className={styles.HS1InputLabelText}>
                                                    {translate("Enter keywords for best match")}
                                                </span>

                                                {/* Button inside input wrapper */}
                                                <Button
                                                    label={translate("Search")}
                                                    bg="#83BFB3"
                                                    color="#fff"
                                                    br="10px"
                                                    size="var(--button-font)"
                                                    pd="0"
                                                    className={styles.HS1InputButton}
                                                    style={{
                                                        "--button-height": "clamp(34px, 6vw, 40px)",
                                                        "--button-width": "clamp(70px, 20%, 100px)",
                                                    }}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className={styles.HS1Image1}>
                                    <div className={styles.HS1Image1Size}>
                                        <img src={HS1Image1} alt="HS1Image1" />
                                    </div>
                                </div>

                                <div className={styles.HS1Image2}>
                                    <div className={styles.HS1Image2Size}>
                                        <img src={HS1Image2} alt="HS1Image2" />
                                    </div>
                                </div>

                                <div className={styles.HS1Shape1}>
                                    <div className={styles.HS1Shape1Size}>
                                        <img src={Shape1} alt="Shape1" />
                                    </div>
                                </div>

                                <div className={styles.HS1Shape2}>
                                    <div className={styles.HS1Shape2Size}>
                                        <img src={Shape2} alt="Shape2" />
                                    </div>
                                </div>

                                <div className={styles.HS1Shape3}>
                                    <div className={styles.HS1Shape3Size}>
                                        <img src={Shape3} alt="Shape3" />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.HSection2}>
                                <div className={styles.HS2Box}>

                                    <Paragraph
                                        textAlign="center"
                                        className={styles.HS2Title}
                                    >
                                        <span style={{ color: '#2C3F3C' }}>{translate("Trusted by ")} </span>
                                        <span style={{ color: '#83BFB3' }}>{translate("Companies ")}</span>
                                        <span style={{ color: '#2C3F3C' }}>{translate("across worldwide")} </span>
                                    </Paragraph>
                                </div>

                                <div className={styles.HS2ImageBox}>
                                    <div className={styles.logoBox + " " + styles.google}>
                                        <img src={Google} alt="Google" />
                                    </div>

                                    <div className={styles.logoBox + " " + styles.intel}>
                                        <img src={Intel} alt="Intel" />
                                    </div>

                                    <div className={styles.logoBox + " " + styles.apple}>
                                        <img src={Apple} alt="Apple" />
                                    </div>

                                    <div className={styles.logoBox + " " + styles.dentsu}>
                                        <img src={dentsu} alt="Dentsu" />
                                    </div>

                                    <div className={styles.logoBox + " " + styles.ddb}>
                                        <img src={DDB} alt="DDB" />
                                    </div>

                                    <div className={styles.logoBox + " " + styles.microsoft}>
                                        <img src={Microsoft} alt="Microsoft" />
                                    </div>
                                </div>


                            </div>

                            <div className={styles.HSection3}>
                                <div className={styles.HS3Box}>
                                    <Paragraph
                                        textAlign="left"
                                        className={styles.HS3Title}
                                    >
                                        <span style={{ color: '#2C3F3C' }}>{translate("Most Popular")} </span>
                                        <span style={{ color: '#83BFB3' }}>{translate("Categories")}</span>
                                    </Paragraph>

                                    <Paragraph
                                        textAlign="right"
                                        color={"#496a63"}
                                        className={styles.HS3Text}
                                    >
                                        {translate("All Categories")}
                                    </Paragraph>
                                </div>


                                <div className={styles.HS3Boxes}>
                                    <div className={styles.HS3BoxItem}>
                                        <div className={styles.HS3BoxContent}>
                                            <img src={HS3Image1} alt="HS3Image1" className={styles.boxIcon} />

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxTitle}
                                            >
                                                {translate("Design &")}
                                                <br />
                                                {translate("Development")}
                                            </Paragraph>

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxText}
                                            >
                                                {translate("2,000 Vacancies")}
                                            </Paragraph>
                                        </div>
                                    </div>

                                    <div className={styles.HS3BoxItem}>
                                        <div className={styles.HS3BoxContent}>
                                            <img src={HS3Image2} alt="HS3Image2" className={styles.boxIcon} />

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxTitle}
                                            >
                                                {translate("Accounting &")}
                                                <br />
                                                {translate("Finance")}
                                            </Paragraph>

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxText}
                                            >
                                                {translate("2,000 Vacancies")}
                                            </Paragraph>
                                        </div>
                                    </div>

                                    <div className={styles.HS3BoxItem}>
                                        <div className={styles.HS3BoxContent}>
                                            <img src={HS3Image3} alt="HS3Image3" className={styles.boxIcon} />

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxTitle}
                                            >
                                                {translate("Advertising &")}
                                                <br />
                                                {translate("Media")}
                                            </Paragraph>

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxText}
                                            >
                                                {translate("2,000 Vacancies")}
                                            </Paragraph>
                                        </div>
                                    </div>

                                    <div className={styles.HS3BoxItem}>
                                        <div className={styles.HS3BoxContent}>
                                            <img src={HS3Image4} alt="HS3Image4" className={styles.boxIcon} />

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxTitle}
                                            >
                                                {translate("Call Centre &")}
                                                <br />
                                                {translate("Customer Service")}
                                            </Paragraph>

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxText}
                                            >
                                                {translate("2,000 Vacancies")}
                                            </Paragraph>
                                        </div>
                                    </div>

                                    <div className={styles.HS3BoxItem}>
                                        <div className={styles.HS3BoxContent}>
                                            <img src={HS3Image5} alt="HS3Image5" className={styles.boxIcon} />

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxTitle}
                                            >
                                                {translate("Education &")}
                                                <br />
                                                {translate("Training")}
                                            </Paragraph>

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxText}
                                            >
                                                {translate("2,000 Vacancies")}
                                            </Paragraph>
                                        </div>
                                    </div>

                                    <div className={styles.HS3BoxItem}>
                                        <div className={styles.HS3BoxContent}>
                                            <img src={HS3Image6} alt="HS3Image6" className={styles.boxIcon} />

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxTitle}
                                            >
                                                {translate("Consulting &")}
                                                <br />
                                                {translate("Strategy")}
                                            </Paragraph>

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxText}
                                            >
                                                {translate("2,000 Vacancies")}
                                            </Paragraph>
                                        </div>
                                    </div>

                                    <div className={styles.HS3BoxItem}>
                                        <div className={styles.HS3BoxContent}>
                                            <img src={HS3Image7} alt="HS3Image7" className={styles.boxIcon} />

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxTitle}
                                            >
                                                {translate("Community Services")}
                                                <br />
                                                {translate("& Development")}
                                            </Paragraph>

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxText}
                                            >
                                                {translate("2,000 Vacancies")}
                                            </Paragraph>
                                        </div>
                                    </div>

                                    <div className={styles.HS3BoxItem}>
                                        <div className={styles.HS3BoxContent}>
                                            <img src={HS3Image8} alt="HS3Image8" className={styles.boxIcon} />

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxTitle}
                                            >
                                                {translate("CEO &")}
                                                <br />
                                                {translate("General Management")}
                                            </Paragraph>

                                            <Paragraph
                                                textAlign="left"
                                                className={styles.boxText}
                                            >
                                                {translate("2,000 Vacancies")}
                                            </Paragraph>
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className={styles.HSection4}>
                                <div className={styles.HS4Box}>
                                    <Paragraph
                                        textAlign="left"
                                        className={styles.HS4Title}>
                                        <span style={{ color: '#83BFB3' }}>{translate("Jobs")} </span>
                                        <span style={{ color: '#2C3F3C' }}>{translate("of the day")}</span>
                                    </Paragraph>

                                    <Paragraph
                                        textAlign="right"
                                        color={"#496a63"}
                                        className={styles.HS4Text}>
                                        {translate("View More")}
                                    </Paragraph>
                                </div>

                                <div className={styles.HS4Boxes}>

                                    {/* ==== BOX ITEM 1 ==== */}
                                    <div className={styles.HS4BoxItem}>
                                        <div className={styles.HS4BoxContent}>

                                            <div className={styles.HS4Line}></div>

                                            {/* Row 1: Icon + Ashford + Location */}
                                            <div className={styles.box1}>
                                                <img src={HS4Image1} alt="icon" className={styles.boxIcon} />

                                                <div className={styles.textbox1}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle1}>
                                                        {translate("Ashford")}
                                                    </Paragraph>

                                                    <div className={styles.boxlocation}>
                                                        <img src={HS4Location} alt="location" className={styles.boxicon2} />

                                                        <Paragraph textAlign="left" className={styles.boxtext1}>
                                                            {translate("Paris")}
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                                            <div className={styles.box2}>
                                                <Paragraph textAlign="left" className={styles.boxTitle2}>
                                                    {translate("Lead Quality Control QA")}
                                                </Paragraph>

                                                <div className={styles.boxiconbox1}>
                                                    <img src={HS4Luggage} alt="work" className={styles.boxicon3} />
                                                    <Paragraph textAlign="left" className={styles.boxtext2}>
                                                        {translate("Remote")}
                                                    </Paragraph>

                                                    <img src={HS4Clock} alt="clock" className={styles.boxicon4} />
                                                    <Paragraph textAlign="left" className={styles.boxtext3}>
                                                        {translate("Full Time")}
                                                    </Paragraph>
                                                </div>

                                                {/* Long Description */}
                                                <Paragraph textAlign="left" className={styles.boxtext4}>
                                                    {translate(
                                                        "Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet."
                                                    )}
                                                </Paragraph>

                                                {/* Salary + per month + Apply button */}
                                                <div className={styles.textbox2}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle3}>
                                                        {translate("$ 5,500")}
                                                    </Paragraph>

                                                    <Paragraph textAlign="left" className={styles.boxtext5}>
                                                        {translate("/ month")}
                                                    </Paragraph>

                                                    <div className={styles.button1}>
                                                        {translate("Apply Now")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.HS4BoxItem}>
                                        <div className={styles.HS4BoxContent}>

                                            <div className={styles.HS4Line}></div>

                                            {/* Row 1: Icon + Ashford + Location */}
                                            <div className={styles.box1}>
                                                <img src={HS4Image2} alt="icon" className={styles.boxIcon} />

                                                <div className={styles.textbox1}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle1}>
                                                        {translate("Percepta")}
                                                    </Paragraph>

                                                    <div className={styles.boxlocation}>
                                                        <img src={HS4Location} alt="location" className={styles.boxicon2} />

                                                        <Paragraph textAlign="left" className={styles.boxtext1}>
                                                            {translate("Berlin")}
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                                            <div className={styles.box2}>
                                                <Paragraph textAlign="left" className={styles.boxTitle2}>
                                                    {translate("Web Developer")}
                                                </Paragraph>

                                                <div className={styles.boxiconbox1}>
                                                    <img src={HS4Luggage} alt="work" className={styles.boxicon3} />
                                                    <Paragraph textAlign="left" className={styles.boxtext2}>
                                                        {translate("Remote")}
                                                    </Paragraph>

                                                    <img src={HS4Clock} alt="clock" className={styles.boxicon4} />
                                                    <Paragraph textAlign="left" className={styles.boxtext3}>
                                                        {translate("Full Time")}
                                                    </Paragraph>
                                                </div>

                                                {/* Long Description */}
                                                <Paragraph textAlign="left" className={styles.boxtext4}>
                                                    {translate(
                                                        "Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet."
                                                    )}
                                                </Paragraph>

                                                {/* Salary + per month + Apply button */}
                                                <div className={styles.textbox2}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle3}>
                                                        {translate("$ 5,000")}
                                                    </Paragraph>

                                                    <Paragraph textAlign="left" className={styles.boxtext5}>
                                                        {translate("/ month")}
                                                    </Paragraph>

                                                    <div className={styles.button1}>
                                                        {translate("Apply Now")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.HS4BoxItem}>
                                        <div className={styles.HS4BoxContent}>

                                            <div className={styles.HS4Line}></div>

                                            {/* Row 1: Icon + Ashford + Location */}
                                            <div className={styles.box1}>
                                                <img src={HS4Image3} alt="icon" className={styles.boxIcon} />

                                                <div className={styles.textbox1}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle1}>
                                                        {translate("Tesla")}
                                                    </Paragraph>

                                                    <div className={styles.boxlocation}>
                                                        <img src={HS4Location} alt="location" className={styles.boxicon2} />

                                                        <Paragraph textAlign="left" className={styles.boxtext1}>
                                                            {translate("Denmark")}
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                                            <div className={styles.box2}>
                                                <Paragraph textAlign="left" className={styles.boxTitle2}>
                                                    {translate("Senior System Engineer")}
                                                </Paragraph>

                                                <div className={styles.boxiconbox1}>
                                                    <img src={HS4Luggage} alt="work" className={styles.boxicon3} />
                                                    <Paragraph textAlign="left" className={styles.boxtext2}>
                                                        {translate("Office")}
                                                    </Paragraph>

                                                    <img src={HS4Clock} alt="clock" className={styles.boxicon4} />
                                                    <Paragraph textAlign="left" className={styles.boxtext3}>
                                                        {translate("Part Time")}
                                                    </Paragraph>
                                                </div>

                                                {/* Long Description */}
                                                <Paragraph textAlign="left" className={styles.boxtext4}>
                                                    {translate(
                                                        "Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet."
                                                    )}
                                                </Paragraph>

                                                {/* Salary + per month + Apply button */}
                                                <div className={styles.textbox2}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle3}>
                                                        {translate("$ 800")}
                                                    </Paragraph>

                                                    <Paragraph textAlign="left" className={styles.boxtext5}>
                                                        {translate("/ hour")}
                                                    </Paragraph>

                                                    <div className={styles.button1}>
                                                        {translate("Apply Now")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.HS4BoxItem}>
                                        <div className={styles.HS4BoxContent}>

                                            <div className={styles.HS4Line}></div>

                                            {/* Row 1: Icon + Ashford + Location */}
                                            <div className={styles.box1}>
                                                <img src={HS4Image4} alt="icon" className={styles.boxIcon} />

                                                <div className={styles.textbox1}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle1}>
                                                        {translate("Bing Search")}
                                                    </Paragraph>

                                                    <div className={styles.boxlocation}>
                                                        <img src={HS4Location} alt="location" className={styles.boxicon2} />

                                                        <Paragraph textAlign="left" className={styles.boxtext1}>
                                                            {translate("Paris")}
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                                            <div className={styles.box2}>
                                                <Paragraph textAlign="left" className={styles.boxTitle2}>
                                                    {translate("Full Stack Engineer")}
                                                </Paragraph>

                                                <div className={styles.boxiconbox1}>
                                                    <img src={HS4Luggage} alt="work" className={styles.boxicon3} />
                                                    <Paragraph textAlign="left" className={styles.boxtext2}>
                                                        {translate("Hybrid")}
                                                    </Paragraph>

                                                    <img src={HS4Clock} alt="clock" className={styles.boxicon4} />
                                                    <Paragraph textAlign="left" className={styles.boxtext3}>
                                                        {translate("Part Time")}
                                                    </Paragraph>
                                                </div>

                                                {/* Long Description */}
                                                <Paragraph textAlign="left" className={styles.boxtext4}>
                                                    {translate(
                                                        "Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet."
                                                    )}
                                                </Paragraph>

                                                {/* Salary + per month + Apply button */}
                                                <div className={styles.textbox2}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle3}>
                                                        {translate("$ 1,000")}
                                                    </Paragraph>

                                                    <Paragraph textAlign="left" className={styles.boxtext5}>
                                                        {translate("/ hour")}
                                                    </Paragraph>

                                                    <div className={styles.button1}>
                                                        {translate("Apply Now")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.HS4BoxItem}>
                                        <div className={styles.HS4BoxContent}>

                                            <div className={styles.HS4Line}></div>

                                            {/* Row 1: Icon + Ashford + Location */}
                                            <div className={styles.box1}>
                                                <img src={HS4Image5} alt="icon" className={styles.boxIcon} />

                                                <div className={styles.textbox1}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle1}>
                                                        {translate("Exela Movers")}
                                                    </Paragraph>

                                                    <div className={styles.boxlocation}>
                                                        <img src={HS4Location} alt="location" className={styles.boxicon2} />

                                                        <Paragraph textAlign="left" className={styles.boxtext1}>
                                                            {translate("Washington DC")}
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                                            <div className={styles.box2}>
                                                <Paragraph textAlign="left" className={styles.boxTitle2}>
                                                    {translate("UI / UX Designer")}
                                                </Paragraph>

                                                <div className={styles.boxiconbox1}>
                                                    <img src={HS4Luggage} alt="work" className={styles.boxicon3} />
                                                    <Paragraph textAlign="left" className={styles.boxtext2}>
                                                        {translate("Hybrid")}
                                                    </Paragraph>

                                                    <img src={HS4Clock} alt="clock" className={styles.boxicon4} />
                                                    <Paragraph textAlign="left" className={styles.boxtext3}>
                                                        {translate("Full Time")}
                                                    </Paragraph>
                                                </div>

                                                {/* Long Description */}
                                                <Paragraph textAlign="left" className={styles.boxtext4}>
                                                    {translate(
                                                        "Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet."
                                                    )}
                                                </Paragraph>

                                                {/* Salary + per month + Apply button */}
                                                <div className={styles.textbox2}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle3}>
                                                        {translate("$ 8,500")}
                                                    </Paragraph>

                                                    <Paragraph textAlign="left" className={styles.boxtext5}>
                                                        {translate("/ month")}
                                                    </Paragraph>

                                                    <div className={styles.button1}>
                                                        {translate("Apply Now")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.HS4BoxItem}>
                                        <div className={styles.HS4BoxContent}>

                                            <div className={styles.HS4Line}></div>

                                            {/* Row 1: Icon + Ashford + Location */}
                                            <div className={styles.box1}>
                                                <img src={HS4Image6} alt="icon" className={styles.boxIcon} />

                                                <div className={styles.textbox1}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle1}>
                                                        {translate("Amazon")}
                                                    </Paragraph>

                                                    <div className={styles.boxlocation}>
                                                        <img src={HS4Location} alt="location" className={styles.boxicon2} />

                                                        <Paragraph textAlign="left" className={styles.boxtext1}>
                                                            {translate("Berlin")}
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                                            <div className={styles.box2}>
                                                <Paragraph textAlign="left" className={styles.boxTitle2}>
                                                    {translate("Social Media Specialist")}
                                                </Paragraph>

                                                <div className={styles.boxiconbox1}>
                                                    <img src={HS4Luggage} alt="work" className={styles.boxicon3} />
                                                    <Paragraph textAlign="left" className={styles.boxtext2}>
                                                        {translate("Remote")}
                                                    </Paragraph>

                                                    <img src={HS4Clock} alt="clock" className={styles.boxicon4} />
                                                    <Paragraph textAlign="left" className={styles.boxtext3}>
                                                        {translate("Part Time")}
                                                    </Paragraph>
                                                </div>

                                                {/* Long Description */}
                                                <Paragraph textAlign="left" className={styles.boxtext4}>
                                                    {translate(
                                                        "Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet."
                                                    )}
                                                </Paragraph>

                                                {/* Salary + per month + Apply button */}
                                                <div className={styles.textbox2}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle3}>
                                                        {translate("$ 500")}
                                                    </Paragraph>

                                                    <Paragraph textAlign="left" className={styles.boxtext5}>
                                                        {translate("/ hour")}
                                                    </Paragraph>

                                                    <div className={styles.button1}>
                                                        {translate("Apply Now")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.HS4BoxItem}>
                                        <div className={styles.HS4BoxContent}>

                                            <div className={styles.HS4Line}></div>

                                            {/* Row 1: Icon + Ashford + Location */}
                                            <div className={styles.box1}>
                                                <img src={HS4Image7} alt="icon" className={styles.boxIcon} />

                                                <div className={styles.textbox1}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle1}>
                                                        {translate("Aceable, Inc.")}
                                                    </Paragraph>

                                                    <div className={styles.boxlocation}>
                                                        <img src={HS4Location} alt="location" className={styles.boxicon2} />

                                                        <Paragraph textAlign="left" className={styles.boxtext1}>
                                                            {translate("London")}
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                                            <div className={styles.box2}>
                                                <Paragraph textAlign="left" className={styles.boxTitle2}>
                                                    {translate("Java Software Engineer")}
                                                </Paragraph>

                                                <div className={styles.boxiconbox1}>
                                                    <img src={HS4Luggage} alt="work" className={styles.boxicon3} />
                                                    <Paragraph textAlign="left" className={styles.boxtext2}>
                                                        {translate("Office")}
                                                    </Paragraph>

                                                    <img src={HS4Clock} alt="clock" className={styles.boxicon4} />
                                                    <Paragraph textAlign="left" className={styles.boxtext3}>
                                                        {translate("Full Time")}
                                                    </Paragraph>
                                                </div>

                                                {/* Long Description */}
                                                <Paragraph textAlign="left" className={styles.boxtext4}>
                                                    {translate(
                                                        "Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet."
                                                    )}
                                                </Paragraph>

                                                {/* Salary + per month + Apply button */}
                                                <div className={styles.textbox2}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle3}>
                                                        {translate("$ 8,000")}
                                                    </Paragraph>

                                                    <Paragraph textAlign="left" className={styles.boxtext5}>
                                                        {translate("/ hour")}
                                                    </Paragraph>

                                                    <div className={styles.button1}>
                                                        {translate("Apply Now")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.HS4BoxItem}>
                                        <div className={styles.HS4BoxContent}>

                                            <div className={styles.HS4Line}></div>

                                            {/* Row 1: Icon + Ashford + Location */}
                                            <div className={styles.box1}>
                                                <img src={HS4Image8} alt="icon" className={styles.boxIcon} />

                                                <div className={styles.textbox1}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle1}>
                                                        {translate("Google")}
                                                    </Paragraph>

                                                    <div className={styles.boxlocation}>
                                                        <img src={HS4Location} alt="location" className={styles.boxicon2} />

                                                        <Paragraph textAlign="left" className={styles.boxtext1}>
                                                            {translate("California")}
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                                            <div className={styles.box2}>
                                                <Paragraph textAlign="left" className={styles.boxTitle2}>
                                                    {translate("Business Admin")}
                                                </Paragraph>

                                                <div className={styles.boxiconbox1}>
                                                    <img src={HS4Luggage} alt="work" className={styles.boxicon3} />
                                                    <Paragraph textAlign="left" className={styles.boxtext2}>
                                                        {translate("Office")}
                                                    </Paragraph>

                                                    <img src={HS4Clock} alt="clock" className={styles.boxicon4} />
                                                    <Paragraph textAlign="left" className={styles.boxtext3}>
                                                        {translate("Full Time")}
                                                    </Paragraph>
                                                </div>

                                                {/* Long Description */}
                                                <Paragraph textAlign="left" className={styles.boxtext4}>
                                                    {translate(
                                                        "Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet."
                                                    )}
                                                </Paragraph>

                                                {/* Salary + per month + Apply button */}
                                                <div className={styles.textbox2}>
                                                    <Paragraph textAlign="left" className={styles.boxTitle3}>
                                                        {translate("$ 5,000")}
                                                    </Paragraph>

                                                    <Paragraph textAlign="left" className={styles.boxtext5}>
                                                        {translate("/ month")}
                                                    </Paragraph>

                                                    <div className={styles.button1}>
                                                        {translate("Apply Now")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.HSection5}>
                                <div className={styles.HS5Box}>
                                    <Paragraph
                                        textAlign="center"
                                        className={styles.HS5Title}>
                                        <span style={{ color: '#83BFB3' }}>{translate("Find & Hire")} </span>
                                        <span style={{ color: '#2C3F3C' }}>{translate("Experts for any Job")}</span>
                                    </Paragraph>
                                </div>

                                <div className={styles.HS5Box2}>

                                    {/* ===== Item 1 ===== */}
                                    <div className={styles.HS5ContentBox}>
                                        <img src={HS5Image1} alt="HS5 Icon" className={styles.HS5Icon} />

                                        <Paragraph
                                            textAlign="center"
                                            color="#496A63"
                                            className={styles.HS5Title}
                                        >
                                            {translate("Create Account")}
                                        </Paragraph>

                                        <Paragraph
                                            textAlign="center"
                                            color="#496A63"
                                            className={styles.HS5Text}
                                        >
                                            {translate("It’s very easy to create an account and start your journey.")}
                                        </Paragraph>
                                    </div>

                                    {/* ===== Item 2 ===== */}
                                    <div className={styles.HS5ContentBox}>
                                        <img src={HS5Image2} alt="HS5 Icon" className={styles.HS5Icon} />

                                        <Paragraph
                                            textAlign="center"
                                            color="#496A63"
                                            className={styles.HS5Title}
                                        >
                                            {translate("Complete Profile")}
                                        </Paragraph>

                                        <Paragraph
                                            textAlign="center"
                                            color="#496A63"
                                            className={styles.HS5Text}
                                        >
                                            {translate("Complete your profile with all the info to get attention of client.")}
                                        </Paragraph>
                                    </div>

                                    {/* ===== Item 3 ===== */}
                                    <div className={styles.HS5ContentBox}>
                                        <img src={HS5Image3} alt="HS5 Icon" className={styles.HS5Icon} />

                                        <Paragraph
                                            textAlign="center"
                                            color="#496A63"
                                            className={styles.HS5Title}
                                        >
                                            {translate("Apply job or hire")}
                                        </Paragraph>

                                        <Paragraph
                                            textAlign="center"
                                            color="#496A63"
                                            className={styles.HS5Text}
                                        >
                                            {translate("Apply & get your preferable jobs with all the requirements and get it.")}
                                        </Paragraph>
                                    </div>

                                </div>

                            </div>

                            <div className={styles.HSection6}></div>
                        </div>

                    </div>
                </React.Fragment>
            )
            }
        </React.Fragment >
    );
}
