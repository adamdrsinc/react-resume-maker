import "./Footer.css";
import gitHubPng from "./assets/github.png";
import linkedInPng from "./assets/linked-in.png";

export default function Footer(){
    return (
        <footer>
            <h1>Made by Adam Sinclair</h1>
            <a href="https://github.com/adamdrsinc" target="_blank"><img src={gitHubPng} alt="Adam Sinclair's GitHub Profile" /></a>
            <a href="https://www.linkedin.com/in/adamdrsinclair/" target="_blank"><img src={linkedInPng} alt="Adam Sinclair's LinkedIn Profile" /></a>
        </footer>
    );
}