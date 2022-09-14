import Button from '@mui/material/Button';
import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import uniqid from 'uniqid';
import Footer from '../Footer/Footer';

import './CVPreview.css';

const CVPreview = (props) => {
  useEffect(() => {
    const main = document.querySelector(`.main`);
    main.classList.add('blurred');
    return () => main.classList.remove('blurred');
  });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="cv__container absolute flex flex-col justify-center items-center">
      <div className="cv relative cv__gridlayout" ref={componentRef}>
        <div className="cv__colorelement  bg-blue-400"></div>
        <header className="cv__header">
          <h1 className="text-2xl font-bold text-blue-400">
            {props.userName ? props.userName.toUpperCase() : null}
            <span className="text-black">
              {props.userName ? ` - Curriculum Vitae` : null}
            </span>
          </h1>
        </header>
        <main className="cv__main">
          <div className="cv__sidebar p-4">
            {props.userImg && (
              <div
                className="cv__userimg mx-auto rounded-full"
                style={{ backgroundImage: `url(${props.userImg})` }}
              />
            )}
            {props.userEmail ||
            props.userAddress ||
            props.userPhoneNumber ||
            props.userLinkedin ||
            props.userGithub ? (
              <div className="mt-8">
                <h2 className="cv__sectionheader text-lg">
                  Contact Information:
                  {props.userEmail ? (
                    <p className="text-sm font-normal mt-2 ml-2">
                      <span className="text-blue-400 font-medium  pr-24">
                        Email:{' '}
                      </span>{' '}
                      {props.userEmail}
                    </p>
                  ) : null}
                  {props.userPhoneNumber ? (
                    <p className="text-sm font-normal mt-2 ml-2">
                      <span className="text-blue-400 font-medium pr-24">
                        Phone number:{' '}
                      </span>{' '}
                      {props.userPhoneNumber}
                    </p>
                  ) : null}
                  {props.userAddress ? (
                    <p className="text-sm font-normal mt-2 ml-2">
                      <span className="text-blue-400 font-medium  pr-24">
                        Address:{' '}
                      </span>{' '}
                      {props.userAddress}
                    </p>
                  ) : null}
                  {props.userLinkedin ? (
                    <p className="text-sm font-normal mt-2 ml-2">
                      <span className="text-blue-400 font-medium  pr-24">
                        LinkedIn:{' '}
                      </span>{' '}
                      <a href={props.userLinkedin}>{props.userLinkedin}</a>
                    </p>
                  ) : null}
                  {props.userGithub ? (
                    <p className="text-sm font-normal mt-2 ml-2">
                      <span className="text-blue-400 font-medium  pr-24">
                        GitHub:{' '}
                      </span>{' '}
                      <a href={props.userGithub}>{props.userGithub}</a>
                    </p>
                  ) : null}
                </h2>
              </div>
            ) : null}
          </div>
          <div className="cv__infoarea">
            {props.userDescription ? (
              <div className="mt-8">
                <h2 className="cv__sectionheader text-lg">About me:</h2>
                <p className="ml-2">{props.userDescription}</p>
              </div>
            ) : null}

            {props.userSkillsArr.length > 0 ? (
              <div className="mt-8">
                <h2 className="cv__sectionheader text-lg">Skills:</h2>
                <ul className="cv__skills ml-2 px-2">
                  {props.userSkillsArr.map((skill) => {
                    return (
                      <li className="overflow" key={uniqid()}>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}

            {props.userJobsArr.length > 0 ? (
              <div className="mt-8 ">
                <h2 className="cv__sectionheader text-lg cv__workexperience">
                  Work experience:
                </h2>
                {props.userJobsArr.map((job) => {
                  return (
                    <div key={uniqid()} className="mt-4">
                      <h4 className="text-normal font-semibold mb-1 ml-2">
                        {job.title}
                      </h4>
                      <p className="ml-4 font-medium text-blue-400">
                        {job.company}
                      </p>
                      <p className="text-gray-400 my-1 ml-4">
                        {job.startMonth
                          ? job.startMonth + ' ' + job.startYear
                          : job.startYear}
                        {' - '}
                        {job.isOngoing
                          ? 'Present'
                          : job.endMonth === true
                          ? job.endMonth + ' ' + job.endYear
                          : job.endYear}
                      </p>
                      <p className="ml-4">{job.description}</p>
                    </div>
                  );
                })}
              </div>
            ) : null}

            {props.userEducationArr.length > 0 ? (
              <div className="mt-8 cv__education">
                <h2 className="cv__sectionheader text-lg">Education:</h2>
                {props.userEducationArr.map((education) => {
                  return (
                    <div key={uniqid()} className="mt-4">
                      <h4 className="text-normal font-semibold mb-1 ml-2">
                        {education.school}
                      </h4>
                      <p className="ml-4 font-medium text-blue-400">
                        {education.degree} in {education.field}
                      </p>
                      <p className="text-gray-400 my-1 ml-4">
                        {education.startMonth
                          ? education.startMonth + ' ' + education.startYear
                          : education.startYear}
                        {' - '}
                        {education.endMonth
                          ? education.endMonth + ' ' + education.endYear
                          : education.endYear}
                      </p>
                      <p className="ml-4">{education.description}</p>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </main>
        <Footer isForCV={true} />
      </div>

      <Button
        size="large"
        variant="contained"
        className="cv__downloadbtn"
        onClick={handlePrint}
      >
        Download
      </Button>
    </div>
  );
};

export default CVPreview;
