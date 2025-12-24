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
import styles from './jobfinding.module.scss';
import Menu from '@mui/material/Menu';
import { MenuItem, styled } from '@mui/material';

//assets
import JS1Image1 from '../../assets/images/jobfind/JS1Image1.png';
import JS1Image2 from '../../assets/images/jobfind/JS1Image2.png';
import JS1Image3 from '../../assets/images/jobfind/JS1Image3.png';
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

export default function Job_Finding() {
  const navigate = useNavigate();
  const { get_user } = useUser();
  const { translate, currentLang } = useLocales();

  // Work types
  const [workTypeAnchorEl, setWorkTypeAnchorEl] = useState(null);
  const openWorkType = Boolean(workTypeAnchorEl);
  const handleWorkTypeClick = (e) => setWorkTypeAnchorEl(e.currentTarget);
  const handleWorkTypeClose = () => setWorkTypeAnchorEl(null);

  const worktypes = [
    translate('Full Time'),
    translate('Part Time'),
    translate('Contract'),
    translate('Casual'),
  ];

  // Workplaces
  const [workplaceAnchorEl, setWorkplaceAnchorEl] = useState(null);
  const openWorkplace = Boolean(workplaceAnchorEl);
  const handleWorkplaceClick = (e) => setWorkplaceAnchorEl(e.currentTarget);
  const handleWorkplaceClose = () => setWorkplaceAnchorEl(null);

  const workplaces = [
    translate('Remote'),
    translate('Hybrid'),
    translate('On-site'),
  ];

  // Pay
  const [PayAnchorEl, setPayAnchorEl] = useState(null);
  const openPay = Boolean(PayAnchorEl);
  const handlePayClick = (e) => setPayAnchorEl(e.currentTarget);
  const handlePayClose = () => setPayAnchorEl(null);

  const pay = [
    translate('3k to 4k'),
    translate('4k to 5k'),
    translate('5k to 6k'),
    translate('6k to 7k'),
    translate('7k to 8k'),
    translate('8k & above'),
  ];

  // Country
  const [CountryAnchorEl, setCountryAnchorEl] = useState(null);
  const openCountry = Boolean(CountryAnchorEl);
  const handleCountryClick = (e) => setCountryAnchorEl(e.currentTarget);
  const handleCountryClose = () => setCountryAnchorEl(null);

  const country = [
    translate('Afghanistan'),
    translate('Albania'),
    translate('Algeria'),
    translate('American Samoa'),
    translate('Angola'),
    translate('Anguilla'),
  ];

  //Circle
  const [circleStates, setCircleStates] = useState({});

  const Circle = styled('div')(({ selected }) => ({
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    border: '1px solid #fff',
    flexShrink: 0,
    backgroundColor: selected ? '#FFFFFF' : 'transparent',
    transition: 'background-color 0.2s ease',
  }));

  //Selected
  const [selectedOptions, setSelectedOptions] = useState({});

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
            <div className={styles.JobFindPage}>
              <div className={styles.JSection1}>
                <div className={styles.JS1Box}>
                  <div className={styles.JS1Content}>
                    <div className={styles.JS1Text}>
                      <Paragraph
                        size={'clamp(28px, 4vw, 42px)'}
                        lineHeight={'clamp(32px, 5vw, 42px)'}
                        bold={'700'}
                        color={'#FFFFFF'}
                      >
                        {translate('The right match')}
                        <br />
                        {translate('changes everything')}
                      </Paragraph>
                    </div>

                    <div className={styles.JS1Text2}>
                      <Paragraph
                        size={'clamp(14px, 2vw, 16px)'}
                        lineHeight={'clamp(20px, 3vw, 24px)'}
                        bold={'400'}
                        color={'#FFFFFF'}
                      >
                        {translate(
                          'Your dream job is out there — let’s find it together.'
                        )}
                      </Paragraph>
                    </div>
                    <div className={styles.JS1Container}>
                      <div className={styles.JS1SearchWrapper}>
                        <div className={styles.JS1InputWrapper}>
                          <FormInput
                            bg='white'
                            padding={'20px 33px'}
                            size={'clamp(12px, 2.2vw, 14px)'}
                            phfontweight='400'
                            phtextColor={'#83BFB3'}
                            placeholder={translate('Search by job title')}
                            className={styles.JS1Input}
                          />

                          <div className={styles.JS1Image}>
                            <img src={JS1Image1} alt='JS1Image1' />
                          </div>
                        </div>
                      </div>

                      <div className={styles.JS1RowBoxes}>
                        <div className={styles.JS1Boxes}>
                          <div
                            className={styles.JS1Text3}
                            onClick={handleWorkTypeClick}
                          >
                            <Paragraph
                              size={'clamp(12px, 2.2vw, 14px)'}
                              lineHeight={'clamp(20px, 3vw, 24px)'}
                              bold={'600'}
                              color={'#FFFFFF'}
                            >
                              {translate('Work Types')}
                            </Paragraph>
                          </div>
                          <div className={styles.JS1Image2}>
                            <img src={JS1Image2} alt='JS1Image' />
                          </div>

                          <Menu
                            anchorEl={workTypeAnchorEl}
                            open={openWorkType}
                            onClose={handleWorkTypeClose}
                            disableAutoFocusItem
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'center',
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'center',
                            }}
                            slotProps={{
                              paper: {
                                sx: {
                                  mt: '15px',
                                  borderRadius: '10px',
                                  overflow: 'hidden',
                                  bgcolor: '#496A63',
                                  width: '139px',
                                },
                              },
                            }}
                          >
                            {worktypes.map((option) => (
                              <MenuItem key={option}>
                                <Circle
                                  selected={!!circleStates[option]} // default false
                                  onClick={() =>
                                    setCircleStates((prev) => ({
                                      ...prev,
                                      [option]: !prev[option], // toggle only this option
                                    }))
                                  }
                                />
                                <Paragraph
                                  size='12px'
                                  lineHeight='24px'
                                  bold={circleStates[option] ? '700' : '400'}
                                  color='#FFFFFF'
                                  style={{ paddingLeft: '5px' }}
                                >
                                  {translate(option)}
                                </Paragraph>
                              </MenuItem>
                            ))}
                          </Menu>
                        </div>

                        <div className={styles.JS1Boxes}>
                          <div
                            className={styles.JS1Text3}
                            onClick={handleWorkplaceClick}
                          >
                            <Paragraph
                              size={'clamp(12px, 2.2vw, 14px)'}
                              lineHeight={'clamp(20px, 3vw, 24px)'}
                              bold={'600'}
                              color={'#FFFFFF'}
                            >
                              {translate('Workplace')}
                            </Paragraph>
                          </div>
                          <div className={styles.JS1Image2}>
                            <img src={JS1Image2} alt='JS1Image' />
                          </div>

                          <Menu
                            anchorEl={workplaceAnchorEl}
                            open={openWorkplace}
                            onClose={handleWorkplaceClose}
                            disableAutoFocusItem
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'center',
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'center',
                            }}
                            slotProps={{
                              paper: {
                                sx: {
                                  mt: '15px',
                                  borderRadius: '10px',
                                  overflow: 'hidden',
                                  bgcolor: '#496A63',
                                  width: '139px',
                                },
                              },
                            }}
                          >
                            {workplaces.map((option) => (
                              <MenuItem key={option}>
                                <Circle
                                  selected={!!circleStates[option]}
                                  onClick={() =>
                                    setCircleStates((prev) => ({
                                      ...prev,
                                      [option]: !prev[option],
                                    }))
                                  }
                                />
                                <Paragraph
                                  size='12px'
                                  lineHeight='24px'
                                  bold={circleStates[option] ? '700' : '400'}
                                  color='#FFFFFF'
                                  style={{ paddingLeft: '5px' }}
                                >
                                  {translate(option)}
                                </Paragraph>
                              </MenuItem>
                            ))}
                          </Menu>
                        </div>

                        <div className={styles.JS1Boxes}>
                          <div
                            className={styles.JS1Text3}
                            onClick={handlePayClick}
                          >
                            <Paragraph
                              size={'clamp(12px, 2.2vw, 14px)'}
                              lineHeight={'clamp(20px, 3vw, 24px)'}
                              bold={'600'}
                              color={'#FFFFFF'}
                            >
                              {translate('Pay')}
                            </Paragraph>
                          </div>
                          <div className={styles.JS1Image2}>
                            <img src={JS1Image2} alt='JS1Image' />
                          </div>

                          <Menu
                            anchorEl={PayAnchorEl}
                            open={openPay}
                            onClose={handlePayClose}
                            disableAutoFocusItem
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'center',
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'center',
                            }}
                            slotProps={{
                              paper: {
                                sx: {
                                  mt: '15px',
                                  borderRadius: '10px',
                                  overflow: 'hidden',
                                  bgcolor: '#496A63',
                                  width: '139px',
                                },
                              },
                            }}
                          >
                            {pay.map((option) => (
                              <MenuItem key={option}>
                                <Circle
                                  selected={!!circleStates[option]}
                                  onClick={() =>
                                    setCircleStates((prev) => ({
                                      ...prev,
                                      [option]: !prev[option],
                                    }))
                                  }
                                />
                                <Paragraph
                                  size='12px'
                                  lineHeight='24px'
                                  bold={circleStates[option] ? '700' : '400'}
                                  color='#FFFFFF'
                                  style={{ paddingLeft: '5px' }}
                                >
                                  {translate(option)}
                                </Paragraph>
                              </MenuItem>
                            ))}
                          </Menu>
                        </div>

                        <div className={styles.JS1Boxes}>
                          <div
                            className={styles.JS1Text3}
                            onClick={handleCountryClick}
                          >
                            <Paragraph
                              size={'clamp(12px, 2.2vw, 14px)'}
                              lineHeight={'clamp(20px, 3vw, 24px)'}
                              bold={'600'}
                              color={'#FFFFFF'}
                            >
                              {translate('Country')}
                            </Paragraph>
                          </div>
                          <div className={styles.JS1Image2}>
                            <img src={JS1Image2} alt='JS1Image' />
                          </div>

                          <Menu
                            anchorEl={CountryAnchorEl}
                            open={openCountry}
                            onClose={handleCountryClose}
                            disableAutoFocusItem
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'center',
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'center',
                            }}
                            slotProps={{
                              paper: {
                                sx: {
                                  mt: '15px',
                                  borderRadius: '10px',
                                  overflow: 'hidden',
                                  bgcolor: '#496A63',
                                  width: '139px',
                                },
                              },
                            }}
                          >
                            {country.map((option) => (
                              <MenuItem
                                key={option}
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() =>
                                  setSelectedOptions((prev) => ({
                                    ...prev,
                                    [option]: !prev[option],
                                  }))
                                }
                              >
                                <Paragraph
                                  size='12px'
                                  lineHeight='24px'
                                  bold={selectedOptions[option] ? '700' : '400'}
                                  color='#FFFFFF'
                                  style={{ paddingLeft: '5px' }}
                                >
                                  {translate(option)}
                                </Paragraph>
                              </MenuItem>
                            ))}
                          </Menu>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className={styles.JS1Image3}>
                    <img src={JS1Image3} alt='JS1Image3' />
                  </div>
                </div>
              </div>

              <div className={styles.JSection2}>
                <div className={styles.JS2Box}>
                  <Paragraph textAlign='left' className={styles.JS2Title}>
                    <span style={{ color: '#2C3F3C' }}>
                      {translate('Most Popular')}{' '}
                    </span>
                    <span style={{ color: '#83BFB3' }}>
                      {translate('Categories')}
                    </span>
                  </Paragraph>

                  <Paragraph
                    textAlign='right'
                    color={'#496a63'}
                    className={styles.JS2Text}
                  >
                    {translate('All Categories')}
                  </Paragraph>
                </div>

                <div className={styles.JS2Boxes}>
                  <div className={styles.JS2BoxItem}>
                    <div className={styles.JS2BoxContent}>
                      <img
                        src={HS3Image1}
                        alt='HS3Image1'
                        className={styles.boxIcon}
                      />

                      <Paragraph textAlign='left' className={styles.boxTitle}>
                        {translate('Design &')}
                        <br />
                        {translate('Development')}
                      </Paragraph>

                      <Paragraph textAlign='left' className={styles.boxText}>
                        {translate('2,000 Vacancies')}
                      </Paragraph>
                    </div>
                  </div>

                  <div className={styles.JS2BoxItem}>
                    <div className={styles.JS2BoxContent}>
                      <img
                        src={HS3Image2}
                        alt='HS3Image2'
                        className={styles.boxIcon}
                      />

                      <Paragraph textAlign='left' className={styles.boxTitle}>
                        {translate('Accounting &')}
                        <br />
                        {translate('Finance')}
                      </Paragraph>

                      <Paragraph textAlign='left' className={styles.boxText}>
                        {translate('2,000 Vacancies')}
                      </Paragraph>
                    </div>
                  </div>

                  <div className={styles.JS2BoxItem}>
                    <div className={styles.JS2BoxContent}>
                      <img
                        src={HS3Image3}
                        alt='HS3Image3'
                        className={styles.boxIcon}
                      />

                      <Paragraph textAlign='left' className={styles.boxTitle}>
                        {translate('Advertising &')}
                        <br />
                        {translate('Media')}
                      </Paragraph>

                      <Paragraph textAlign='left' className={styles.boxText}>
                        {translate('2,000 Vacancies')}
                      </Paragraph>
                    </div>
                  </div>

                  <div className={styles.JS2BoxItem}>
                    <div className={styles.JS2BoxContent}>
                      <img
                        src={HS3Image4}
                        alt='HS3Image4'
                        className={styles.boxIcon}
                      />

                      <Paragraph textAlign='left' className={styles.boxTitle}>
                        {translate('Call Centre &')}
                        <br />
                        {translate('Customer Service')}
                      </Paragraph>

                      <Paragraph textAlign='left' className={styles.boxText}>
                        {translate('2,000 Vacancies')}
                      </Paragraph>
                    </div>
                  </div>

                  <div className={styles.JS2BoxItem}>
                    <div className={styles.JS2BoxContent}>
                      <img
                        src={HS3Image5}
                        alt='HS3Image5'
                        className={styles.boxIcon}
                      />

                      <Paragraph textAlign='left' className={styles.boxTitle}>
                        {translate('Education &')}
                        <br />
                        {translate('Training')}
                      </Paragraph>

                      <Paragraph textAlign='left' className={styles.boxText}>
                        {translate('2,000 Vacancies')}
                      </Paragraph>
                    </div>
                  </div>

                  <div className={styles.JS2BoxItem}>
                    <div className={styles.JS2BoxContent}>
                      <img
                        src={HS3Image6}
                        alt='HS3Image6'
                        className={styles.boxIcon}
                      />

                      <Paragraph textAlign='left' className={styles.boxTitle}>
                        {translate('Consulting &')}
                        <br />
                        {translate('Strategy')}
                      </Paragraph>

                      <Paragraph textAlign='left' className={styles.boxText}>
                        {translate('2,000 Vacancies')}
                      </Paragraph>
                    </div>
                  </div>

                  <div className={styles.JS2BoxItem}>
                    <div className={styles.JS2BoxContent}>
                      <img
                        src={HS3Image7}
                        alt='HS3Image7'
                        className={styles.boxIcon}
                      />

                      <Paragraph textAlign='left' className={styles.boxTitle}>
                        {translate('Community Services')}
                        <br />
                        {translate('& Development')}
                      </Paragraph>

                      <Paragraph textAlign='left' className={styles.boxText}>
                        {translate('2,000 Vacancies')}
                      </Paragraph>
                    </div>
                  </div>

                  <div className={styles.JS2BoxItem}>
                    <div className={styles.JS2BoxContent}>
                      <img
                        src={HS3Image8}
                        alt='HS3Image8'
                        className={styles.boxIcon}
                      />

                      <Paragraph textAlign='left' className={styles.boxTitle}>
                        {translate('CEO &')}
                        <br />
                        {translate('General Management')}
                      </Paragraph>

                      <Paragraph textAlign='left' className={styles.boxText}>
                        {translate('2,000 Vacancies')}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.JSection3}>
                <div className={styles.HS4Box}>
                  <Paragraph textAlign='left' className={styles.HS4Title}>
                    <span style={{ color: '#83BFB3' }}>
                      {translate('Jobs')}{' '}
                    </span>
                    <span style={{ color: '#2C3F3C' }}>
                      {translate('of the day')}
                    </span>
                  </Paragraph>

                  <Paragraph
                    textAlign='right'
                    color={'#496a63'}
                    className={styles.HS4Text}
                  >
                    {translate('View More')}
                  </Paragraph>
                </div>

                <div className={styles.HS4Boxes}>
                  {/* ==== BOX ITEM 1 ==== */}
                  <div className={styles.HS4BoxItem}>
                    <div className={styles.HS4BoxContent}>
                      <div className={styles.HS4Line}></div>

                      {/* Row 1: Icon + Ashford + Location */}
                      <div className={styles.box1}>
                        <img
                          src={HS4Image1}
                          alt='icon'
                          className={styles.boxIcon}
                        />

                        <div className={styles.textbox1}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle1}
                          >
                            {translate('Ashford')}
                          </Paragraph>

                          <div className={styles.boxlocation}>
                            <img
                              src={HS4Location}
                              alt='location'
                              className={styles.boxicon2}
                            />

                            <Paragraph
                              textAlign='left'
                              className={styles.boxtext1}
                            >
                              {translate('Paris')}
                            </Paragraph>
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                      <div className={styles.box2}>
                        <Paragraph
                          textAlign='left'
                          className={styles.boxTitle2}
                        >
                          {translate('Lead Quality Control QA')}
                        </Paragraph>

                        <div className={styles.boxiconbox1}>
                          <img
                            src={HS4Luggage}
                            alt='work'
                            className={styles.boxicon3}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext2}
                          >
                            {translate('Remote')}
                          </Paragraph>

                          <img
                            src={HS4Clock}
                            alt='clock'
                            className={styles.boxicon4}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext3}
                          >
                            {translate('Full Time')}
                          </Paragraph>
                        </div>

                        {/* Long Description */}
                        <Paragraph textAlign='left' className={styles.boxtext4}>
                          {translate(
                            'Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet.'
                          )}
                        </Paragraph>

                        {/* Salary + per month + Apply button */}
                        <div className={styles.textbox2}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle3}
                          >
                            {translate('$ 5,500')}
                          </Paragraph>

                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext5}
                          >
                            {translate('/ month')}
                          </Paragraph>

                          <div className={styles.button1}>
                            {translate('Apply Now')}
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
                        <img
                          src={HS4Image2}
                          alt='icon'
                          className={styles.boxIcon}
                        />

                        <div className={styles.textbox1}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle1}
                          >
                            {translate('Percepta')}
                          </Paragraph>

                          <div className={styles.boxlocation}>
                            <img
                              src={HS4Location}
                              alt='location'
                              className={styles.boxicon2}
                            />

                            <Paragraph
                              textAlign='left'
                              className={styles.boxtext1}
                            >
                              {translate('Berlin')}
                            </Paragraph>
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                      <div className={styles.box2}>
                        <Paragraph
                          textAlign='left'
                          className={styles.boxTitle2}
                        >
                          {translate('Web Developer')}
                        </Paragraph>

                        <div className={styles.boxiconbox1}>
                          <img
                            src={HS4Luggage}
                            alt='work'
                            className={styles.boxicon3}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext2}
                          >
                            {translate('Remote')}
                          </Paragraph>

                          <img
                            src={HS4Clock}
                            alt='clock'
                            className={styles.boxicon4}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext3}
                          >
                            {translate('Full Time')}
                          </Paragraph>
                        </div>

                        {/* Long Description */}
                        <Paragraph textAlign='left' className={styles.boxtext4}>
                          {translate(
                            'Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet.'
                          )}
                        </Paragraph>

                        {/* Salary + per month + Apply button */}
                        <div className={styles.textbox2}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle3}
                          >
                            {translate('$ 5,000')}
                          </Paragraph>

                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext5}
                          >
                            {translate('/ month')}
                          </Paragraph>

                          <div className={styles.button1}>
                            {translate('Apply Now')}
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
                        <img
                          src={HS4Image3}
                          alt='icon'
                          className={styles.boxIcon}
                        />

                        <div className={styles.textbox1}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle1}
                          >
                            {translate('Tesla')}
                          </Paragraph>

                          <div className={styles.boxlocation}>
                            <img
                              src={HS4Location}
                              alt='location'
                              className={styles.boxicon2}
                            />

                            <Paragraph
                              textAlign='left'
                              className={styles.boxtext1}
                            >
                              {translate('Denmark')}
                            </Paragraph>
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                      <div className={styles.box2}>
                        <Paragraph
                          textAlign='left'
                          className={styles.boxTitle2}
                        >
                          {translate('Senior System Engineer')}
                        </Paragraph>

                        <div className={styles.boxiconbox1}>
                          <img
                            src={HS4Luggage}
                            alt='work'
                            className={styles.boxicon3}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext2}
                          >
                            {translate('Office')}
                          </Paragraph>

                          <img
                            src={HS4Clock}
                            alt='clock'
                            className={styles.boxicon4}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext3}
                          >
                            {translate('Part Time')}
                          </Paragraph>
                        </div>

                        {/* Long Description */}
                        <Paragraph textAlign='left' className={styles.boxtext4}>
                          {translate(
                            'Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet.'
                          )}
                        </Paragraph>

                        {/* Salary + per month + Apply button */}
                        <div className={styles.textbox2}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle3}
                          >
                            {translate('$ 800')}
                          </Paragraph>

                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext5}
                          >
                            {translate('/ hour')}
                          </Paragraph>

                          <div className={styles.button1}>
                            {translate('Apply Now')}
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
                        <img
                          src={HS4Image4}
                          alt='icon'
                          className={styles.boxIcon}
                        />

                        <div className={styles.textbox1}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle1}
                          >
                            {translate('Bing Search')}
                          </Paragraph>

                          <div className={styles.boxlocation}>
                            <img
                              src={HS4Location}
                              alt='location'
                              className={styles.boxicon2}
                            />

                            <Paragraph
                              textAlign='left'
                              className={styles.boxtext1}
                            >
                              {translate('Paris')}
                            </Paragraph>
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                      <div className={styles.box2}>
                        <Paragraph
                          textAlign='left'
                          className={styles.boxTitle2}
                        >
                          {translate('Full Stack Engineer')}
                        </Paragraph>

                        <div className={styles.boxiconbox1}>
                          <img
                            src={HS4Luggage}
                            alt='work'
                            className={styles.boxicon3}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext2}
                          >
                            {translate('Hybrid')}
                          </Paragraph>

                          <img
                            src={HS4Clock}
                            alt='clock'
                            className={styles.boxicon4}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext3}
                          >
                            {translate('Part Time')}
                          </Paragraph>
                        </div>

                        {/* Long Description */}
                        <Paragraph textAlign='left' className={styles.boxtext4}>
                          {translate(
                            'Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet.'
                          )}
                        </Paragraph>

                        {/* Salary + per month + Apply button */}
                        <div className={styles.textbox2}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle3}
                          >
                            {translate('$ 1,000')}
                          </Paragraph>

                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext5}
                          >
                            {translate('/ hour')}
                          </Paragraph>

                          <div className={styles.button1}>
                            {translate('Apply Now')}
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
                        <img
                          src={HS4Image5}
                          alt='icon'
                          className={styles.boxIcon}
                        />

                        <div className={styles.textbox1}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle1}
                          >
                            {translate('Exela Movers')}
                          </Paragraph>

                          <div className={styles.boxlocation}>
                            <img
                              src={HS4Location}
                              alt='location'
                              className={styles.boxicon2}
                            />

                            <Paragraph
                              textAlign='left'
                              className={styles.boxtext1}
                            >
                              {translate('Washington DC')}
                            </Paragraph>
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                      <div className={styles.box2}>
                        <Paragraph
                          textAlign='left'
                          className={styles.boxTitle2}
                        >
                          {translate('UI / UX Designer')}
                        </Paragraph>

                        <div className={styles.boxiconbox1}>
                          <img
                            src={HS4Luggage}
                            alt='work'
                            className={styles.boxicon3}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext2}
                          >
                            {translate('Hybrid')}
                          </Paragraph>

                          <img
                            src={HS4Clock}
                            alt='clock'
                            className={styles.boxicon4}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext3}
                          >
                            {translate('Full Time')}
                          </Paragraph>
                        </div>

                        {/* Long Description */}
                        <Paragraph textAlign='left' className={styles.boxtext4}>
                          {translate(
                            'Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet.'
                          )}
                        </Paragraph>

                        {/* Salary + per month + Apply button */}
                        <div className={styles.textbox2}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle3}
                          >
                            {translate('$ 8,500')}
                          </Paragraph>

                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext5}
                          >
                            {translate('/ month')}
                          </Paragraph>

                          <div className={styles.button1}>
                            {translate('Apply Now')}
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
                        <img
                          src={HS4Image6}
                          alt='icon'
                          className={styles.boxIcon}
                        />

                        <div className={styles.textbox1}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle1}
                          >
                            {translate('Amazon')}
                          </Paragraph>

                          <div className={styles.boxlocation}>
                            <img
                              src={HS4Location}
                              alt='location'
                              className={styles.boxicon2}
                            />

                            <Paragraph
                              textAlign='left'
                              className={styles.boxtext1}
                            >
                              {translate('Berlin')}
                            </Paragraph>
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                      <div className={styles.box2}>
                        <Paragraph
                          textAlign='left'
                          className={styles.boxTitle2}
                        >
                          {translate('Social Media Specialist')}
                        </Paragraph>

                        <div className={styles.boxiconbox1}>
                          <img
                            src={HS4Luggage}
                            alt='work'
                            className={styles.boxicon3}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext2}
                          >
                            {translate('Remote')}
                          </Paragraph>

                          <img
                            src={HS4Clock}
                            alt='clock'
                            className={styles.boxicon4}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext3}
                          >
                            {translate('Part Time')}
                          </Paragraph>
                        </div>

                        {/* Long Description */}
                        <Paragraph textAlign='left' className={styles.boxtext4}>
                          {translate(
                            'Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet.'
                          )}
                        </Paragraph>

                        {/* Salary + per month + Apply button */}
                        <div className={styles.textbox2}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle3}
                          >
                            {translate('$ 500')}
                          </Paragraph>

                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext5}
                          >
                            {translate('/ hour')}
                          </Paragraph>

                          <div className={styles.button1}>
                            {translate('Apply Now')}
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
                        <img
                          src={HS4Image7}
                          alt='icon'
                          className={styles.boxIcon}
                        />

                        <div className={styles.textbox1}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle1}
                          >
                            {translate('Aceable, Inc.')}
                          </Paragraph>

                          <div className={styles.boxlocation}>
                            <img
                              src={HS4Location}
                              alt='location'
                              className={styles.boxicon2}
                            />

                            <Paragraph
                              textAlign='left'
                              className={styles.boxtext1}
                            >
                              {translate('London')}
                            </Paragraph>
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                      <div className={styles.box2}>
                        <Paragraph
                          textAlign='left'
                          className={styles.boxTitle2}
                        >
                          {translate('Java Software Engineer')}
                        </Paragraph>

                        <div className={styles.boxiconbox1}>
                          <img
                            src={HS4Luggage}
                            alt='work'
                            className={styles.boxicon3}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext2}
                          >
                            {translate('Office')}
                          </Paragraph>

                          <img
                            src={HS4Clock}
                            alt='clock'
                            className={styles.boxicon4}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext3}
                          >
                            {translate('Full Time')}
                          </Paragraph>
                        </div>

                        {/* Long Description */}
                        <Paragraph textAlign='left' className={styles.boxtext4}>
                          {translate(
                            'Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet.'
                          )}
                        </Paragraph>

                        {/* Salary + per month + Apply button */}
                        <div className={styles.textbox2}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle3}
                          >
                            {translate('$ 8,000')}
                          </Paragraph>

                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext5}
                          >
                            {translate('/ hour')}
                          </Paragraph>

                          <div className={styles.button1}>
                            {translate('Apply Now')}
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
                        <img
                          src={HS4Image8}
                          alt='icon'
                          className={styles.boxIcon}
                        />

                        <div className={styles.textbox1}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle1}
                          >
                            {translate('Google')}
                          </Paragraph>

                          <div className={styles.boxlocation}>
                            <img
                              src={HS4Location}
                              alt='location'
                              className={styles.boxicon2}
                            />

                            <Paragraph
                              textAlign='left'
                              className={styles.boxtext1}
                            >
                              {translate('California')}
                            </Paragraph>
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Job Title + Icons (Remote / Full Time) */}
                      <div className={styles.box2}>
                        <Paragraph
                          textAlign='left'
                          className={styles.boxTitle2}
                        >
                          {translate('Business Admin')}
                        </Paragraph>

                        <div className={styles.boxiconbox1}>
                          <img
                            src={HS4Luggage}
                            alt='work'
                            className={styles.boxicon3}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext2}
                          >
                            {translate('Office')}
                          </Paragraph>

                          <img
                            src={HS4Clock}
                            alt='clock'
                            className={styles.boxicon4}
                          />
                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext3}
                          >
                            {translate('Full Time')}
                          </Paragraph>
                        </div>

                        {/* Long Description */}
                        <Paragraph textAlign='left' className={styles.boxtext4}>
                          {translate(
                            'Lorem ipsum dolor sit amet consectetur. Mi et lobortis sapien vulputate id senectus porta. Sit sed facilisis blandit fames amet.'
                          )}
                        </Paragraph>

                        {/* Salary + per month + Apply button */}
                        <div className={styles.textbox2}>
                          <Paragraph
                            textAlign='left'
                            className={styles.boxTitle3}
                          >
                            {translate('$ 5,000')}
                          </Paragraph>

                          <Paragraph
                            textAlign='left'
                            className={styles.boxtext5}
                          >
                            {translate('/ month')}
                          </Paragraph>

                          <div className={styles.button1}>
                            {translate('Apply Now')}
                          </div>
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
