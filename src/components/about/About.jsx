import "./About.css"
import Award from "../../img/award.png"

const About = () => {
    return (
        <div className="a ">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src="https://images.unsplash.com/photo-1671533418073-6b39f9163e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                        alt=""
                        className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Description about me in multiple paragraphs
                </p>
                <p className="a-desc">
                    I am a recent graduate of Douglas College's Post Baccalaureate Diploma in Computing & Information Systems program, with a specialization in Emerging Technologies and web technologies. I have a strong foundation in programming languages such as Python, Java, and SQL, as well as experience with frameworks like Flask and React. I am proficient in DevOps tools like Git, GitHub, Docker, and Jenkins, and have a working knowledge of platforms like Linux and MacOS.

Prior to my studies at Douglas College, I received a Bachelor of Technology in Electronics & Communications from Guru Nanak Dev University in India. During my studies, I served as the Convener of the Electronics Student Forum and as City President for the Blood Connect NGO in Amritsar.

I have professional experience as a DevOps Engineer and Production Support Specialist, most recently at Capgemini India Private Limited. In these roles, I have developed dashboards and implemented automation solutions using tools like Kibana, AppDynamics, and Python, resulting in reduced delivery times and improved incident analysis reporting. I have also successfully maintained high availability SLAs and streamlined SOPs and methodologies to improve change implementation times.

I am a strong team player and have received numerous accolades for my performance and contributions, including the Best Team award in the Capgemini Discover Project and the Global Resources Exceptional Achievement Tribute Award from a client. I am passionate about using my technical skills and problem-solving abilities to make a positive impact in my work.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">
                            Occaecat exercitation tempor esse magna fugiat magna est ad qui labore aute.
                        </h4>
                        <p className="a-award-desc">
                            Occaecat Lorem et nostrud duis ex pariatur ut exercitation laboris quis adipisicing mollit reprehenderit exercitation. Proident qui ullamco consectetur voluptate adipisicing. Enim sunt non elit proident ea non do nulla enim cillum cillum labore qui ad. Dolor id
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About