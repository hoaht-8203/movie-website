import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Button } from '@mui/material';
import SearchForm from './components/SearchForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import ImdbIcon from 'components/Icon/ImdbIcon';

Header.propTypes = {};

function Header(props) {
    return (
        <>
            <header className="grid items-center gap-2 p-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                <div className="text-center md:text-left lg:text-left">
                    <a href="!#">
                        <h1 className="text-2xl font-bold tracking-[0.4rem] text-red-500">XEMPHIM</h1>
                    </a>
                </div>
                <div>
                    <SearchForm />
                </div>
                <div className="flex justify-center md:justify-end lg:justify-end">
                    <Button
                        className="gap-2 bg-[#F4F4F4] px-3 py-2 font-bold text-black"
                        startIcon={
                            <Avatar
                                sx={{ width: 24, height: 24 }}
                                variant="rounded"
                                alt="Hoa HT"
                                src="/static/images/avatar/1.jpg"
                            />
                        }
                        endIcon={<ExpandMoreIcon />}>
                        Profile
                    </Button>
                </div>
            </header>
            <main>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div
                            className="relative h-[550px] shadow-[0_0_0_2000px_rgb(0,0,0,0.45)_inset]"
                            style={{
                                background: 'url(https://image.tmdb.org/t/p/original/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg)',
                                backgroundSize: 'cover',
                            }}>
                            <div className="absolute h-[100%] w-[100%]">
                                <div className="container mx-auto flex h-[100%] w-[70%] items-center text-white">
                                    <div className="flex gap-[2rem]">
                                        <div>
                                            <a href="!#">
                                                <img
                                                    className="rounded-3xl shadow-2xl"
                                                    src="https://image.tmdb.org/t/p/w342/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div>
                                            <a href="!#" className="text-[2.5rem] font-medium leading-[1.1]">
                                                Silent Night
                                            </a>
                                            <h3 className="mb-[1.5rem] text-[1.5rem] leading-[1.5] text-[#b9b9b9]">
                                                Đêm câm lặng (2023)
                                            </h3>
                                            <p className="mb-[1rem]">1 giờ 44 phút</p>
                                            <div>
                                                <span className="mr-2 mt-[-0.25rem] inline-block align-middle">
                                                    <ImdbIcon size={40} />
                                                </span>
                                                <span className="font-bold">5.7</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="relative h-[550px] shadow-[0_0_0_2000px_rgb(0,0,0,0.45)_inset]"
                            style={{
                                background: 'url(https://image.tmdb.org/t/p/original/8GnWDLn2AhnmkQ7hlQ9NJUYobSS.jpg)',
                                backgroundSize: 'cover',
                            }}>
                            <div className="absolute h-[100%] w-[100%]">
                                <div className="container mx-auto flex h-[100%] w-[70%] items-center text-white">
                                    <div className="flex gap-[2rem]">
                                        <div>
                                            <a href="!#">
                                                <img
                                                    className="rounded-3xl shadow-2xl"
                                                    src="https://image.tmdb.org/t/p/w342/ePquoeNxJ6vg8U7iSjRAZ2KdztX.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div>
                                            <a href="!#" className="text-[2.5rem] font-medium leading-[1.1]">
                                                The Hunger Games: The Ballad of Songbirds & Snakes
                                            </a>
                                            <h3 className="mb-[1.5rem] text-[1.5rem] leading-[1.5] text-[#b9b9b9]">
                                                Đấu trường sinh tử: Khúc hát của chim ca và rắn độc (2023)
                                            </h3>
                                            <p className="mb-[1rem]">2 giờ 37 phút</p>
                                            <div>
                                                <span className="mr-2 mt-[-0.25rem] inline-block align-middle">
                                                    <ImdbIcon size={40} />
                                                </span>
                                                <span className="font-bold">7.5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="relative h-[550px] shadow-[0_0_0_2000px_rgb(0,0,0,0.45)_inset]"
                            style={{
                                background: 'url(https://image.tmdb.org/t/p/original/w5ICY18bp2i8vvXeHYL2jkuSvoD.jpg)',
                                backgroundSize: 'cover',
                            }}>
                            <div className="absolute h-[100%] w-[100%]">
                                <div className="container mx-auto flex h-[100%] w-[70%] items-center text-white">
                                    <div className="flex gap-[2rem]">
                                        <div>
                                            <a href="!#">
                                                <img
                                                    className="rounded-3xl shadow-2xl"
                                                    src="https://image.tmdb.org/t/p/w342/oyA5JnUgrnx4onLWyav4UnUey0t.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div>
                                            <a href="!#" className="text-[2.5rem] font-medium leading-[1.1]">
                                                Night Has Come
                                            </a>
                                            <h3 className="mb-[1.5rem] text-[1.5rem] leading-[1.5] text-[#b9b9b9]">
                                                Màn Đêm Kinh Hoàng (2023)
                                            </h3>
                                            <div>
                                                <span className="mr-2 mt-[-0.25rem] inline-block align-middle">
                                                    <ImdbIcon size={40} />
                                                </span>
                                                <span className="font-bold">7.7</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </main>
        </>
    );
}

export default Header;
