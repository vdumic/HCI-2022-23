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
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

import { exploreRooms, exploreCategories } from "../../constants/Explore";
import ExploreItem from "./ExploreItem";
import ExploreItemMobile from "./ExploreItemMobile";

const ExploreSlider = ({ roomsClicked, categoriesClicked, offersClicked }) => {
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
              className="absolute z-30 left-0 ml-8"
              id="prev"
            >
              <SlArrowLeft className="h-7 w-7 cursor-pointer" />
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
                  {offersClicked &&
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
              className="absolute z-30 right-0 mr-8"
              id="next"
            >
              <SlArrowRight className="h-7 w-7 cursor-pointer" />
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="md:hidden"
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
              className="absolute z-30 left-0 ml-4"
              id="prev"
            >
              <SlArrowLeft className="h-7 w-7 cursor-pointer" />
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex items-center justify-center transition ease-out duration-700"
                >
                  {roomsClicked &&
                    exploreRooms.map(({ label, image, path, index }) => (
                      <ExploreItemMobile
                        label={label}
                        image={image}
                        path={path}
                        index={index}
                        key={label}
                      />
                    ))}
                  {categoriesClicked &&
                    exploreCategories.map(({ label, image, path, index }) => (
                      <ExploreItemMobile
                        label={label}
                        image={image}
                        path={path}
                        index={index}
                        key={label}
                      />
                    ))}
                  {offersClicked &&
                    exploreCategories.map(({ label, image, path, index }) => (
                      <ExploreItemMobile
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
              className="absolute z-30 right-0 mr-4"
              id="next"
            >
              <SlArrowRight className="h-7 w-7 cursor-pointer" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default ExploreSlider;
