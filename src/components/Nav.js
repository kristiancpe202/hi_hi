import colorlogo from '../images/Logo.png'
import blacklogo from '../images/logo-black.png'

const Nav = ({minimal, setShowModal, showModal, setIsSignUp}) => {
   const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
   }
   const authToken = false
    return (
    <nav>
        <div className="logo-container">
            <img className="Logo h-[70px]" 
            src= {minimal ? blacklogo : colorlogo}/>
        </div>
        {!authToken && !minimal &&<button className='nav-button'
        onClick={handleClick}
        disabled={showModal}
        >Log in</button>}
    </nav>
    
    )
    }
    export default Nav