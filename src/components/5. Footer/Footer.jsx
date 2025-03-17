import React from 'react';
import logo from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div>
    <nav className=' bg-black w-full '>
    <img src={logo} alt="" className='w-30 mx-auto'/>
    </nav>
            <footer class="footer sm:footer-horizontal bg-black text-white p-10">
  <nav>
    <h1 className='font-semibold'>About Us</h1>
    <p className='text-white/70'>We are a passionate team dedicated to providing the best services to our customers.</p>
  </nav>
  <nav>
  <h1 className='font-semibold'>Quick Links</h1>
  <div className='text-white/70'>
    <li class="link link-hover">Home</li>
    <li class="link link-hover">Services</li>
    <li class="link link-hover">About</li>
    <li class="link link-hover">Contact</li>
  </div>
  </nav>
  <div></div>
  <form>
    <h6 class="footer-title">Newsletter</h6>
    <fieldset class="w-80">
      <label>Enter your email address</label>
      <div class="join">
      <input type="text" placeholder='Enter your email' className="input input-bordered join-item rounded-none rounded-l-xl" />
      <button className='btn rounded-none rounded-r-xl bg-gradient-to-r from-[#e4c896] via-[#deac88] to-[#f78297]'>Siuuubscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;