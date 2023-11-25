import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="p-8">
            <SectionTitle heading={"Testimonials"} subHeading={"what our client say"} />

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id} >
                        <div className="my-5 mx-16 flex flex-col items-center">
                            <img className="rounded-full md:w-1/6" src={review.avatar} alt="avatar" />
                            <h3 className="text-2xl text-pink-600">{review.name}</h3>
                            <p className="py-8">{review.testimonial}</p>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={3}
                                readOnly
                                className="mb-5"
                            />
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonials;