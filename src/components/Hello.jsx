export function Hello({refs})
{
    return(
        <section ref={refs} className="hello-page">
            <div className="welcome">
                <p className="kufam-thin-font">Hi There,  my name is</p>
            </div>
            <div className="name">
                <p className="kumar-one-font">Dawid <span>Głowacz</span> </p>
            </div>
            <div className="position">
                <p className="kumar-one-font">Web Developer</p>
            </div>
            <div className="description">
                <p className="kufam-thin-font">Hello! I am passionate about programming and creating websites. 
                I have 2 years of experience working as a freelancer and in project teams. 
                Below you will find a short description of my skills and projects.
                </p>
            </div>
        </section>
    )
}