import React  from "react";
import { Link } from "react-router-dom";
import './Homepage.css';
import SearchBar from "../SearchBar/Searchbar"

export default function Homepage() {

  return (
    <div className="App">
       <header className="header">
        <a href="#" className="logo">Magicpost</a>

        <nav className="navbar">
            <a href="#home" className="active">Trang chủ</a>
            <a href="#about">Về công ty</a>
            <a href="#services">Dịch vụ</a>
            <a href="#contact">Liên hệ</a>
            <Link to="/Login" > <a href="#signin">Đăng nhập</a>  </Link>
            
        </nav>


        <div className="bx bx-menu" id="menu-icon"></div>
    </header>

    <section className="home" id="home">
        <div className="home-content">
            <h3>Xin chào , chúng tôi là</h3>
            <h1>Magicpost</h1>
            <p>
            Chúng tôi là đối tác tin cậy của bạn trong lĩnh vực vận chuyển bưu phẩm. Với cam kết đem lại dịch vụ chuyển phát nhanh, an toàn và hiệu quả, chúng tôi tự hào là đối tác lý tưởng cho mọi nhu cầu vận chuyển của bạn.


            </p>
            <p>Magicpost là một công ty chuyên nghiệp với hơn 10 năm kinh nghiệm trong ngành vận chuyển bưu phẩm. Chúng tôi đã xây dựng một hệ thống mạng lưới rộng khắp, kết hợp với công nghệ tiên tiến, để đảm bảo rằng bưu phẩm của bạn sẽ được vận chuyển một cách nhanh chóng và an toàn đến mọi địa điểm trên toàn thế giới.</p>

            <SearchBar />            
        </div>

        <div className="profession-container">
            <div className="profession-box">
                <div className="profession" style={{"--i":0}}>
                    <i className='bx bx-code-alt'></i>
                    <h3>Hiện đại</h3>
                </div>
                <div className="profession" style={{"--i":1}}>
                    <i className='bx bx-camera'></i>
                    <h3>Hiệu quả</h3>
                </div>
                <div className="profession" style={{"--i":2}}>
                    <i className='bx bx-palette'></i>
                    <h3>Thân thiện</h3>
                </div>
                <div className="profession" style={{"--i":3}}>
                    <i className='bx bx-video-recording'></i>
                    <h3>Đáng tin cậy</h3>
                </div>

                <div className="circle"></div>
            </div>

            <div className="overlay"></div>
        </div>

        <div className="home-img">
            <img src="/images/thangnguoidone.png" alt=""></img>
        </div>
    </section>

    <section className="about" id="about">
        <div className="about-img">
            <img src="/images/dungthang.png" alt=""></img>
        </div>

        <div className="about-content">
            <h2 className="heading">Về <span>Công ty</span></h2>
            <h3>
            Chào mừng bạn đến với Magicpost, nơi chúng tôi cam kết mang đến dịch vụ vận chuyển hàng hóa hiệu quả và đáng tin cậy. Chúng tôi tự hào là đối tác đồng hành của bạn trong mọi hành trình vận chuyển, với đội ngũ chuyên gia giàu kinh nghiệm và mạng lưới logictics toàn cầu.


            </h3>
            <p>
            Magicpost là một đội ngũ chuyên nghiệp chuyên cung cấp các giải pháp vận chuyển linh hoạt, đa dạng và dựa trên nhu cầu của khách hàng. Chúng tôi không chỉ mang lại sự thuận tiện và an toàn cho quá trình vận chuyển hàng hóa của bạn mà còn đảm bảo mức độ phục vụ tận tâm và hiệu suất tối ưu.


            </p>
            <p>
            Chúng tôi không chỉ làm việc để vận chuyển hàng hóa của bạn mà còn để xây dựng mối quan hệ đối tác lâu dài. Tại Magicpost, chúng tôi hiểu rằng mỗi đợt vận chuyển đều quan trọng, và chúng tôi luôn tận dụng mọi cơ hội để đảm bảo sự hài lòng của khách hàng.


            </p>
        </div>
    </section>

    <section className="services" id="services">
        <h2 className="heading"> <span>Dịch vụ</span></h2>

        <div className="services-container">
            <div className="services-box">
                <i className='bx bx-code-alt'></i>
                <h3>Dịch Vụ Giao Hàng Nhanh:</h3>
                <p>Chúng tôi cung cấp một dịch vụ vận chuyển giao hàng trong ngày hoặc giao hàng 24/48 giờ. Dịch vụ giao hàng nhanh siêu tốc của chúng tôi có thể giao hàng nhanh chóng và linh hoạt cho hàng hóa nhỏ và vừa</p>
            </div>
            <div className="services-box">
                <i className='bx bxs-paint'></i>
                <h3>Dịch Vụ Đóng Gói và Bảo Quản</h3>
                <p>Chúng tôi không chỉ là đối tác vận chuyển đáng tin cậy mà còn là người hỗ trợ đắc lực cho các nhu cầu đóng gói, bảo quản, và vận chuyển hàng hóa . Đội ngũ chúng tôi tuân thủ nghiêm ngặt các quy định an toàn và đảm bảo rằng hàng hóa của bạn luôn được vận chuyển một cách an toàn và hiệu quả.
</p>
            </div>
            <div className="services-box">
                <i className='bx bx-bar-chart-alt'></i>
                <h3>Dịch Vụ Theo Dõi và Báo Cáo</h3>
                <p>Công ty chúng tôi cung cấp hệ thống theo dõi trực tuyến và thường xuyên cập nhật báo cáo định kỳ về các hoạt động vận chuyển để khách hàng có thể kiểm tra tình trạng của đơn hàng.                                                                        
</p>
            </div>
        </div>
    </section>

    {/* <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Project</span></h2>

        <div className="portfolio-container">
            <div className="portfolio-box">
                <img src="/images/portfolio1.jpg" alt=""></img>

                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src="/images/portfolio2.jpg" alt=""></img>

                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src="/images/portfolio3.jpg" alt=""></img>

                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src="/images/portfolio4.jpg" alt=""></img>

                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src="/images/portfolio5.jpg" alt=""></img>

                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src="/images/portfolio6.jpg" alt=""></img>

                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
    </section> */}
{/* 
    <div className="testimonial-container">
        <h2 className="heading">Các thành viên <span></span></h2>

        <div className="testimonial-wrapper">
            <div className="testimonial-box mySwiper">
                <div className="testimonial-content swiper-wrapper">
                    <div className="testimonial-slide swiper-slide">
                        <img src="/images/Nichanoccho1.jpg" alt=""></img>
                        <h3>Tran Tuan Anh </h3>
                        <p>Thằng lỏ Vĩnh fuck 
                        </p>
                    </div>
                    <div className="testimonial-slide swiper-slide">
                        <img src="/images/hieulo1.jpg" alt=""></img>
                        <h3>Pham Minh Hieu </h3>
                        <p>Hiếu lổ trùm khối 8 9 </p>
                    </div>
                    <div className="testimonial-slide swiper-slide">
                        <img src="/images/Thienoccho1.jpg" alt=""></img>
                        <h3>Ma Thanh Thien</h3>
                        <p>rác gần bằng con kata</p>
                    </div>
                </div>

                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </div> */}

   
    <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>

        <form action="#">
            <div className="input-box">
                <input type="text" placeholder="Full Name"></input>
                <input type="email" placeholder="Email Address"></input>
            </div>
            <div className="input-box">
                <input type="number" placeholder="Mobile Number"></input>
                <input type="text" placeholder="Email Subject"></input>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" className="btn"></input>
        </form>
    </section>

    <footer className="footer">
        <div className="footer-text">
            <p>Copyright &copy; 2023 | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop">
            <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
    </footer>
    </div>
  );
}


