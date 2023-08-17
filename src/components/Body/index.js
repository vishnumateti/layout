// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showRightNavbar, showContent} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <h1 className="heading-text">Left Navbar Menu</h1>
              <ul className="list-container">
                <li className="items">Item 1</li>
                <li className="items">Item 2</li>
                <li className="items">Item 3</li>
                <li className="items">Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h1 className="heading-text">Content</h1>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor Incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-navbar-container">
              <h1 className="heading-text">Right Navbar</h1>
              <div className="box-container">
                <div className="add-box">
                  <p className="ad-text">Ad 1</p>
                </div>
                <div className="add-box">
                  <p className="ad-text">Ad 2</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
