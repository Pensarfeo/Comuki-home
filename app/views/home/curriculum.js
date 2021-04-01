
const cardStyle = {
  height: '100%',
  paddingBottom: '90px'
}

const linkStyle = {
  position: 'absolute',
  bottom: '45px'
}

function Card ({iconName, title, children}) {
  return (
    <div
      className="col-sm-6 col-lg-4 wow fadeIn"
      data-wow-delay="0.2s"
    >
      <div
        className="box-icon-classic"
        style={cardStyle}
      >
        <div className="icon-main">
          <i className={`faIcon fas fa-${iconName}`}></i>
        </div>
        <h4 className="box-icon-title">
          <a href="#contact">{title}</a>
        </h4>
        <p>
          {children}
        </p>
        <a
          className="button-link"
          style={linkStyle}
          href="#contact"
        >
          <span>Learn More</span>
          <span className="icon fa-long-arrow-right"></span>
        </a>
      </div>
    </div>
  )
} 

export default function Curriculum() {
  return (
    <section
      id="curriculum"
      className="section-lg bg-default section-decoration-2 section-decoration-2-mode"
    >
      <div className="container">
        <div className="block-sm animate-box text-center text-md-left ml-md-0">
          <div
            className="wow fadeInDown"
          >
            <h2>What will you learn</h2>
          </div>
        </div>
        <div className="row row-30 cardsContainer">

          <Card iconName = 'spa' title = {'Remaining Calm'}>
            Learn how to communicate calmess to your child, how will it
            impact him/her, and yourself.
          </Card>

          <Card iconName = 'hat-wizard' title = {'Children Needs'}>
            Understanding your child needs will help you choose when action
            is needed and when is not.
          </Card>
          <Card iconName = 'fire' title = {'Activity Vs Reactivity'}>
            A strategy is all you need. Having a plan will remove confusion
            and frustration from your relationship with your child.
          </Card>
          <Card iconName = 'comment-dots' title = {'Communicate with actions'}>
            Our actions talk for us, our behavior is not influenced by now,
            but by thousands of little daily interactions.
          </Card>
          <Card iconName = 'seedling' title = {'Making children behave'}>
            Some time our children test us, knowing the best way to handle
            these situations will give you the confidence in yourself he
            needs you to have.
          </Card>
          <Card iconName = 'tree' title = {'Giving Space to Grow'}>
            Research shows parents have nearly no influence in what their
            children will become, but you can influence their future
            confidence and happiness.
          </Card>
        </div>
      </div>
    </section>
  );
}
