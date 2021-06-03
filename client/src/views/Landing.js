import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    This is a simple example of a Landing Page you can build
                    using Blog Spot. It features multiple CSS components based
                    on the Tailwind CSS design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <section className="pb-20 bg-gradient-to-r from-gray-500 via-gray-300 to-blueGray-400 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-6/12 px-4 text-center ">
                <div className="relative flex flex-col min-w-0 break-words bg-gradient-to-r from-purple-700 via-indigo-400 to-blue-500 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-600">
                      <i className="fas fa-camera"></i>
                    </div>
                    <h6 className="text-xl text-green-200 font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-white">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-6/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-gradient-to-r from-purple-700 via-indigo-400 to-blue-500 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-400">
                      <i className="fas fa-users"></i>
                    </div>
                    <h6 className="text-xl text-green-200 font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-white">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-6">
              <div className="w-full md:w-5/12 mr-auto ml-auto">
                <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                        Interactive
                      </p>
                      <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                        Interactivity between team members is the key of the
                        success.
                      </h4>
                      <p className="mt-4 text-md leading-6 text-blueGray-800 dark:text-gray-300">
                        Build a simply and powered collaborative space for all
                        your team. Track, share, measure, you have a fully
                        control, it's never be simply and efficient.
                      </p>
                      <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                        <li className="mt-6 md:mt-0">
                          <div className="flex">
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                              <svg
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <span className="ml-4 text-base leading-6 font-medium text-blueGray-800 dark:text-gray-200">
                              Live modifications
                            </span>
                          </div>
                        </li>
                        <li className="mt-6 md:mt-0">
                          <div className="flex">
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                              <svg
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <span className="ml-4 text-base leading-6 font-medium text-blueGray-800 dark:text-gray-200">
                              Data tracker
                            </span>
                          </div>
                        </li>
                        <li className="mt-6 md:mt-0">
                          <div className="flex">
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                              <svg
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <span className="ml-4 text-base leading-6 font-medium text-blueGray-800 dark:text-gray-200">
                              24/24 support
                            </span>
                          </div>
                        </li>
                        <li className="mt-6 md:mt-0">
                          <div className="flex">
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                              <svg
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <span className="ml-4 text-base leading-6 font-medium text-blueGray-800 dark:text-gray-200">
                              Free tips to improve work time
                            </span>
                          </div>
                        </li>
                      </ul>
              </div>

              <div className="w-full md:w-5/12 mr-auto ml-auto">
                <div className="relative space-y-4">
                        <div className="flex items-end justify-center md:justify-start space-x-4">
                          <img
                            className="rounded-md shadow-md mx-4 my-4 w-32 md:w-56"
                            width={200}
                            src="https://www.tailwind-kit.com/images/object/8.jpg"
                            alt={1}
                          />
                          <img
                            className="rounded-md shadow-md mx-4 my-4 w-40 md:w-64"
                            width={260}
                            src="https://www.tailwind-kit.com/images/landscape/4.jpg"
                            alt={2}
                          />
                        </div>
                        <div className="flex items-start justify-center md:justify-start space-x-4 ml-12">
                          <img
                            className="rounded-md shadow-md mx-4 my-4 w-24 md:w-40"
                            width={170}
                            src="https://www.tailwind-kit.com/images/landscape/3.jpg"
                            alt={3}
                          />
                          <img
                            className="rounded-md shadow-md mx-4 my-4 w-32 md:w-56"
                            width={200}
                            src="https://www.tailwind-kit.com/images/object/9.jpg"
                            alt={4}
                          />
                        </div>
                      </div>
                    </div>
                </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl text-white mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-800">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-800">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <Link to="/" className="font-bold text-blueGray-800 mt-8">
                  Check Blog Spot!
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-gradient-to-r from-purple-700 via-indigo-400 to-blue-500 w-full mb-6 shadow-lg rounded-lg ">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 pb-20 bg-gradient-to-r from-gray-500 via-gray-300 to-blueGray-400">
          <div className="container mx-auto px-4  ">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://www.tailwind-kit.com/images/object/8.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 ">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9">
                  Manage everything
                </h4>
                <ul className="mt-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="h-6 w-6"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                          One-look dashboard
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                          Know everything about your business in a single glance
                          with your new dashboard.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="h-6 w-6"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                          Orders, managed
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                          All your orders in one place so you can manage your
                          delivery, collection, asap and pre-orders in one
                          place.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="h-6 w-6"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                          Email &amp; SMS Notifications
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                          Never miss a new order with notifications via your
                          dashboard, by sound, and to your email and phone.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 pb-20 bg-white">
          <div className="container mx-auto px-4 ">
            <div className="w-full bg-white p-12">
              <div className="header flex items-end justify-between mb-12">
                <div className="title">
                  <p className="text-4xl font-bold text-gray-800 mb-4">
                    Lastest articles
                  </p>
                  <p className="text-2xl font-light text-gray-400">
                    All article are verified by 2 experts and valdiate by the
                    CTO
                  </p>
                </div>
                <div className="text-end">
                  <form className="flex w-full max-w-sm space-x-3">
                    <div className=" relative ">
                      <input
                        type="text"
                        id='"form-subscribe-Search'
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Enter a title"
                      />
                    </div>
                    <button
                      className="flex-shrink-0 px-4 py-2 text-base font-semibold  bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="grid grid-cols-1 py-4 md:grid-cols-2 xl:grid-cols-3 gap-12">
              <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                  <a href="#" className="w-full block h-full">
                    <img
                      alt="blog photo"
                      src="https://www.tailwind-kit.com/images/blog/1.jpg"
                      className="max-h-40 w-full object-cover"
                    />
                  </a>
                  <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <a href="#" className="w-full block h-full">
                      <p className="text-indigo-500 text-md font-medium">Oui</p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        test
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        The new supercar is here, 543 cv and 140 000$ !!
                      </p>
                    </a>
                    <div className="flex items-center mt-4">
                      <a href="#" className="w-full block h-full"></a>
                      <a href="#" className="block relative">
                        <img
                          alt="profil"
                          src="https://www.tailwind-kit.com/images/person/6.jpg"
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </a>
                      <div className="flex flex-col justify-between ml-4 text-sm">
                        <p className="text-gray-800 dark:text-white">
                          Jean Jacques
                        </p>
                        <p className="text-gray-400 dark:text-gray-300">
                          20 mars 2029 - 6 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                  <a href="#" className="w-full block h-full">
                    <img
                      alt="blog photo"
                      src="https://www.tailwind-kit.com/images/blog/1.jpg"
                      className="max-h-40 w-full object-cover"
                    />
                  </a>
                  <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <a href="#" className="w-full block h-full">
                      <p className="text-indigo-500 text-md font-medium">Oui</p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        test
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        The new supercar is here, 543 cv and 140 000$ !!
                      </p>
                    </a>
                    <div className="flex items-center mt-4">
                      <a href="#" className="w-full block h-full"></a>
                      <a href="#" className="block relative">
                        <img
                          alt="profil"
                          src="https://www.tailwind-kit.com/images/person/6.jpg"
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </a>
                      <div className="flex flex-col justify-between ml-4 text-sm">
                        <p className="text-gray-800 dark:text-white">
                          Jean Jacques
                        </p>
                        <p className="text-gray-400 dark:text-gray-300">
                          20 mars 2029 - 6 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                  <a href="#" className="w-full block h-full">
                    <img
                      alt="blog photo"
                      src="https://www.tailwind-kit.com/images/blog/1.jpg"
                      className="max-h-40 w-full object-cover"
                    />
                  </a>
                  <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <a href="#" className="w-full block h-full">
                      <p className="text-indigo-500 text-md font-medium">Oui</p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        test
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        The new supercar is here, 543 cv and 140 000$ !!
                      </p>
                    </a>
                    <div className="flex items-center mt-4">
                      <a href="#" className="w-full block h-full"></a>
                      <a href="#" className="block relative">
                        <img
                          alt="profil"
                          src="https://www.tailwind-kit.com/images/person/6.jpg"
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </a>
                      <div className="flex flex-col justify-between ml-4 text-sm">
                        <p className="text-gray-800 dark:text-white">
                          Jean Jacques
                        </p>
                        <p className="text-gray-400 dark:text-gray-300">
                          20 mars 2029 - 6 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                  <a href="#" className="w-full block h-full">
                    <img
                      alt="blog photo"
                      src="https://www.tailwind-kit.com/images/blog/1.jpg"
                      className="max-h-40 w-full object-cover"
                    />
                  </a>
                  <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <a href="#" className="w-full block h-full">
                      <p className="text-indigo-500 text-md font-medium">Oiu</p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        test
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        The new supercar is here, 543 cv and 140 000$ !!
                      </p>
                    </a>
                    <div className="flex items-center mt-4">
                      <a href="#" className="w-full block h-full"></a>
                      <a href="#" className="block relative">
                        <img
                          alt="profil"
                          src="https://www.tailwind-kit.com/images/person/6.jpg"
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </a>
                      <div className="flex flex-col justify-between ml-4 text-sm">
                        <p className="text-gray-800 dark:text-white">
                          Jean Jacques
                        </p>
                        <p className="text-gray-400 dark:text-gray-300">
                          20 mars 2029 - 6 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                  <a href="#" className="w-full block h-full">
                    <img
                      alt="blog photo"
                      src="https://www.tailwind-kit.com/images/blog/1.jpg"
                      className="max-h-40 w-full object-cover"
                    />
                  </a>
                  <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <a href="#" className="w-full block h-full">
                      <p className="text-indigo-500 text-md font-medium">oui</p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        test
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        The new supercar is here, 543 cv and 140 000$ !!
                      </p>
                    </a>
                    <div className="flex items-center mt-4">
                      <a href="#" className="w-full block h-full"></a>
                      <a href="#" className="block relative">
                        <img
                          alt="profil"
                          src="https://www.tailwind-kit.com/images/person/6.jpg"
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </a>
                      <div className="flex flex-col justify-between ml-4 text-sm">
                        <p className="text-gray-800 dark:text-white">
                          Jean Jacques
                        </p>
                        <p className="text-gray-400 dark:text-gray-300">
                          20 mars 2029 - 6 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                  <a href="#" className="w-full block h-full">
                    <img
                      alt="blog photo"
                      src="https://www.tailwind-kit.com/images/blog/1.jpg"
                      className="max-h-40 w-full object-cover"
                    />
                  </a>
                  <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <a href="#" className="w-full block h-full">
                      <p className="text-indigo-500 text-md font-medium">Oui</p>
                      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        test
                      </p>
                      <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        The new supercar is here, 543 cv and 140 000$ !!
                      </p>
                    </a>
                    <div className="flex items-center mt-4">
                      <a href="#" className="w-full block h-full"></a>
                      <a href="#" className="block relative">
                        <img
                          alt="profil"
                          src="https://www.tailwind-kit.com/images/person/6.jpg"
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </a>
                      <div className="flex flex-col justify-between ml-4 text-sm">
                        <p className="text-gray-800 dark:text-white">
                          Jean Jacques
                        </p>
                        <p className="text-gray-400 dark:text-gray-300">
                          20 mars 2029 - 6 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    
        <section className="relative py-20 pb-20 bg-gradient-to-r from-gray-500 via-gray-300 to-blueGray-400">
          <div className="container mx-auto px-4  ">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 ">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-white mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-white mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-white mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-1-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-linkedin"></i>
                      </button>
                      <button
                        className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-github"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-2-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-4-470x470.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-linkedin"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-3-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <div className=" bg-blue-500 w-full md:w-60 w-full rounded-lg px-4 py-4 mb-6 shadow sm:inline-block">
                  <div className="flex items-start text-left">
                    <div className="flex-shrink-0">
                      <div className="inline-block relative">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://www.tailwind-kit.com/images/person/4.jpg"
                            className="mx-auto object-cover rounded-full h-16 w-16 "
                          />
                        </a>
                      </div>
                    </div>
                    <div className="ml-6">
                      <p className="flex items-baseline">
                        <span className="text-white">Charlie Rabiller</span>
                      </p>
                      <div className="flex items-center mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="mt-1 max-w-xs font-light text-white">
                      My first job of scanning photos at the Memories 2 Digital
                      Photo Scanning was fantastic. She completed the work
                      quickly while I was waiting. Thanks for a great service..
                    </p>
                  </div>
                  <div className="flex items-start text-gray-100 mt-6">
                    <button className="mr-4 hover:text-white">
                      <svg
                        width={25}
                        height={25}
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"></path>
                      </svg>
                    </button>
                    <button className="hover:text-white">
                      <svg
                        width={25}
                        height={25}
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1344 1024q133 0 226.5 93.5t93.5 226.5-93.5 226.5-226.5 93.5-226.5-93.5-93.5-226.5q0-12 2-34l-360-180q-92 86-218 86-133 0-226.5-93.5t-93.5-226.5 93.5-226.5 226.5-93.5q126 0 218 86l360-180q-2-22-2-34 0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5-93.5 226.5-226.5 93.5q-126 0-218-86l-360 180q2 22 2 34t-2 34l360 180q92-86 218-86z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <div className=" bg-blue-500 w-full md:w-60 w-full rounded-lg px-4 py-4 mb-6 shadow sm:inline-block">
                  <div className="flex items-start text-left">
                    <div className="flex-shrink-0">
                      <div className="inline-block relative">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://www.tailwind-kit.com/images/person/4.jpg"
                            className="mx-auto object-cover rounded-full h-16 w-16 "
                          />
                        </a>
                      </div>
                    </div>
                    <div className="ml-6">
                      <p className="flex items-baseline">
                        <span className="text-white">Charlie Rabiller</span>
                      </p>
                      <div className="flex items-center mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="mt-1 max-w-xs font-light text-white">
                      My first job of scanning photos at the Memories 2 Digital
                      Photo Scanning was fantastic. She completed the work
                      quickly while I was waiting. Thanks for a great service..
                    </p>
                  </div>
                  <div className="flex items-start text-gray-100 mt-6">
                    <button className="mr-4 hover:text-white">
                      <svg
                        width={25}
                        height={25}
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"></path>
                      </svg>
                    </button>
                    <button className="hover:text-white">
                      <svg
                        width={25}
                        height={25}
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1344 1024q133 0 226.5 93.5t93.5 226.5-93.5 226.5-226.5 93.5-226.5-93.5-93.5-226.5q0-12 2-34l-360-180q-92 86-218 86-133 0-226.5-93.5t-93.5-226.5 93.5-226.5 226.5-93.5q126 0 218 86l360-180q-2-22-2-34 0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5-93.5 226.5-226.5 93.5q-126 0-218-86l-360 180q2 22 2 34t-2 34l360 180q92-86 218-86z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <div className=" bg-blue-500 w-full md:w-60 w-full rounded-lg px-4 py-4 mb-6 shadow sm:inline-block">
                  <div className="flex items-start text-left">
                    <div className="flex-shrink-0">
                      <div className="inline-block relative">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://www.tailwind-kit.com/images/person/4.jpg"
                            className="mx-auto object-cover rounded-full h-16 w-16 "
                          />
                        </a>
                      </div>
                    </div>
                    <div className="ml-6">
                      <p className="flex items-baseline">
                        <span className="text-white">Charlie Rabiller</span>
                      </p>
                      <div className="flex items-center mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="mt-1 max-w-xs font-light text-white">
                      My first job of scanning photos at the Memories 2 Digital
                      Photo Scanning was fantastic. She completed the work
                      quickly while I was waiting. Thanks for a great service..
                    </p>
                  </div>
                  <div className="flex items-start text-gray-100 mt-6">
                    <button className="mr-4 hover:text-white">
                      <svg
                        width={25}
                        height={25}
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"></path>
                      </svg>
                    </button>
                    <button className="hover:text-white">
                      <svg
                        width={25}
                        height={25}
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1344 1024q133 0 226.5 93.5t93.5 226.5-93.5 226.5-226.5 93.5-226.5-93.5-93.5-226.5q0-12 2-34l-360-180q-92 86-218 86-133 0-226.5-93.5t-93.5-226.5 93.5-226.5 226.5-93.5q126 0 218 86l360-180q-2-22-2-34 0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5-93.5 226.5-226.5 93.5q-126 0-218-86l-360 180q2 22 2 34t-2 34l360 180q92-86 218-86z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <div className=" bg-blue-500 w-full md:w-60 w-full rounded-lg px-4 py-4 mb-6 shadow sm:inline-block">
                  <div className="flex items-start text-left">
                    <div className="flex-shrink-0">
                      <div className="inline-block relative">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://www.tailwind-kit.com/images/person/4.jpg"
                            className="mx-auto object-cover rounded-full h-16 w-16 "
                          />
                        </a>
                      </div>
                    </div>
                    <div className="ml-6">
                      <p className="flex items-baseline">
                        <span className="text-white">Charlie Rabiller</span>
                      </p>
                      <div className="flex items-center mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="mt-1 max-w-xs font-light text-white">
                      My first job of scanning photos at the Memories 2 Digital
                      Photo Scanning was fantastic. She completed the work
                      quickly while I was waiting. Thanks for a great service..
                    </p>
                  </div>
                  <div className="flex items-start text-gray-100 mt-6">
                    <button className="mr-4 hover:text-white">
                      <svg
                        width={25}
                        height={25}
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"></path>
                      </svg>
                    </button>
                    <button className="hover:text-white">
                      <svg
                        width={25}
                        height={25}
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1344 1024q133 0 226.5 93.5t93.5 226.5-93.5 226.5-226.5 93.5-226.5-93.5-93.5-226.5q0-12 2-34l-360-180q-92 86-218 86-133 0-226.5-93.5t-93.5-226.5 93.5-226.5 226.5-93.5q126 0 218 86l360-180q-2-22-2-34 0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5-93.5 226.5-226.5 93.5q-126 0-218-86l-360 180q2 22 2 34t-2 34l360 180q92-86 218-86z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gradient-to-r from-blue-900 to-gray-700">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-home text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-home text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block py-24 lg:pt-0 bg-gradient-to-r from-blue-900 to-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600  hover:bg-blueGray-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block py-24 lg:pt-0 bg-gradient-to-r from-gray-500 to-blueGray-400">
          <div className="flex flex-wrap text-center justify-center">
            <h2 className="text-4xl font-semibold py-10"> FAQ </h2>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">
                      Awarded Agency fdhkb?
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">Free Revisions ?</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">
                      Verified Company ?
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
