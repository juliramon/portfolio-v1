import React, { useState } from 'react';
import Head from 'next/head'
import Resume from '../Homepage/Resume'
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

    const resume = <Resume />
    
    const projects = (
    <div className="work-in-progress">
        <h1 className="header-title">Still working on this.<br/>Meanwhile, here's a bear<br/> playing a guitar</h1> 
        <div className="image-wrapper">
            <img src="https://media.giphy.com/media/InketCaEF5OOQ/source.gif" alt="Bear playing a guiter" />
        </div>
    </div>)

    const contact = (
    <div className="work-in-progress">
        <h1 className="header-title">Still working on this.<br/>Meanwhile, here's a bear<br/> playing a guitar</h1> 
        <div className="image-wrapper">
            <img src="https://media.giphy.com/media/InketCaEF5OOQ/source.gif" alt="Bear playing a guiter" />
        </div>
    </div>)

    let displaySection;

    switch(state.activeTab) {
        case 'about':
            displaySection = aboutMe;
            break;
        case 'resume':
            displaySection = resume;
            break;
        case 'projects':
            displaySection = projects;
            break;
        case 'contact':
            displaySection = contact;
            break;
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
					content={`Juli Ramon – Frontend Developer`}
				/>
				<meta
					property="og:description"
					content={`Hi. I'm Juli Ramon, a creative frontend developer based in Barcelona. Click for more about me.`}
				/>
				<meta
					property="url"
					content={`https://juliramon.com`}
				/>
				<meta property="og:site_name" content="Juli Ramon – Frontend Developer" />
				<meta property="og:locale" content="ca_ES" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content={`Juli Ramon – Frontend Developer`}
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
                    <aside className="left card user">
                        <div className="card-block">
                            <Button className={state.activeTab === 'about' ? 'active' : null} onClick={() => setState({...state, activeTab: 'about'})}>
                                <div className="card-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                    </svg>
                                </div>
                                <div className="card-right">
                                    <span>Home</span>
                                </div>
                            </Button>
                        </div>
                        <div className="card-block">
                            <Button className={state.activeTab === 'resume' ? 'active' : null} onClick={() => setState({...state, activeTab: 'resume'})}>
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
                            <Button className={state.activeTab === 'projects' ? 'active' : null} onClick={() => setState({...state, activeTab: 'projects'})}>
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
                            <Button className={state.activeTab === 'contact' ? 'active' : null} onClick={() => setState({...state, activeTab: 'contact'})}>
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
                    </aside>
                    <div className="right">
                        {displaySection}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;