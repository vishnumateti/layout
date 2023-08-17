// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const changeContent = () => {
        onToggleShowContent()
      }

      const changeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="layout-container">
          <h1 className="heading">Layout</h1>
          <input
            checked={showContent}
            id="content"
            type="checkbox"
            onChange={changeContent}
          />
          <label htmlFor="content" className="checkbox-text">
            Content
          </label>
          <br />
          <input
            checked={showLeftNavbar}
            id="leftNavbar"
            type="checkbox"
            onChange={changeLeftNavbar}
          />
          <label htmlFor="leftNavbar" className="checkbox-text">
            Left Navbar
          </label>
          <br />

          <input
            checked={showRightNavbar}
            id="rightNavbar"
            type="checkbox"
            onChange={changeRightNavbar}
          />
          <label htmlFor="rightNavbar" className="checkbox-text">
            Right Navbar
          </label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
