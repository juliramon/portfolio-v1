import React, { useState } from 'react';
import Head from 'next/head'
import {Container, Row, Col, Button} from 'react-bootstrap';

const Header = () => {
    const initialState = {
        activeTab: 'about'
    }
    
    const [state, setState] = useState(initialState)

    const aboutMe = <>
        <h1 className="header-title">Hi 🤟 I'm Juli, a creative frontend developer<br/> on a permanent mission to make digital products fancier and valuable. Passionate about great user experiences<br/> and human behaviour.</h1>
        <div className="header-intro">
            <p>Currently leading the product development, design and communication at <a href="https://www.innoget.com" title="Innoget.com" rel="nofollow noreferrer" target="_blank">Innoget.com</a>.</p>
            <p>Creator of <a href="https://www.escapadesenparella.cat" tile="Escapadesenparella.cat" rel="nofollow noreferrer" target="_blank">Escapadesenparella.cat</a>. Awarded entrepreneur and speaker.</p>
            <p>Responsible, committed to my work, highly curious and efficient problem solver.</p>
        </div>
    </>

    let displaySection;

    switch(state.activeTab) {
        case 'about':
            displaySection = aboutMe
    }
    
    return (
        <>
            <Head>
                <title>Juli Ramon – Frontend Developer</title>
				<link rel="icon" href="/favicon.ico" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta
					name="description"
					content={`Hi. I'm Juli Ramon, a creative frontend developer based in Barcelona. Click for more about me.`}
				/>
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content={`Juli Ramon | Frontend Developer`}
				/>
				<meta
					property="og:description"
					content={`Hi. I'm Juli Ramon, a creative frontend developer based in Barcelona. Click for more about me.`}
				/>
				<meta
					property="url"
					content={`https://juliramon.com`}
				/>
				<meta property="og:site_name" content="Escapadesenparella.cat" />
				<meta property="og:locale" content="ca_ES" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content={`Juli Ramon | Frontend Developer`}
				/>
				<meta
					name="twitter:description"
					content={`Hi. I'm Juli Ramon, a creative frontend developer based in Barcelona. Click for more about me.`}
				/>
				<link
					rel="canonical"
					href={`https://juliramon.com`}
				/>
				<link href={`https://juliramon.com`} rel="home" />
            </Head>
            <header className="mw-1500">
                <div className="wrapper">
                    <div className="left card user">
                        <div className="card-block">
                            <Button className="active">
                                <div className="card-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="12" cy="7" r="4" />
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    </svg>
                                </div>
                                <div className="card-right">
                                    <span>About me</span>
                                </div>
                            </Button>
                        </div>
                        <div className="card-block">
                            <Button className="disabled">
                                <div className="card-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-notebook" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                                    <line x1="13" y1="8" x2="15" y2="8" />
                                    <line x1="13" y1="12" x2="15" y2="12" />
                                </svg>
                                </div>
                                <div className="card-right">
                                    <span>Resume</span>
                                </div>
                            </Button>
                        </div>
                        <div className="card-block">
                            <Button className="disabled">
                                <div className="card-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-list" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                    <rect x="9" y="3" width="6" height="4" rx="2" />
                                    <line x1="9" y1="12" x2="9.01" y2="12" />
                                    <line x1="13" y1="12" x2="15" y2="12" />
                                    <line x1="9" y1="16" x2="9.01" y2="16" />
                                    <line x1="13" y1="16" x2="15" y2="16" />
                                </svg>
                                </div>
                                <div className="card-right">
                                    <span>Projects</span>
                                </div>
                            </Button>
                        </div>
                        <div className="card-block">
                            <Button className="disabled">
                                <div className="card-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-inbox" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="4" y="4" width="16" height="16" rx="2" />
                                    <path d="M4 13h3l3 3h4l3 -3h3" />
                                </svg>
                                </div>
                                <div className="card-right">
                                    <span>Contact</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className="right">
                        {displaySection}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;