import React from 'react'

const Footer = () => {
  return (
   <footer>
        <div className='container py-1'>
            <div className='row'>
                <div className='col-md-3'>
                    <h3>
                        Babid Construction
                    </h3>
                    <div className='pe-5'>
                    <p>Building a better future, one project at a time.</p>
                    </div>
        
                </div>
                
                <div className='col-md-3'>
                    <h3 className='mb-3'>Our Services</h3>
                    <ul>
                        <li>
                            <a href="">Special Construction <br /></a>
                            <a href="">Civil Construction <br /></a>
                            <a href="">Residential Construction <br /></a>
                            <a href="">Corporate Construction <br /></a>
                            <a href="">Building Construction <br /></a>
                            <a href="">Industrial Construction</a>
                        </li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <h3 className='mb-3'>Quick Links</h3>
                    <ul>
                        <li>
                            <a href="">About Us <br /></a>
                            <a href="">Services <br /></a>
                            <a href="">Projects <br /></a>
                            <a href="">Blog <br /></a>
                            <a href="">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className='col-md-3'>
                    <h3 className='mb-3'>Contact Us</h3>
                    <ul>
                        <li>
                            <a href="">091 123 4567 <br /></a>
                            <a href="">BabidConstruction@gmail.com <br /></a>
                            <a href="">123 Construction St, City  <br /></a>
                            <a href="">091 123 4567</a>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className='text-center pt-3'>Copy Right &copy; 2023 Babid Construction. All Rights Reserved.</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer