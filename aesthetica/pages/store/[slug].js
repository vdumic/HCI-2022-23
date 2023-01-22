import { useState } from "react";
import Link from "next/link";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { SlArrowRight } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";

import {
  getAllCategoriesByRoom,
  getAllRoomSlugs,
  getAllProductsByRoom,
} from "../api/ContentfulAPI";

import CategoriesSlider from "../../components/Store/Category/Room/CategoriesSlider";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import ItemsList from "../../components/Store/Category/ItemsList";

const RoomPage = ({ products, categories }) => {
  const [showProducts, setShowProducts] = useState(products);
  const [filterValue, setFilterValue] = useState("");

  const [filterPrice, setFilterPrice] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  const [filterColors, setFilterColors] = useState({
    white: false,
    black: false,
    gray: false,
    green: false,
    blue: false,
    brown: false,
  });

  const [filterAvailability, setFilterAvailability] = useState({
    inStock: false,
    preorder: false,
    bespoke: false,
  });

  const handleInput = (e) => {
    setFilterValue(e.target.value);

    setShowProducts(
      e.target.value == ""
        ? products
        : products.filter((product) => {
            return product.title
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          })
    );
  };

  const applyFilters = () => {
    let filtered = [];

    if (filterColors.white) {
      filtered.push(
        products.filter((product) => {
          return product.color == "White";
        })
      );
    }

    if (filterColors.black) {
      filtered.push(
        products.filter((product) => {
          return product.color == "Black";
        })
      );
    }

    if (filterColors.gray) {
      filtered.push(
        products.filter((product) => {
          return product.color == "Gray";
        })
      );
    }

    if (filterColors.green) {
      filtered.push(
        products.filter((product) => {
          return product.color == "Green";
        })
      );
    }

    if (filterColors.blue) {
      filtered.push(
        products.filter((product) => {
          return product.color == "Blue";
        })
      );
    }

    if (filterColors.brown) {
      filtered.push(
        products.filter((product) => {
          return product.color == "Brown";
        })
      );
    }

    if (filterPrice.first) {
      filtered.push(
        products.filter((product) => {
          return product.price <= 100;
        })
      );
    }

    if (filterPrice.second) {
      filtered.push(
        products.filter((product) => {
          return product.price > 100 && product.price <= 250;
        })
      );
    }

    if (filterPrice.third) {
      filtered.push(
        products.filter((product) => {
          return product.price > 350 && product.price <= 500;
        })
      );
    }

    if (filterPrice.fourth) {
      filtered.push(
        products.filter((product) => {
          return product.price > 500 && product.price <= 1000;
        })
      );
    }

    if (filterPrice.fifth) {
      filtered.push(
        products.filter((product) => {
          return product.price > 1000;
        })
      );
    }

    if (filterAvailability.inStock) {
      filtered.push(
        products.filter((product) => {
          return product.availability == "In Stock";
        })
      );
    }

    if (filterAvailability.preorder) {
      filtered.push(
        products.filter((product) => {
          return product.availability == "Pre-Order";
        })
      );
    }

    if (filterAvailability.bespoke) {
      filtered.push(
        products.filter((product) => {
          return product.availability == "Bespoke";
        })
      );
    }

    console.log(filtered);
  };

  return (
    <HeaderFooterLayout title="Aesthetica / Store">
      <div className="flex justify-start max-w-full mx-24 sm:mx-8 lg:my-10 sm:my-6">
        <p className="font-bold sm:text-2xl text-3xl">{categories[0].room}</p>
      </div>
      <CategoriesSlider categories={categories} />
      <div className="flex items-center max-w-xl lg:my-4 mx-auto bg-white sm:my-5 my-16 sm:mx-8">
        <input
          type="search"
          id="support-search"
          className="block w-full p-4 pl-10 text-m placeholder-gray-900 border-white"
          placeholder="Search products..."
          value={filterValue}
          onChange={handleInput}
          required
        />
        <button
          type="submit"
          className="bg-white right-2.5 bottom-2.5 text-black  px-4 py-2"
        >
          <AiOutlineSearch className="h-7 w-7 sm:inline cursor-pointer" />
        </button>
      </div>
      <div className="flex flex-row">
        <div className="flex justify-start w-1/6">
          <div className="mx-24">
            <div className="flex justify-between">
              <p className="font-bold text-2xl mb-6">Filters</p>
              <button
                onClick={applyFilters}
                className="font-semibold text-lg mb-6 border-2 px-2 border-black rounded-xl hover:bg-bckgrnd"
              >
                Apply
              </button>
            </div>
            <div className="w-[200px] h-[280px] bg-white flex justify-start">
              <div className="mx-6 mt-4 w-full">
                <p className="text-xl font-semibold mb-2">Price</p>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterPrice.first}
                          onClick={(e) => {
                            setFilterPrice({
                              first: !filterPrice.first,
                              second: filterPrice.second,
                              third: filterPrice.third,
                              fourth: filterPrice.fourth,
                              fifth: filterPrice.fifth,
                            });
                          }}
                        />
                      }
                      label="< €100"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterPrice.second}
                          onClick={(e) => {
                            setFilterPrice({
                              first: filterPrice.first,
                              second: !filterPrice.second,
                              third: filterPrice.third,
                              fourth: filterPrice.fourth,
                              fifth: filterPrice.fifth,
                            });
                          }}
                        />
                      }
                      label="€100-€250"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterPrice.third}
                          onClick={(e) => {
                            setFilterPrice({
                              first: filterPrice.first,
                              second: filterPrice.second,
                              third: !filterPrice.third,
                              fourth: filterPrice.fourth,
                              fifth: filterPrice.fifth,
                            });
                          }}
                        />
                      }
                      label="€250-€500"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterPrice.fourth}
                          onClick={(e) => {
                            setFilterPrice({
                              first: filterPrice.first,
                              second: filterPrice.second,
                              third: filterPrice.third,
                              fourth: !filterPrice.fourth,
                              fifth: filterPrice.fifth,
                            });
                          }}
                        />
                      }
                      label="€500-€1000"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterPrice.fifth}
                          onClick={(e) => {
                            setFilterPrice({
                              first: filterPrice.first,
                              second: filterPrice.second,
                              third: filterPrice.third,
                              fourth: filterPrice.fourth,
                              fifth: !filterPrice.fifth,
                            });
                          }}
                        />
                      }
                      label="€1000 >"
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="w-[200px] h-[320px] bg-white flex justify-start mt-6">
              <div className="mx-6 mt-4 w-full">
                <p className="text-xl font-semibold mb-2">Color</p>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterColors.white}
                          onClick={(e) => {
                            setFilterColors({
                              white: !filterColors.white,
                              black: filterColors.black,
                              gray: filterColors.gray,
                              green: filterColors.green,
                              blue: filterColors.blue,
                              brown: filterColors.brown,
                            });
                          }}
                        />
                      }
                      label="White"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterColors.black}
                          onClick={(e) => {
                            setFilterColors({
                              white: filterColors.white,
                              black: !filterColors.black,
                              gray: filterColors.gray,
                              green: filterColors.green,
                              blue: filterColors.blue,
                              brown: filterColors.brown,
                            });
                          }}
                        />
                      }
                      label="Black"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterColors.gray}
                          onClick={(e) => {
                            setFilterColors({
                              white: filterColors.white,
                              black: filterColors.black,
                              gray: !filterColors.gray,
                              green: filterColors.green,
                              blue: filterColors.blue,
                              brown: filterColors.brown,
                            });
                          }}
                        />
                      }
                      label="Gray"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterColors.green}
                          onClick={(e) => {
                            setFilterColors({
                              white: filterColors.white,
                              black: filterColors.black,
                              gray: filterColors.gray,
                              green: !filterColors.green,
                              blue: filterColors.blue,
                              brown: filterColors.brown,
                            });
                          }}
                        />
                      }
                      label="Green"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterColors.blue}
                          onClick={(e) => {
                            setFilterColors({
                              white: filterColors.white,
                              black: filterColors.black,
                              gray: filterColors.gray,
                              green: filterColors.green,
                              blue: !filterColors.blue,
                              brown: filterColors.brown,
                            });
                          }}
                        />
                      }
                      label="Blue"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterColors.brown}
                          onClick={(e) => {
                            setFilterColors({
                              white: filterColors.white,
                              black: filterColors.black,
                              gray: filterColors.gray,
                              green: filterColors.green,
                              blue: filterColors.blue,
                              brown: !filterColors.brown,
                            });
                          }}
                        />
                      }
                      label="Brown"
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="w-[200px] h-[200px] bg-white flex justify-start my-6">
              <div className="mx-6 mt-4 w-full">
                <p className="text-xl font-semibold mb-2">Availability</p>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterAvailability.inStock}
                          onClick={(e) => {
                            setFilterAvailability({
                              inStock: !filterAvailability.inStock,
                              preorder: filterAvailability.preorder,
                              bespoke: filterAvailability.bespoke,
                            });
                          }}
                        />
                      }
                      label="In Stock"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterAvailability.preorder}
                          onClick={(e) => {
                            setFilterAvailability({
                              inStock: filterAvailability.inStock,
                              preorder: !filterAvailability.preorder,
                              bespoke: filterAvailability.bespoke,
                            });
                          }}
                        />
                      }
                      label="Pre-Order"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterAvailability.bespoke}
                          onClick={(e) => {
                            setFilterAvailability({
                              inStock: filterAvailability.inStock,
                              preorder: filterAvailability.preorder,
                              bespoke: !filterAvailability.bespoke,
                            });
                          }}
                        />
                      }
                      label="Bespoke"
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly sm:mx-8 mx-24 my-10">
          <ItemsList products={showProducts} />
        </div>
      </div>
      <div className="flex justify-center my-10">
        <Link href={`/store/${products[0].roomSlug}`}>
          <button className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-lg font-medium py-2 px-6 border-2 border-black rounded-full shadow-xl">
            <p>Load more</p>
            <SlArrowRight className="h-6 w-6 sm:inline cursor-pointer pt-1" />
          </button>
        </Link>
      </div>
    </HeaderFooterLayout>
  );
};

export default RoomPage;

export async function getStaticPaths() {
  const rooms = await getAllRoomSlugs();

  const paths = rooms.map((room) => ({
    params: { slug: room.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const products = await getAllProductsByRoom(slug);
  const categories = await getAllCategoriesByRoom(slug);

  return {
    props: { products: products, categories: categories },
  };
}
