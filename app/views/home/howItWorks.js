import discussIm from 'public/images/discuss.svg'
import learnIm from 'public/images/learn.svg'
import meetIm from 'public/images/meet.svg'
import playIm from 'public/images/play.svg'
import arrow1Im from 'public/images/arrow-1-152x146.png'
import arrow2Im from 'public/images/arrow-2-236x150.png'
import arrow3Im from 'public/images/arrow-3-281x166.png'

const arrowIms = [arrow1Im, arrow2Im, arrow3Im]

function Section ({img, num, c1, c2, c3, width, height, title, children}) {
  const arrowNum = Number(num) -1
  return(
    <div className={`row row-30 ${c1}`}>
      <div className={c2}>
        <div className="animate-box">
          <div
            className="wow slideInLeft"
            data-wow-delay="0.2s"
          >
            <img
              src={img}
              alt=""
              width={234*(1.2**arrowNum)}
              height={264*(1.2**arrowNum)}
            />
          </div>
        </div>
      </div>
      <div className={c3}>
        <div
          className="wow fadeIn"
          data-wow-delay="0.35s"
        >
          <div
            className="box-numeric unit unit-spacing-lg flex-column flex-sm-row"
          >
            <div className="unit-left">
              <div className="box-numeric-num"><span>{num}</span></div>
            </div>
            <div className="unit-body">
              <h4>{title}</h4>
              <p>
                {children}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`arrow-block arrow-${arrowNum+1} wow fadeIn`}
          data-wow-delay="0.45s"
        >
          <img
            src={arrowIms[arrowNum]}
            alt=""
            width= {width}
            height= {height}
          />
        </div>
      </div>
    </div>    
  )
}

const titleContainer = {
  visibility: 'hidden',
  animationName: 'none'
}
export default function HowItWorks () {
  return(
    <section id = "howItWorks" className="section-lg bg-default section-decoration-4">
      <div className="decoration-img">
        <img src="./Home_files/section-decorate-img-3.png" alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center justify-content-md-start">
          <div className="col-sm-9 col-lg-7 col-xl-5">
            <div className="text-center text-md-left">
              <div
                className="wow fadeInDown"
              >
                <h2>The learning experience</h2>
              </div>
            </div>
          </div>
        </div>
        <Section
          img = {discussIm}
          width="152"
          height="146"
          c1 = 'justify-content-center align-items-md-center'
          c2 = "col-md-5 col-lg-4 text-center"
          c3 = "col-md-7 col-lg-6"
          num = '01'
          title = {'Start interacting'}
        >
          Our interactive content is built to help you take action fast
        </Section>

        <Section
          img = {learnIm}
          width="236"
          height="150"
          c1 = 'align-items-md-center justify-content-md-end'
          c2 = 'col-md-5 col-lg-4 order-md-2 text-center'
          c3 = 'col-md-7 col-lg-6 col-xl-5 order-md-1'
          num = '02'
          title = {'Do your homework'}
        >
          Yes, we take our work seriously, and we know that, in
          order to have change, we all need to do our homework.
        </Section>

        <Section
          img = {meetIm}
          width="281"
          height="166"
          c1 = 'justify-content-center align-items-md-center'
          c2 = 'col-md-5 col-lg-5 text-center'
          c3 = 'col-md-7 col-lg-6'
          num = '03'
          title = {'Talk to us and your peers'}
        >
          We regularly organize sessions where you can meet with us and
          other parents just like you. Tell us about your specific needs and
          problems.
        </Section>

        <Section
          img = {playIm}

          c1 = 'justify-content-md-end align-items-md-center'
          c2 = 'col-md-5 col-lg-4 order-md-2 text-center'
          c3 = 'col-md-7 col-lg-6'
          num = '04'
          title = {'Be the parent you want to be'}
        >
         Enjoy a calm, anxiety and fear free life with your family.
        </Section>
        

      </div>
    </section>    
  )
}