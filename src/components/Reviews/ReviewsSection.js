// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SingleReview from "./SingleReview";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

const data = [
    {
        name: "Programming Hero",
        position: "Programming Course Provider Team",
        description: `Dear Endgame Fighter,
        <br/>
        <br/>
        Thank you so much for all the hard work during the last 2 months. We are truly happy to see how much you have grown in this short time.
        <br/>
        <br/>
        <br/>
        Your dedication and hard work helped you to take your knowledge to the next level and such dedication deserves to be rewarded. 
        <br/>
        To honor your hard work, we at programming hero decided to give you a recommendation letter so that you can showcase your learning with pride.
        <br/>
        <br/>
        <br/>
        We hope that this <a href="https://drive.google.com/file/d/12hB7JecQ1Ek2nr1kLDPj62O2T6LxoPhj/view?usp=sharing" class="text-red-600 font-bold"><strong>recommendation letter</strong></a>  will help you to always look back at those 2 months and inspire you to work hard so that you can overcome any challenges with the highest confidence. 
        <br/>
        <br/>
        <br/>
        Best wishes for your future adventure.
        <br/>
        <a href="https://drive.google.com/file/d/12hB7JecQ1Ek2nr1kLDPj62O2T6LxoPhj/view?usp=sharing" class="text-red-600 font-bold"><strong>View letter</strong></a>
        <br/>
        <br/>
        Kind Regards,
        <br/>
        Programming Hero Job Placement Team`,
        link: "https://www.programming-hero.com/",
        image: "https://trickbd.com/wp-content/uploads/2020/08/18/IMG_20200818_100619.png",
    },
    {
        name: "Edvive",
        position: "Edvive is an educational company",
        description: `Edvive is an educational company building a metaverse of English Language learning Apps
        <br/>
        <br/>
        <br/>
        <iframe class="w-full" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fedviveofficial%2Fposts%2Fpfbid0JjuD9vhxJeWY3GF5xaTP84o2MEBm7L5ULwqoAKypmkWywdTDwowEuaphHojEz4E9l&show_text=true&width=500"  height="737" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        `,
        link: "https://www.edvive.com/",
        image: "https://www.edvive.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.10f75e21.png&w=64&q=75",
    },
    {
        name: "Mohidul Alam",
        position: "Founder at Edvive",
        description: `<iframe class="w-full" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmohid.edvive%2Fposts%2Fpfbid0iG9tatVhLX1Ef7hQzQhYQGZRHbzF7wa9hdKPyTS1BLetLyzjGwCTVEHXB7WWfmztl&show_text=true&width=500" height="812" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
        link: "https://www.linkedin.com/in/mdmohidul/",
        image: "https://i.ibb.co/YTMpRTR/1663956011726.jpg",
    }
]


export default function ReviewsSection() {
    return (
        <div>
            <Swiper
                spaceBetween={20}
                // grabCursor={true}
                // centeredSlides={true}
                slidesPerView={1}
                breakpoints={{
                    890: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    data.map((review, index) => (
                        <SwiperSlide key={index}>
                            <SingleReview review={review} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}