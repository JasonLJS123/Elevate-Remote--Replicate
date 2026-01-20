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
import styles from './profile.module.scss';

//assets
import HProfile1 from '../../assets/images/header/HProfile1.png';

export default function Profile() {
  const navigate = useNavigate();
  const { get_user } = useUser();
  const { translate, currentLang } = useLocales();
  const sliderRef = useRef(null);

  // my new code//
  const [isStatusEdit, setIsStatusEdit] = useState(false);
  const [isBasicEdit, setIsBasicEdit] = useState(false);

  //Status
  const handleStatusEdit = () => {
    setIsStatusEdit(true);
  };

  const handleStatusBack = () => {
    setIsStatusEdit(false);
  };

  const handleStatusSave = () => {
    // save application status logic here
    setIsStatusEdit(false);
  };

  //Basic
  const handleBasicEdit = () => {
    setIsBasicEdit(true);
  };

  const handleBasicBack = () => {
    setIsBasicEdit(false);
  };

  const handleBasicSave = () => {
    // save basic info logic here
    setIsBasicEdit(false);
  };

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
            <div className={styles.ProfilePage}>
              <div className={styles.PSection1}>
                <div className={styles.PS1Box1}>
                  <div className={styles.PS1ContentBox}>
                    {/* Profile Info */}
                    <div className={styles.PS1Header}>
                      <img
                        src={HProfile1}
                        alt='Profile'
                        className={styles.PS1Image}
                      />
                      <div className={styles.PS1Text}>
                        <Paragraph size='16px' color='#496A63' bold='700'>
                          {translate('John Cena')}
                        </Paragraph>
                        <Paragraph size='12px' color='#A3A3A3'>
                          {translate('UI/UX Designer')}
                        </Paragraph>
                      </div>
                    </div>

                    {/* Bio Paragraph */}
                    <Paragraph color='#A3A3A3' className={styles.PS1Bio}>
                      {translate(
                        'Full stack product designer with hands-on experience in solving problems for clients ranging from Real Estate, Hospitality, Rentals, On Demand Healthcare, IT Services & Social Network among others.'
                      )}
                      <br />
                      <br />
                      {translate(
                        'I’ve good communication skills, well-defined process for engagement, a toolkit for collaboration & a user-centered approach to design.'
                      )}
                    </Paragraph>

                    {/* Skills */}
                    <div className={styles.PS1SkillBox}>
                      <Paragraph
                        color='#496A63'
                        bold='600'
                        className={styles.PS1Title1}
                      >
                        {translate('Skills')}
                      </Paragraph>
                      <div className={styles.PS1SkillList}>
                        {[
                          'UI/UX',
                          'Adobe XD',
                          'Wireframe',
                          'Adobe Photoshop',
                          'UI Design',
                        ].map((skill, idx) => (
                          <div key={idx} className={styles.PS1SkillItem}>
                            {translate(skill)}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      label={translate('Edit My Profile')}
                      bg='#83BFB3'
                      hvbg='#6DAAA0'
                      br='10px'
                      color='#ffffff'
                      bold='600'
                      className={styles.PS1Button1}
                    />
                  </div>

                  <div className={styles.PS1ButtonBox}>
                    <Button
                      label={translate('Post A Job')}
                      bg='#83BFB3'
                      hvbg='#6DAAA0'
                      br='10px'
                      color='#ffffff'
                      bold='600'
                      className={styles.PS1Button2}
                    />

                    <Button
                      label={translate('Account Setting')}
                      bg='#83BFB3'
                      hvbg='#6DAAA0'
                      br='10px'
                      color='#ffffff'
                      bold='600'
                      className={styles.PS1Button2}
                    />

                    <Button
                      label={translate('Logout')}
                      bg='#83BFB3'
                      hvbg='#6DAAA0'
                      br='10px'
                      color='#ffffff'
                      bold='600'
                      className={styles.PS1Button2}
                    />
                  </div>
                </div>
                <div className={styles.PS1Box2}>
                  <div className={styles.PS1ContentBox2}>
                    <div className={styles.PS1HeaderBox}>
                      <Paragraph
                        color='#83BFB3'
                        bold='700'
                        className={styles.PS1Title2}
                      >
                        {isStatusEdit
                          ? translate('Application History')
                          : translate('Application Status')}
                      </Paragraph>
                      <Button
                        label={
                          isStatusEdit
                            ? translate('Back')
                            : translate('History')
                        }
                        size={'12px'}
                        bg='#83BFB3'
                        hvbg='#6DAAA0'
                        br='10px'
                        color='#ffffff'
                        bold='600'
                        className={styles.PS1Button3}
                        onClick={
                          isStatusEdit ? handleStatusBack : handleStatusEdit
                        }
                      />
                    </div>

                    {isStatusEdit ? (
                      <div className={styles.PS1CardBox4}>
                        <div className={styles.PS1Row3}>
                          <Button
                            label={translate('Pending')}
                            size='12px'
                            pd={'0px 12px'}
                            bg='#ffffff'
                            hvbg='#ffffff'
                            br='5px'
                            color='#83BFB3'
                            bold='600'
                            className={styles.PS1Button4}
                          />
                          <div className={styles.PS1TextBox5}>
                            <Paragraph
                              size='16px'
                              lineHeight='16px'
                              color='#4D4D4D'
                              bold='700'
                              margin={'0px 0px 5px 0px'}
                            >
                              {translate('Lead Quality Control QA')}
                            </Paragraph>

                            <Paragraph
                              size='16px'
                              lineHeight='16px'
                              color='#A3A3A3'
                              bold='400'
                            >
                              {translate('Ashford')}
                            </Paragraph>
                          </div>
                        </div>

                        <div className={styles.PS1Row3}>
                          <Button
                            label={translate('Pending')}
                            size='12px'
                            pd={'0px 12px'}
                            bg='#ffffff'
                            hvbg='#ffffff'
                            br='5px'
                            color='#83BFB3'
                            bold='600'
                            className={styles.PS1Button4}
                          />
                          <div className={styles.PS1TextBox5}>
                            <Paragraph
                              size='16px'
                              lineHeight='16px'
                              color='#4D4D4D'
                              bold='700'
                              margin={'0px 0px 5px 0px'}
                            >
                              {translate('Web Developer')}
                            </Paragraph>

                            <Paragraph
                              size='16px'
                              lineHeight='16px'
                              color='#A3A3A3'
                              bold='400'
                            >
                              {translate('Percepta')}
                            </Paragraph>
                          </div>
                        </div>

                        <div className={styles.PS1Row3}>
                          <Button
                            label={translate('Pending')}
                            size='12px'
                            pd={'0px 12px'}
                            bg='#ffffff'
                            hvbg='#ffffff'
                            br='5px'
                            color='#83BFB3'
                            bold='600'
                            className={styles.PS1Button4}
                          />
                          <div className={styles.PS1TextBox5}>
                            <Paragraph
                              size='16px'
                              lineHeight='16px'
                              color='#4D4D4D'
                              bold='700'
                              margin={'0px 0px 5px 0px'}
                            >
                              {translate('UI/UX Designer')}
                            </Paragraph>

                            <Paragraph
                              size='16px'
                              lineHeight='16px'
                              color='#A3A3A3'
                              bold='400'
                            >
                              {translate('Exela Movers')}
                            </Paragraph>
                          </div>
                        </div>

                        <div className={styles.PS1Row3}>
                          <Button
                            label={translate('Rejected')}
                            size='12px'
                            pd={'0px 12px'}
                            bg='#ffffff'
                            hvbg='#ffffff'
                            br='5px'
                            color='#83BFB3'
                            bold='600'
                            className={styles.PS1Button4}
                          />
                          <div className={styles.PS1TextBox5}>
                            <Paragraph
                              size='16px'
                              lineHeight='16px'
                              color='#4D4D4D'
                              bold='700'
                              margin={'0px 0px 5px 0px'}
                            >
                              {translate('Social Media Specialist')}
                            </Paragraph>

                            <Paragraph
                              size='16px'
                              lineHeight='16px'
                              color='#A3A3A3'
                              bold='400'
                            >
                              {translate('Amazon')}
                            </Paragraph>
                          </div>
                        </div>

                        <div className={styles.PS1Row3}>
                          <Button
                            label={translate('Accepted')}
                            size='12px'
                            pd={'0px 12px'}
                            bg='#ffffff'
                            hvbg='#ffffff'
                            br='5px'
                            color='#83BFB3'
                            bold='600'
                            className={styles.PS1Button4}
                          />
                          <div className={styles.PS1TextBox5}>
                            <Paragraph
                              size='16px'
                              lineHeight='16px'
                              color='#4D4D4D'
                              bold='700'
                              margin={'0px 0px 5px 0px'}
                            >
                              {translate('Senior System Engineer')}
                            </Paragraph>

                            <Paragraph
                              size='16px'
                              lineHeight='16px'
                              color='#A3A3A3'
                              bold='400'
                            >
                              {translate('Tesla')}
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.PS1CardBox}>
                        <div className={styles.PS1Card1}>
                          <Paragraph
                            size={'32px'}
                            lineHeight={'32px'}
                            color='#83BFB3'
                            bold='700'
                            textAlign={'center'}
                          >
                            {translate('20')}
                          </Paragraph>
                          <Paragraph
                            size={'12px'}
                            lineHeight={'12px'}
                            color='#83BFB3'
                            bold='700'
                            textAlign={'center'}
                          >
                            {translate('Applied Jobs')}
                          </Paragraph>
                        </div>

                        <div className={styles.PS1Card1}>
                          <Paragraph
                            size={'32px'}
                            lineHeight={'32px'}
                            color='#83BFB3'
                            bold='700'
                            textAlign={'center'}
                          >
                            {translate('20')}
                          </Paragraph>
                          <Paragraph
                            size={'12px'}
                            lineHeight={'12px'}
                            color='#83BFB3'
                            bold='700'
                            textAlign={'center'}
                          >
                            {translate('Collected Jobs')}
                          </Paragraph>
                        </div>

                        <div className={styles.PS1Card1}>
                          <Paragraph
                            size={'32px'}
                            lineHeight={'32px'}
                            color='#83BFB3'
                            bold='700'
                            textAlign={'center'}
                          >
                            {translate('10')}
                          </Paragraph>
                          <Paragraph
                            size={'12px'}
                            lineHeight={'12px'}
                            color='#83BFB3'
                            bold='700'
                            textAlign={'center'}
                          >
                            {translate('Job Alerts')}
                          </Paragraph>
                        </div>

                        <div className={styles.PS1Card1}>
                          <Paragraph
                            size={'32px'}
                            lineHeight={'32px'}
                            color='#83BFB3'
                            bold='700'
                            textAlign={'center'}
                          >
                            {translate('15')}
                          </Paragraph>
                          <Paragraph
                            size={'12px'}
                            lineHeight={'12px'}
                            color='#83BFB3'
                            bold='700'
                            textAlign={'center'}
                          >
                            {translate('Offers')}
                          </Paragraph>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={styles.PS1ContentBox3}>
                    <div className={styles.PS1HeaderBox2}>
                      {isBasicEdit && (
                        <Button
                          label={translate('Back')}
                          size='12px'
                          bg='#83BFB3'
                          hvbg='#6DAAA0'
                          br='10px'
                          color='#ffffff'
                          bold='600'
                          className={styles.PS1Button3}
                          onClick={handleBasicBack}
                        />
                      )}

                      <Paragraph
                        color='#83BFB3'
                        bold='700'
                        className={styles.PS1Title2}
                      >
                        {translate('Basic Information')}
                      </Paragraph>

                      <Button
                        label={
                          isBasicEdit ? translate('Save') : translate('Edit')
                        }
                        size='12px'
                        bg='#83BFB3'
                        hvbg='#6DAAA0'
                        br='10px'
                        color='#ffffff'
                        bold='600'
                        className={styles.PS1Button3}
                        onClick={
                          isBasicEdit ? handleBasicSave : handleBasicEdit
                        }
                      />
                    </div>

                    {isBasicEdit ? (
                      <div className={styles.PS1CardBox3}>
                        <div className={styles.PS1Row}>
                          <Paragraph
                            size='12px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('Full Name')}
                          </Paragraph>
                          <Paragraph
                            size='16px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('John Cena')}
                          </Paragraph>
                        </div>

                        <div className={styles.PS1Row}>
                          <Paragraph
                            size='12px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('Years of Working')}
                          </Paragraph>
                          <Paragraph
                            size='16px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('11 Years')}
                          </Paragraph>
                        </div>

                        <div className={styles.PS1Row}>
                          <Paragraph
                            size='12px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('DOB (DD/MM/YYYY)')}
                          </Paragraph>
                          <Paragraph
                            size='16px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('06/02/1998')}
                          </Paragraph>
                        </div>

                        <div className={styles.PS1Row}>
                          <Paragraph
                            size='12px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('CTC')}
                          </Paragraph>
                          <Paragraph
                            size='16px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('12.5 Lac')}
                          </Paragraph>
                        </div>

                        <div className={styles.PS1Row}>
                          <Paragraph
                            size='12px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('Location')}
                          </Paragraph>
                          <Paragraph
                            size='16px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('California, USA')}
                          </Paragraph>
                        </div>

                        <div className={styles.PS1Row}>
                          <Paragraph
                            size='12px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('Email')}
                          </Paragraph>
                          <Paragraph
                            size='16px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('johncena66@gmail.com')}
                          </Paragraph>
                        </div>

                        <div className={styles.PS1Row}>
                          <Paragraph
                            size='12px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('Phone Number')}
                          </Paragraph>
                          <Paragraph
                            size='16px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('+01 234 56789 0')}
                          </Paragraph>
                        </div>

                        <div className={styles.PS1Row2}>
                          <Paragraph
                            size='12px'
                            lineHeight='22px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate('Bio')}
                          </Paragraph>
                          <Paragraph
                            size='10px'
                            lineHeight='14px'
                            color='#A3A3A3'
                            bold='400'
                          >
                            {translate(
                              'Full stack product designer with hands-on experience in solving problems for clients ranging from Real Estate, Hospitality, Rentals, On Demand Healthcare, IT Services & Social Network among others.'
                            )}
                            <br />
                            <br />
                            {translate(
                              'I’ve good communication skills, well-defined process for engagement, a toolkit for collaboration & a user-centered approach to design.'
                            )}
                          </Paragraph>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.PS1CardBox2}>
                        <div className={styles.PS1TextBox}>
                          <Paragraph
                            size={'16px'}
                            lineHeight={'16px'}
                            color='#496a63'
                            bold='700'
                          >
                            {translate('27 Years')}
                          </Paragraph>
                          <Paragraph
                            size={'12px'}
                            lineHeight={'12px'}
                            color='#a3a3a3'
                            bold='400'
                          >
                            {translate('AGE')}
                          </Paragraph>
                        </div>
                        <div className={styles.PS1TextBox}>
                          <Paragraph
                            size={'16px'}
                            lineHeight={'16px'}
                            color='#496a63'
                            bold='700'
                          >
                            {translate('6 Years')}
                          </Paragraph>
                          <Paragraph
                            size={'12px'}
                            lineHeight={'12px'}
                            color='#a3a3a3'
                            bold='400'
                          >
                            {translate('WORKING EXPERIENCE')}
                          </Paragraph>
                        </div>
                        <div className={styles.PS1TextBox}>
                          <Paragraph
                            size={'16px'}
                            lineHeight={'16px'}
                            color='#496a63'
                            bold='700'
                          >
                            {translate('+01 234 56789 0')}
                          </Paragraph>
                          <Paragraph
                            size={'12px'}
                            lineHeight={'12px'}
                            color='#a3a3a3'
                            bold='400'
                          >
                            {translate('PHONE NUMBER')}
                          </Paragraph>
                        </div>
                        <div className={styles.PS1TextBox}>
                          <Paragraph
                            size={'16px'}
                            lineHeight={'16px'}
                            color='#496a63'
                            bold='700'
                          >
                            {translate('12.5 Lac')}
                          </Paragraph>
                          <Paragraph
                            size={'12px'}
                            lineHeight={'12px'}
                            color='#a3a3a3'
                            bold='400'
                          >
                            {translate('CTC')}
                          </Paragraph>
                        </div>
                        <div className={styles.PS1TextBox}>
                          <Paragraph
                            size={'16px'}
                            lineHeight={'16px'}
                            color='#496a63'
                            bold='700'
                          >
                            {translate('California, USA')}
                          </Paragraph>
                          <Paragraph
                            size={'12px'}
                            lineHeight={'12px'}
                            color='#a3a3a3'
                            bold='400'
                          >
                            {translate('LOCATION')}
                          </Paragraph>
                        </div>
                        <div className={styles.PS1TextBox}>
                          <Paragraph
                            size={'16px'}
                            lineHeight={'16px'}
                            color='#496a63'
                            bold='700'
                          >
                            {translate('johncena66@gmail.com')}
                          </Paragraph>
                          <Paragraph
                            size={'12px'}
                            lineHeight={'12px'}
                            color='#a3a3a3'
                            bold='400'
                          >
                            {translate('EMAIL')}
                          </Paragraph>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={styles.PS1ContentBox4}>
                    <div className={styles.PS1HeaderBox3}>
                      <Paragraph
                        color='#83BFB3'
                        bold='700'
                        className={styles.PS1Title2}
                      >
                        {translate('Experience')}
                      </Paragraph>
                      <Button
                        label={translate('Edit')}
                        size={'12px'}
                        bg='#83BFB3'
                        hvbg='#6DAAA0'
                        br='10px'
                        color='#ffffff'
                        bold='600'
                        className={styles.PS1Button3}
                      />
                    </div>

                    <div
                      className={`${styles.PS1InnerBox} ${styles.noPaddingTop}`}
                    >
                      <div className={styles.PS1TextBox2}>
                        <Paragraph
                          size={'16px'}
                          lineHeight={'16px'}
                          color='#496a63'
                          bold='700'
                        >
                          {translate('2024')}
                        </Paragraph>
                        <Paragraph
                          size={'12px'}
                          lineHeight={'12px'}
                          color='#a3a3a3'
                          bold='400'
                        >
                          {translate('YEAR')}
                        </Paragraph>
                      </div>

                      <div className={styles.PS1TextBox3}>
                        <Paragraph
                          size={'16px'}
                          lineHeight={'16px'}
                          color='#496a63'
                          bold='700'
                        >
                          {translate('Infosys')}
                        </Paragraph>
                        <Paragraph
                          size={'12px'}
                          lineHeight={'12px'}
                          color='#a3a3a3'
                          bold='400'
                        >
                          {translate('Product & UI/UX Designer')}
                        </Paragraph>

                        <Paragraph
                          size={'12px'}
                          lineHeight={'12px'}
                          color='#a3a3a3'
                          bold='400'
                          margin={'4px 0px 0px 0px'}
                        >
                          {translate('April 2018 - Present')}
                        </Paragraph>
                      </div>
                    </div>

                    <div className={styles.PS1InnerBox}>
                      <div className={styles.PS1TextBox2}>
                        <Paragraph
                          size={'16px'}
                          lineHeight={'16px'}
                          color='#496a63'
                          bold='700'
                        >
                          {translate('2014')}
                        </Paragraph>
                        <Paragraph
                          size={'12px'}
                          lineHeight={'12px'}
                          color='#a3a3a3'
                          bold='400'
                        >
                          {translate('YEAR')}
                        </Paragraph>
                      </div>

                      <div className={styles.PS1TextBox3}>
                        <Paragraph
                          size={'16px'}
                          lineHeight={'16px'}
                          color='#496a63'
                          bold='700'
                        >
                          {translate('Pixel Studio')}
                        </Paragraph>
                        <Paragraph
                          size={'12px'}
                          lineHeight={'12px'}
                          color='#a3a3a3'
                          bold='400'
                        >
                          {translate('UI/UX Designer')}
                        </Paragraph>

                        <Paragraph
                          size={'12px'}
                          lineHeight={'12px'}
                          color='#a3a3a3'
                          bold='400'
                          margin={'4px 0px 0px 0px'}
                        >
                          {translate('April 2014 - Mar 2018')}
                        </Paragraph>
                      </div>
                    </div>

                    <div className={`${styles.PS1InnerBox} ${styles.noBorder}`}>
                      <div className={styles.PS1TextBox2}>
                        <Paragraph
                          size={'16px'}
                          lineHeight={'16px'}
                          color='#496a63'
                          bold='700'
                        >
                          {translate('2013')}
                        </Paragraph>
                        <Paragraph
                          size={'12px'}
                          lineHeight={'12px'}
                          color='#a3a3a3'
                          bold='400'
                        >
                          {translate('YEAR')}
                        </Paragraph>
                      </div>

                      <div className={styles.PS1TextBox3}>
                        <Paragraph
                          size={'16px'}
                          lineHeight={'16px'}
                          color='#496a63'
                          bold='700'
                        >
                          {translate('Ramotion Studio')}
                        </Paragraph>
                        <Paragraph
                          size={'12px'}
                          lineHeight={'12px'}
                          color='#a3a3a3'
                          bold='400'
                        >
                          {translate('Product & UI/UX Designer')}
                        </Paragraph>

                        <Paragraph
                          size={'12px'}
                          lineHeight={'12px'}
                          color='#a3a3a3'
                          bold='400'
                          margin={'5px 0px 0px 0px'}
                        >
                          {translate('Jan 2013 - Dec 2013')}
                        </Paragraph>
                      </div>
                    </div>
                  </div>

                  <div className={styles.PS1ContentBox5}>
                    <div className={styles.PS1HeaderBox3}>
                      <Paragraph
                        color='#83BFB3'
                        bold='700'
                        className={styles.PS1Title2}
                      >
                        {translate('My Resume')}
                      </Paragraph>
                      <Button
                        label={translate('Edit')}
                        size={'12px'}
                        bg='#83BFB3'
                        hvbg='#6DAAA0'
                        br='10px'
                        color='#ffffff'
                        bold='600'
                        className={styles.PS1Button3}
                      />
                    </div>

                    <div className={styles.PS1TextBox4}>
                      <Paragraph
                        size={'16px'}
                        lineHeight={'16px'}
                        color='#496a63'
                        bold='700'
                      >
                        {translate('JohnCena-2024-Resume.pdf')}
                      </Paragraph>
                      <Paragraph
                        size={'12px'}
                        lineHeight={'12px'}
                        color='#a3a3a3'
                        bold='400'
                      >
                        {translate('Uploaded on 20 Aug 2024')}
                      </Paragraph>
                    </div>
                  </div>

                  <div className={styles.PS1ButtonBox2}>
                    <Button
                      label={translate('Post A Job')}
                      bg='#83BFB3'
                      hvbg='#6DAAA0'
                      br='10px'
                      color='#ffffff'
                      bold='600'
                      className={styles.PS1Button2}
                    />

                    <Button
                      label={translate('Account Setting')}
                      bg='#83BFB3'
                      hvbg='#6DAAA0'
                      br='10px'
                      color='#ffffff'
                      bold='600'
                      className={styles.PS1Button2}
                    />

                    <Button
                      label={translate('Logout')}
                      bg='#83BFB3'
                      hvbg='#6DAAA0'
                      br='10px'
                      color='#ffffff'
                      bold='600'
                      className={styles.PS1Button2}
                    />
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
