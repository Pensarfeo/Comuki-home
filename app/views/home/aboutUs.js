import debbieIm from 'public/images/debbie.jpg'
import pedroIm from 'public/images/Pedro.jpg'
const titleStyle = {
  // 'visibility': 'hidden',
  'animationName': 'none'
}


const nameStyle = {'marginLeft': '10px', width: "16px", height: '16px'}
const cardStyle = {'textAlign': 'left'}
const jobTitleStyle = {'fontStyle': 'italic'}

function PersonalCard ({img, name, job, linkedin, web, children}) {  
  return(
    <div className = "col-sm-12 col-lg-6">
      <div className = "team-classic" style={cardStyle}>
        <div className = "team-classic-img">
          <img
            src={img}
            alt={name}
            width="230"
            height="230"
          />
        </div>
        <div className = "team-classic-caption">
          <h5 className = "team-classic-title">
            {name}
            <a className = "icon fa-linkedin" style={nameStyle} href={linkedin}/>
            { web ? <a className = "icon fa-globe" style={nameStyle} href={web}/> : ""}

          </h5>
          <p style={jobTitleStyle}> {job}</p>
          <p>
            {children}
          </p>
          <p></p>
        </div>
      </div>
    </div>

  )
}

export default function AboutUs() {
  return(
      <section
        id = "aboutUs"
        className = "section-lg bg-default section-decoration-1 section-decoration-1-mode"
      >
        <div className = "container">
          <div className = "block-sm animate-box text-center text-md-left ml-md-0">
            <div
              className = "wow fadeInDown"
              style={titleStyle}
            >
              <h2>Your Hosts</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row row-30">
            <PersonalCard
            img = {debbieIm}
            name = {'Debbie Pincus, M.S. LMHC'}
            job = "Psycologis"
            linkedin = {"https://www.linkedin.com/in/debbiepincus/"}
            web = {"https://www.debbiepincus.com/content/about-me"}
            >
              Debbie is an author and clinical psychologist with more than
              25 years of experience, specialized in parenting and
              marriage counseling. She is also a board member of the
              Larchmont/Mamaroneck Counseling Center and the Total
              Transformation Advisory Board, and the author of several
              books on interpersonal relations. Debbie specializes in
              Bowen family systems, cognitive-behavioral therapy,
              dialectic behavioral therapy, and Screamfree Parent and
              Marriage Coaching.
            </PersonalCard>

            <PersonalCard
              img = {pedroIm}
              name = {'Pedro A. Favuzzi, Ph.D.'}
              job = "Host"
              linkedin = {"https://www.linkedin.com/in/pedro-antonio-favuzzi/"}
            >
              Pedro is a father, husband, and entrepreneur passionate
              about psychology and communication. He is also a serial
              entrepreneur passionate about education, technology, and self
              development. He will be your host, working with debbie to
              uncover all the information that might be hard to understand,
              and keep things focused on tangible, and actionable advice.
            </PersonalCard>
          </div>
        </div>

      </section>
  )
}