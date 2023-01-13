import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import Link from "next/link";

import { exploreRooms, exploreCategories } from "../../constants/Explore";
import ExploreItem from "./ExploreItem";

const ExploreSlider = ({ roomsClicked, categoriesClicked }) => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-full py-12 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="sm:hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={5}
          visibleSlides={3}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 14"
                fill="none"
                src="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex md:gap-8 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {roomsClicked &&
                    exploreRooms.map(({ label, image, path, index }) => (
                      <ExploreItem
                        label={label}
                        image={image}
                        path={path}
                        index={index}
                        key={label}
                      />
                    ))}
                  {categoriesClicked &&
                    exploreCategories.map(({ label, image, path, index }) => (
                      <ExploreItem
                        label={label}
                        image={image}
                        path={path}
                        index={index}
                        key={label}
                      />
                    ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={5}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  {exploreRooms.map(({ label, image, path, index }) => (
                    <Slide index={index} key={label}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <Link href={`/store/${path}`}>
                          <Image
                            src={image}
                            alt={label}
                            width="240"
                            className="object-cover object-center w-full"
                          />
                        </Link>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default ExploreSlider;