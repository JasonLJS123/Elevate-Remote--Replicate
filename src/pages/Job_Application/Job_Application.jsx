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

export default function Job_Application() {
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


                    </div>
                </React.Fragment>
            )
            }
        </React.Fragment >
    );
}