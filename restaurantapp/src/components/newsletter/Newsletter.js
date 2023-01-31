import SubHeading from "../subheading/SubHeading"
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="app-newsletter">
      <div className="app-newsletter-heading">
        <SubHeading title='Newsletter' />
        <h1 className="headtext-cormorant">
          Subscribe To Our Newsletter
        </h1>
        <p className="p-opensans">And never miss latest Updates!</p>
      </div>
    </div>
  )
}

export default Newsletter