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
import FormInput from '../../components/FormInput/FormInput';

//assets
import JS1Image1 from '../../assets/images/jobapplication/Google.png';
import JS1Image2 from '../../assets/images/home/HS4Location.svg';
import JS1Image3 from '../../assets/images/jobapplication/JS1Image3.svg';
import JS1Image4 from '../../assets/images/jobapplication/JS1Image4.png';
import JS1Luggage from '../../assets/images/home/HS4Luggage.svg';
import JS1Clock from '../../assets/images/home/HS4Clock.svg';

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
                        <Paragraph
                          bold={'700'}
                          color={'#496A63'}
                          className={styles.JS1Title1}
                        >
                          {translate('Business Admin')}
                        </Paragraph>

                        <div className={styles.JS1Image2}>
                          <img src={JS1Image2} alt='JS1Image2' />
                        </div>

                        <Paragraph
                          bold={'400'}
                          color={'#A3A3A3'}
                          className={styles.JS1Text1}
                        >
                          {translate('California, USA')}
                        </Paragraph>

                        <div className={styles.JS1Image3Absolute}>
                          <img src={JS1Image3} alt='JS1Image3' />
                        </div>
                      </div>

                      <Paragraph
                        bold={'400'}
                        color={'#496A63'}
                        className={styles.JS1Text2}
                      >
                        {translate(
                          'Google Headquarters, Googleplex, Alphabet, Inc.'
                        )}
                      </Paragraph>

                      <div className={styles.JS1Line1}></div>

                      <div className={styles.JS1ImageBox1}>
                        <img
                          src={JS1Luggage}
                          alt='work'
                          className={styles.JS1Image5}
                        />
                        <Paragraph
                          size={'12px'}
                          bold={'400'}
                          color={'#A3A3A3'}
                          className={styles.JS1Text3}
                        >
                          {translate('On-site')}
                        </Paragraph>

                        <img
                          src={JS1Clock}
                          alt='clock'
                          className={styles.JS1Image6}
                        />
                        <Paragraph
                          size={'12px'}
                          bold={'400'}
                          color={'#A3A3A3'}
                          className={styles.JS1Text4}
                        >
                          {translate('Full Time')}
                        </Paragraph>
                      </div>

                      <div className={styles.JS1RowWrapper}>
                        <div className={styles.JS1Column1}>
                          <Paragraph
                            size={'12px'}
                            lineHeight={'16px'}
                            bold={'700'}
                            color={'#496A63'}
                          >
                            {translate('Pay')}
                          </Paragraph>

                          <Paragraph
                            size={'12px'}
                            lineHeight={'16px'}
                            bold={'700'}
                            color={'#496A63'}
                          >
                            {translate('Benefits')}
                          </Paragraph>
                        </div>

                        <div className={styles.JS1Column2}>
                          <Paragraph
                            size={'12px'}
                            lineHeight={'16px'}
                            bold={'400'}
                            color={'#496A63'}
                          >
                            {translate('$ 5,000 - $ 10,000k / month')}
                          </Paragraph>

                          <Paragraph
                            size={'12px'}
                            lineHeight={'16px'}
                            bold={'400'}
                            color={'#496A63'}
                          >
                            {translate('Comprehensive Health Coverage')}
                            <br />
                            {translate('On-Site Amenities')}
                            <br />
                            {translate('Paid Time Off')}
                            <br />
                            {translate('Global Mobility')}
                            <br />
                            {translate('Financial Security')}
                            <br />
                            {translate('Retirement Plans')}
                            <br />
                          </Paragraph>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.JS1Bottom}>
                    <div className={styles.JS1ContentBox}>
                      <Paragraph
                        size={'16px'}
                        lineHeight={'16px'}
                        bold={'700'}
                        color={'#83BFB3'}
                      >
                        {translate('About The Role')}
                      </Paragraph>

                      <Paragraph
                        size={'12px'}
                        lineHeight={'16px'}
                        bold={'400'}
                        color={'#4D4D4D'}
                      >
                        {translate(
                          'Google is a global technology leader known for its innovative approach to business and its commitment to creating products that improve the lives of billions of people worldwide. The role of a Google Business Administrator is integral to ensuring the smooth operation of various business functions, supporting leadership teams, and contributing to the efficiency and productivity of the organization. This role involves working closely with executives and teams to manage daily operations, coordinate projects, and handle a wide range of administrative tasks.'
                        )}
                      </Paragraph>
                    </div>

                    <div className={styles.JS1ContentBox2}>
                      <Paragraph
                        size={'16px'}
                        lineHeight={'16px'}
                        bold={'700'}
                        color={'#83BFB3'}
                      >
                        {translate('Job Tasks & Responsibilities')}
                      </Paragraph>

                      <Paragraph
                        size='12px'
                        lineHeight='16px'
                        bold='400'
                        color='#4D4D4D'
                      >
                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Executive Support')}
                          </span>
                          {translate(
                            ' : Provide high-level administrative support to executives, including calendar management, meeting coordination, and travel arrangements.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Project Management')}
                          </span>
                          {translate(
                            ' : Assist in the planning, execution, and tracking of business projects, ensuring deadlines are met and objectives are achieved.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Communication')}
                          </span>
                          {translate(
                            ' : Act as a liaison between executives and other teams, managing internal communications and facilitating information flow.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Event Coordination')}
                          </span>
                          {translate(
                            ' : Organize and manage business meetings, conferences, and team events, including logistics, agendas, and follow-up actions.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Document Management')}
                          </span>
                          {translate(
                            ' : Prepare, edit, and distribute reports, presentations, and other business documents.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Office Management')}
                          </span>
                          {translate(
                            ' : Oversee office operations, including supply management, vendor coordination, and maintaining a productive work environment.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Data Analysis')}
                          </span>
                          {translate(
                            ' : Collect and analyze data to support business decisions, including generating reports and providing insights to leadership.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Budget Management')}
                          </span>
                          {translate(
                            ' : Assist in budget tracking and expense management, ensuring alignment with company financial policies.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Policy Compliance')}
                          </span>
                          {translate(
                            ' : Ensure adherence to company policies and procedures, including privacy and security standards.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Ad Hoc Tasks')}
                          </span>
                          {translate(
                            ' : Handle various administrative tasks as required to support the business’s dynamic needs.'
                          )}
                        </span>
                      </Paragraph>
                    </div>

                    <div className={styles.JS1ContentBox2}>
                      <Paragraph
                        size={'16px'}
                        lineHeight={'16px'}
                        bold={'700'}
                        color={'#83BFB3'}
                      >
                        {translate('Skills & Experience')}
                      </Paragraph>

                      <Paragraph
                        size='12px'
                        lineHeight='16px'
                        bold='400'
                        color='#4D4D4D'
                      >
                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Educational Background')}
                          </span>
                          {translate(
                            ' : Bachelor’s degree in Business Administration, Management, or a related field.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Experience')}
                          </span>
                          {translate(
                            ' : 3-5 years of experience in a similar administrative or business support role, preferably in a fast-paced, tech-oriented environment.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Organizational Skills')}
                          </span>
                          {translate(
                            ' : Exceptional organizational abilities with a strong attention to detail and the ability to multitask effectively.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Communication Skills')}
                          </span>
                          {translate(
                            ' : Excellent written and verbal communication skills, with the ability to interact professionally with all levels of the organization.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Technical Proficiency')}
                          </span>
                          {translate(
                            ' : Proficiency in Google Workspace (G Suite) applications, Microsoft Office, and other relevant business software.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Problem-Solving')}
                          </span>
                          {translate(
                            ' : Strong analytical and problem-solving skills with the ability to make decisions quickly and effectively.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Time Management')}
                          </span>
                          {translate(
                            ' : Proven ability to manage time efficiently, prioritize tasks, and meet deadlines in a high-pressure environment.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Interpersonal Skills')}
                          </span>
                          {translate(
                            ' : High emotional intelligence with a collaborative approach to working with teams and stakeholders.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Discretion')}
                          </span>
                          {translate(
                            ' : Ability to handle confidential information with integrity and discretion.'
                          )}
                        </span>

                        <span className={styles.bulletLine}>
                          <span className={styles.bulletTitle}>
                            •{translate(' Adaptability')}
                          </span>
                          {translate(
                            ' : Flexibility to adapt to changing business needs and a fast-paced work environment.'
                          )}
                        </span>
                      </Paragraph>
                    </div>

                    <div className={styles.JS1ContentBox3}>
                      <Paragraph
                        size={'16px'}
                        lineHeight={'16px'}
                        bold={'700'}
                        color={'#83BFB3'}
                        className={styles.JS1Title2}
                      >
                        {translate('Application')}
                      </Paragraph>

                      <div className={styles.JS1SearchWrapper}>
                        <div className={styles.JS1InputWrapper}>
                          <FormInput
                            bg='white'
                            padding={'15px 18px'}
                            size='14px'
                            phfontweight='400'
                            phtextColor={'#83BFB3'}
                            textColor='#83BFB3'
                            placeholder={translate('JohnGaliano-Resume.pdf')}
                            className={styles.JS1Input}
                          />

                          {/* Button inside input wrapper */}
                          <Button
                            label={translate('Upload')}
                            bg='#83BFB3'
                            hvbg={'#83BFB3'}
                            color='#fff'
                            br='10px'
                            size='14px'
                            pd='0'
                            className={styles.JS1InputButton}
                          />
                        </div>
                      </div>

                      <Paragraph
                        size={'12px'}
                        lineHeight={'12px'}
                        bold={'400'}
                        color={'#A3A3A3'}
                        className={styles.JS1Text5}
                      >
                        <span className={styles.NoteLine}>
                          {translate(
                            'Note : Upload your resume or CV, along with any relevant documents'
                          )}
                          <br />
                          {translate(
                            '(e.g., cover letter, portfolio) in PDF format, each not exceeding 300kb.'
                          )}
                        </span>
                      </Paragraph>

                      <Button
                        label={translate('Apply Now')}
                        bg='#83BFB3'
                        hvbg={'#83BFB3'}
                        color='#fff'
                        br='10px'
                        size='16px'
                        pd='0'
                        className={styles.JS1Button2}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.JS1Box2}>
                  <div className={styles.JS1Image4}>
                    <img src={JS1Image4} alt='JS1Image4' />
                  </div>

                  <Button
                    label={translate('Subscribe')}
                    bg='#83BFB3'
                    hvbg={'#83BFB3'}
                    color='#fff'
                    br='10px'
                    size='16px'
                    pd='0'
                    className={styles.JS1Button3}
                  />

                  <Paragraph
                    size={'24px'}
                    lineHeight={'24px'}
                    bold={'700'}
                    color={'#496A63'}
                    className={styles.JS1Title3}
                  >
                    {translate('Recent Jobs')}
                  </Paragraph>

                  {/* First Textbox */}
                  <div className={styles.JS1TextBox2}>
                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'700'}
                      color={'#4D4D4D'}
                      className={styles.JS1Title4}
                    >
                      {translate('Lead Quality Control QA')}
                    </Paragraph>

                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'400'}
                      color={'#A3A3A3'}
                      className={styles.JS1Text6}
                    >
                      {translate('Ashford')}
                    </Paragraph>
                  </div>

                  {/* Second Textbox */}
                  <div className={styles.JS1TextBox2}>
                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'700'}
                      color={'#4D4D4D'}
                      className={styles.JS1Title4}
                    >
                      {translate('Web Developer')}
                    </Paragraph>

                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'400'}
                      color={'#A3A3A3'}
                      className={styles.JS1Text6}
                    >
                      {translate('Percepta')}
                    </Paragraph>
                  </div>

                  {/* Third Textbox */}
                  <div className={styles.JS1TextBox2}>
                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'700'}
                      color={'#4D4D4D'}
                      className={styles.JS1Title4}
                    >
                      {translate('UI/UX Designer')}
                    </Paragraph>

                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'400'}
                      color={'#A3A3A3'}
                      className={styles.JS1Text6}
                    >
                      {translate('Exela Movers')}
                    </Paragraph>
                  </div>

                  {/* Fourth Textbox */}
                  <div className={styles.JS1TextBox2}>
                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'700'}
                      color={'#4D4D4D'}
                      className={styles.JS1Title4}
                    >
                      {translate('Social Media Specialist')}
                    </Paragraph>

                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'400'}
                      color={'#A3A3A3'}
                      className={styles.JS1Text6}
                    >
                      {translate('Amazon')}
                    </Paragraph>
                  </div>

                  {/* Fifth Textbox */}
                  <div className={styles.JS1TextBox2}>
                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'700'}
                      color={'#4D4D4D'}
                      className={styles.JS1Title4}
                    >
                      {translate('Senior System Engineer')}
                    </Paragraph>

                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'400'}
                      color={'#A3A3A3'}
                      className={styles.JS1Text6}
                    >
                      {translate('Tesla')}
                    </Paragraph>
                  </div>

                  {/* Sixth Textbox */}
                  <div className={styles.JS1TextBox2}>
                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'700'}
                      color={'#4D4D4D'}
                      className={styles.JS1Title4}
                    >
                      {translate('Full Stack Engineer')}
                    </Paragraph>

                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'400'}
                      color={'#A3A3A3'}
                      className={styles.JS1Text6}
                    >
                      {translate('Bing Search')}
                    </Paragraph>
                  </div>

                  {/* Seventh Textbox */}
                  <div className={styles.JS1TextBox2}>
                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'700'}
                      color={'#4D4D4D'}
                      className={styles.JS1Title4}
                    >
                      {translate('Java Software Engineer')}
                    </Paragraph>

                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'400'}
                      color={'#A3A3A3'}
                      className={styles.JS1Text6}
                    >
                      {translate('Aceable, Inc.')}
                    </Paragraph>
                  </div>

                  {/* Eighth Textbox */}
                  <div className={styles.JS1TextBox2}>
                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'700'}
                      color={'#4D4D4D'}
                      className={styles.JS1Title4}
                    >
                      {translate('Business Admin')}
                    </Paragraph>

                    <Paragraph
                      size={'16px'}
                      lineHeight={'16px'}
                      bold={'400'}
                      color={'#A3A3A3'}
                      className={styles.JS1Text6}
                    >
                      {translate('Google')}
                    </Paragraph>
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
