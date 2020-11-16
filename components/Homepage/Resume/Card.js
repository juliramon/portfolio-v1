import React from 'react';

const Card = ({logoUrl, position, companyName, period, tagline, tasks}) => {
    const listTasks = tasks.map(el => <li key={el}>{el}</li>)
    return (
        <div className="card-wrapper d-flex">
            <div className="left">
                <img src={logoUrl} alt={`${companyName} logo`} />
            </div>
            <div className="right">
                <ul>
                    <li><b>{position}</b> {companyName}</li>
                    <li>{period}</li>
                    <li><em>{tagline}</em></li>
                    <ul className="tasks">
                        {listTasks}
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Card;