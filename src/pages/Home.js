import React from "react";
import ReactMarkdown from "react-markdown";
import "../styles/home.scss";
import portrait from "../assets/images/bw_portrait.jpg";

import { TweenLite, Power3 } from "gsap";

const Home = () => {
    const name = "Scott Verbeek";
    const title = "Software Engineer";
    const socials = [
        {
            name: "Email",
            link: "mailto:srpverbeek@gmail.com",
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/scott-verbeek-3618a2169/",
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/scott.verbeek.14/",
        },
    ];
    const description =
        "I'm a Software Engineer based in Australia, specializing in web development, currently looking for new employment. Everything on this website is built and designed by me, find our more about my [projects](/projects).";

    // the following lines are for the height of the row
    // on mobile broser.
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
        document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    });

    const startAnimations = () => {
        document.getElementById("page-loader").remove();
        TweenLite.to(".portrait img", .6, {opacity: 1, ease: Power3.easeInOut});
        TweenLite.to("header", .6, { opacity: 1, y: -20, ease: Power3.ease }).delay(1);
        TweenLite.to("main", .6, { opacity: 1, y: -20, ease: Power3.ease }).delay(1.2);
        TweenLite.to("footer", .6, { opacity: 1, y: -20, ease: Power3.ease }).delay(1.4);
    };

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-lg-10 p-0 pl-4 pr-4 mt-4">
                        <Header name={name} title={title} />
                    </div>
                    <div className="col-xs-12 col-lg-10 p-0 pl-4 pr-4 mt-auto mb-4">
                        <Main description={description} />
                        <Footer socials={socials} />
                    </div>
                </div>
            </div>
            <div className="portrait">
                <img 
                    src={portrait} 
                    alt="" 
                    onLoad={ startAnimations }
                />
            </div>
        </>
    );
};

const Header = ({ name, title }) => (
    <header>
        <h1>
            <span className="name">{name}</span>
            <span className="title">{title}</span>
        </h1>
    </header>
);

const Main = ({ description }) => (
    <main className="mb-4">
        <ReactMarkdown source={description} />
    </main>
);

const Footer = ({ socials }) => {
    var socialLinks = " ";
    if (socials.length) {
        socialLinks = socials.map((social) => {
            return <SocialLink name={social.name} link={social.link} />;
        });
    }

    return (
        <footer>
            <span>
                <b>Let's connect</b>
            </span>
            <span>{socialLinks}</span>
        </footer>
    );
};

const SocialLink = ({ name, link, newTab = true }) => {
    if (!newTab)
        return (
            <a href={link} className="social">
                {name}
            </a>
        );

    return (
        <a href={link} className="social" target="blank">
            {name}
        </a>
    );
};

export default Home;
