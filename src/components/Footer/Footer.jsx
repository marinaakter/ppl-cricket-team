
const Footer = () => {
  return (
    <div>
        
        <footer className="footer bg-neutral text-neutral-content p-10 mt-10">
            
            <nav>
                <h6 className="footer-title">About Us</h6>
                <p>We are a passionate team <br /> dedicated to providing the best <br />services to our customers.</p>
                
            </nav>
        <nav>
            <h6 className="footer-title ">Quick Links</h6>
            <ol className="flex flex-col space-y-2">
                <li><a className="link link-hover">Home</a></li>
                <li><a className="link link-hover">Services</a></li>
                <li><a className="link link-hover">About</a></li>
                <li><a className="link link-hover">Contacts</a></li>
            </ol>
        </nav>
        <form>
            <h6 className="footer-title">Subscribe</h6>
            <p className="text-gray-400 mb-2">Subscribe to our newsletter for the latest updates.</p>
            <fieldset className="form-control w-80">
            <label className="label">
                <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="join">
                <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered join-item" />
                <button className="btn bg- btn-primary join-item">Subscribe</button>
            </div>
            </fieldset>
        </form>
        </footer>
        <footer className="footer bg-neutral text-white  border-t border-gray-600 px-10 py-4">
            <div className="footer footer-center bg-neutral text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - Your Company All Rights Reserved</p>
                </aside>
            </div>
        </footer>
    </div>
  )
}

export default Footer
