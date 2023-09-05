import React from 'react';
import './App.css';
  
function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src=
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ctEwbOJPzaZp2s0Cs6cbQQXRrxlBUY8ndw&usqp=CAU" />
                    </div>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#tutorials">Tutorials</a></li>
                    <li><a href="#jobs">Jobs</a></li>
                    <li><a href='#student'>Student</a></li>
                    <li><a href='#Contacts'>Contacts</a></li>
                    <li><a href='#Email'>Email</a></li>
                </ul>
  
                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>
  
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            The Best Tips To Speed Up Your 
                            Job Search in 2023
                        </h1>
                        <p class="text-small">
                            Hunting down a relevant job requires 
                            proper techniques for showcasing your 
                            potential to the employer. But with 
                            the advent of COVID-19, it has become 
                            a bit challenging and competitive to 
                            reach out for your dream job. Many 
                            individuals have lost their jobs 
                            during these times, and on the other 
                            hand, freshers are facing difficulties
                            while applying for a new job. But 
                            there is no need for panic, you can 
                            change your ways and streamline things 
                            in a way that you get a proper result.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Full Stack Web Development Tutorial
                        </h1>
                        <p class="text-small">
                        Full stack development is the process of designing, creating, testing, and deploying a complete web application from start to finish.
                        It involves working with various technologies and tools, including front-end web development, back-end web development, and database development.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Introduction to  HTML
                        </h1>
                        <p class="text-small">
                        HTML stands for HyperText Markup Language. It is used to design web pages using a markup language.
                        HTML is a combination of Hypertext and Markup language. Hypertext defines the link between web pages.
                        A markup language is used to define the text document within the tag which defines the structure of web pages.
                        This language is used to annotate (make notes for the computer) text so that a machine can understand it and manipulate text accordingly.
                        Most markup languages (e.g. HTML) are human-readable. The language uses tags to define what manipulation has to be done on the text. 
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            What is Machine Learning?
                        </h1>
                        <p class="text-small">
                            Machine Learning is the field of study 
                            that gives computers the capability to 
                            learn without being explicitly 
                            programmed. ML is one of the most exciting
                            technologies that one would have ever 
                            come across. As it is evident from the 
                            name, it gives the computer that makes 
                            it more similar to humans: The ability 
                            to learn. Machine learning is actively 
                            being used today, perhaps in many more 
                            places than one would expect.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            What is Data Science?
                        </h1>
                        <p class="text-small">
                        Data science is the study of data to extract meaningful insights for business.
                        It is a multidisciplinary approach that combines principles and practices from the fields of mathematics,
                        statistics, artificial intelligence, and computer engineering to analyze large amounts of data.
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved for the Arjun Academy
                </p>
            </footer>
        </div>
    )
}
  
export default App