import React from 'react';
import Card from './Resume/Card';

const Resume = () => {
    const workExperience = [
        {
            logoUrl: 'https://static9.innoget.com/images/innoget-logo-responsive-light.svg',
            position: 'COO',
            companyName: 'Innoget.com',
            period: '01/2015 - up to now',
            tagline: 'The leading online open innovation network',
            tasks: [
                'UI/UX design and development of the front-end interface', 'Product roadmapping and communication', 'Increased CR and traffic +55% through website optimization'
            ]
        },
        {
            logoUrl: '../nexumlabs-logo.svg',
            position: 'Freelance',
            companyName: 'nexumlabs',
            period: '06/2016 - up to now',
            tagline: 'Digital marketing ninjas',
            tasks: [
                'Digital marketing strategy and execution for clients', 'Front-end development: HTML, CSS, JS, ES6', 'Email layouts development'
            ]
        },
        {
            logoUrl: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHAn7FIlCJNPA/company-logo_200_200/0?e=1613606400&v=beta&t=Gf9XU3Yje6cuYrB-Dj4GvW5Zrtfkd_86JNmUZKIXGR4',
            position: 'Finance and accounting intern',
            companyName: 'Multivac Group',
            period: '02/2014 - 08/2014',
            tagline: 'The DNA of better packaging and processing',
            tasks: [
                'Settlement of expenses of employees', 'Debt claim', 'Account bills of material both international and domestic'
            ]
        }
    ]
    const listWorkExperience = workExperience.map(el => <Card key={el.position} logoUrl={el.logoUrl} position={el.position} companyName={el.companyName} period={el.period} tagline={el.tagline} tasks={el.tasks} />)
    return (
        <section id="resume">
            <div className="wrapper flex-column">
                <div className="title-area">
                    <h2>Summary</h2>
                    <p>Creative front-end developer on a permanent mission to make digital products fancier and valuable. Passionate about great user experiences and human behaviour.</p>
                    <p>With more than 5 years of experience in digital products management, communication and development.</p>
                </div>
                <div className="content-area">
                    <h2>Work Experience</h2>
                    {listWorkExperience}
                </div>
            </div>
        </section>
    );
};

export default Resume;