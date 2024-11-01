
const Footer = () => {
  return (
    <div className="relative bg-neutral text-neutral-content p-10 mt-[10rem]">
        <div className="absolute -top-32 left-64 w-2/3 flex justify-center items-center bg-gradient-to-r from-blue-100 to-yellow-100 py-16 rounded-lg shadow-md">
            <div className="text-center">
                <h2 className="text-2xl text-black font-semibold mb-2">Subscribe to our Newsletter</h2>
                <p className="text-gray-600 mb-4">Get the latest updates and news right in your inbox!</p>
                <div className="flex justify-center items-center gap-2">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full max-w-xs"
                />
                <button className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold">
                    Subscribe
                </button>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center my-28">
            <img src="./assets/logo-footer.png" alt="" />
        </div>
        <div>
            <footer className="footer mb-10">
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
                <h6 className="footer-title ">Subscribe</h6>
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
                    <button className="btn border-none  bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold join-item">
                        Subscribe
                    </button>
                </div>
                </fieldset>
            </form>
            </footer>
            <footer className="footer bg-neutral text-white  border-t border-gray-600 ">
                <div className="footer footer-center bg-neutral text-white p-4">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - Your Company All Rights Reserved</p>
                    </aside>
                </div>
            </footer>
        </div>
        
    </div>
  )
}

export default Footer
