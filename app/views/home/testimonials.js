import martaIm from 'public/images/Marta.jpg'
import dominikaIm from 'public/images/Dominika.jpg'
import datrickIm from 'public/images/Patrick.jpg'

function Testimonial ({img, position = "", name, children}) {
  return(
    <div className={`col-12 text-center ${position}`}>
      <div className="box-icon-modern secondary">
        <div
          className="unit unit-spacing-lg flex-column flex-sm-row align-items-sm-center"
        >
          <div className="unit-left">
            <div className="box-icon-main">
              <img src={img} alt={name} />
            </div>
          </div>
          <div className="unit-body">
            <h4 className="box-icon-modern-title dark-title">
             {name}
            </h4>
            <p className="dark-text">
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials () {
  return(
    <section id = "testimonials" className="section-lg bg-gray-100">
    <div className="container">
      <div className="row row-50 align-items-lg-center">
        <div className="col-lg-6">
          <div className="row row-30">
            <Testimonial img = {martaIm} name = {'Marta Conti'}>
              After struggling with my child and his anger issues
              and quick temper I have seen the light which this
              wonderful program offers. I can’t recommend it enough
              for anyone who has anyone with difficult issues.
            </Testimonial>
            <Testimonial img = {dominikaIm} name = {'Dominika Matiss'} position = 'text-lg-left'>
              This program has a ton of great information that
              really helps parents understand our role in continuing
              the dance of arguments we are constantly engaging with
              our kiddos. Awareness is a huge step!
            </Testimonial>
            <Testimonial img = {datrickIm} name = {'Patrick Zaval'} position = 'text-lg-right'>
              This is a great program and eye opening, Easy to
              follow. I have listened to it many times and learn
              something new each time. Excellent source for any
              parent who is looking for a calm approach to
              parenting.
            </Testimonial>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="block-xs">
            <h2>What other parents say about us</h2>
            <p>
              During the last 20 years we have helped hundreds of parents
              reach the relationships they wanted and their children needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}