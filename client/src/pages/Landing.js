import Main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
            I'm baby iceland poutine disrupt, sus seitan tilde pinterest
            taxidermy. Twee JOMO 8-bit banjo hammock bushwick wayfarers. Hoodie
            tilde chambray raclette you probably haven't heard of them paleo pok
            pok bicycle rights. Paleo sus venmo franzen occupy synth XOXO yr
            banjo semiotics ascot big mood health goth hexagon.{' '}
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={Main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
