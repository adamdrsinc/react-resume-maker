import "./ResumeContainer.css"

export default function ResumeContainer(){
    return (
        <div id="resume-container">
            <h1 id="resume-name">Adam Sinclair</h1>
            <h2><span>adam.sinc123@gmail.com | 07918297333</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium officia repellat optio eveniet harum tempora eaque amet dolorem? Itaque dolores consequuntur mollitia obcaecati ratione eligendi sit inventore illo totam eum.</p>
            <ul id="skills">
                <h1>Skills</h1>
                <li>- Skill</li>
                <li>- Skill</li>
                <li>- Skill</li>
                <li>- Skill</li>
            </ul>
            <div id="work-experience-container">
                <h1>Work Experience</h1>
                <div className="work-experience">
                    <h1>Waitrose &amp; Partners PLC.</h1>
                    <h2><span className="bold">From:</span> Jan 2019 | <span classList="bold">To:</span> Feb 2020</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam omnis deleniti iure debitis necessitatibus cupiditate odit a temporibus ullam quaerat voluptatibus ducimus, repellat dicta non laudantium quidem vero rem maiores!</p>
                </div>
                <div className="work-experience">
                    <h1>Waitrose &amp; Partners PLC.</h1>
                    <h2><span className="bold">From:</span> Jan 2019 | <span classList="bold">To:</span> Feb 2020</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam omnis deleniti iure debitis necessitatibus cupiditate odit a temporibus ullam quaerat voluptatibus ducimus, repellat dicta non laudantium quidem vero rem maiores!</p>
                </div>
            </div>
            <div id="education-container">
                <h1>Education</h1>
                <div className="education">
                    <h1>University of Chester</h1>
                    <h2>Aug 2020 to Jun 2024</h2>
                    <h3>Grade: 1st Class Honours</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse deserunt vel fugiat dolorum voluptates eius corporis rerum</p>
                </div>
                <div className="education">
                    <h1>University of Chester</h1>
                    <h2>Aug 2020 to Jun 2024</h2>
                    <h3>Grade: 1st Class Honours</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse deserunt vel fugiat dolorum voluptates eius corporis rerum</p>
                </div>
            </div>
        </div>
    );
}