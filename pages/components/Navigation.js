import Image from "next/image";
const Navigation = () => {
    return(
    <div className='Navigation container'>
    <div className='logo'> 
    <Image src="/brand_logo.png" width={500} height={500} alt="Picture of the author"/>
      </div>
      <div className='nav-items'>
      <ul>
        <li href='#'>Menu</li>
        <li href='#'>Location</li>
        <li href='#'>About</li>
        <li href='#'>Contact</li>
      </ul>
      </div>
      
      <div className='primary-btn'>
        <button>Login</button>
      </div>
  </div>)
}
export default Navigation;