import "./MainBody.css";

export default function MainBody(){
    return (
        <div id="main">
            <form action="" method="post">
                <fieldset>
                    <legend>Personal Information</legend>

                    <label htmlFor="full-name">Full Name:</label>
                    <input type="text" name="fullName" id="full-name" required/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required/>

                    <label htmlFor="phone-number">Phone Number:</label>
                    <input type="tel" name="phoneNumber" id="phone-number" required/>

                    <label htmlFor="short-description">Short Description of Yourself:</label>
                    <textarea name="shortDescription" id="short-description"></textarea>
                </fieldset>

                <fieldset>
                    <legend>Work Experience</legend>
                    <input type="text" name="" id="" />
                </fieldset>

                <fieldset>
                    <legend>Education</legend>
                    <input type="text" name="" id="" />
                </fieldset>
            </form>
            <div id="resume-container">
                <h1 id="resume-name">Adam Sinclair</h1>
                <section class="">
                    <h1>adam.sinc123@gmail.com</h1>
                    <p>|</p>
                    <h1>07918297333</h1>
                </section>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium officia repellat optio eveniet harum tempora eaque amet dolorem? Itaque dolores consequuntur mollitia obcaecati ratione eligendi sit inventore illo totam eum.</p>

            </div>
        </div>
    );
}