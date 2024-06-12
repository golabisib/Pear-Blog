import PropTypes from "prop-types"
import Footer from "./Footer"
import Header from "./Header"


function Layout({children}) {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
