import React, { useState } from 'react';
import Head from 'next/head'
import {Container, Row, Col} from 'react-bootstrap'

const Header = () => {
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
                    <h1 className="header-title">I'm Juli, a junior frontend developer on a permanent mission to make digital products fancier and valuable. Passionate about great user experiences<br/> and human behaviour.</h1>
                    <div className="header-intro">
                        <p>Currently leading the product development, design and communication at <a href="https://www.innoget.com" title="Innoget.com" rel="nofollow noreferrer" target="_blank">Innoget.com</a>.</p>
                        <p>Creator of <a href="https://www.escapadesenparella.cat" tile="Escapadesenparella.cat" rel="nofollow noreferrer" target="_blank">Escapadesenparella.cat</a>. Awarded entrepreneur and speaker. Responsible, committed to my work, highly curious and efficient problem solver.</p>
                    </div>
                    <div className="header-section">
                        <div className="tech-stack">
                            <h2>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1D7CEE" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <polyline points="7 8 3 12 7 16" />
                                    <polyline points="17 8 21 12 17 16" />
                                    <line x1="14" y1="4" x2="10" y2="20" />
                                </svg>Tech Stack</h2>
                            <ul>
                                <li><img src="./html5.svg" alt=""/></li>
                                <li><img src="./css3.svg" alt=""/></li>
                                <li><img src="./javascript.svg" alt=""/></li>
                                <li><img src="./react.svg" alt=""/></li>
                                <li><img src="./next-dot-js.svg" alt=""/></li>
                                <li><img src="./sass.svg" alt=""/></li>
                                <li><img src="./bootstrap.svg" alt=""/></li>
                                <li><img src="./node-dot-js.svg" alt=""/></li>
                                <li><img src="./mongodb.svg" alt=""/></li>
                                <li><img src="./git.svg" alt=""/></li>
                                <li><img src="./github.svg" alt=""/></li>
                                <li><img src="./postman.svg" alt=""/></li>
                            </ul>
                        </div>
                        <div className="design-stack">
                            <h2>Design Stack</h2>
                            <ul>
                                <li><img src="./sketch.svg" alt=""/></li>
                                <li><img src="./invision.svg" alt=""/></li>
                                <li><img src="./adobephotoshop.svg" alt=""/></li>
                                <li><img src="./adobeillustrator.svg" alt=""/></li>
                                <li><img src="./adobelightroomcc.svg" alt=""/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;