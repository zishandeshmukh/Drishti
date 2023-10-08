import Head from 'next/head'
import React from "react";
import Img from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Layout from './api/components/Layout'
import data from "./data.json"
import Script from 'next/script'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import Link from "next/link";
import { Card, Col, Text } from "@nextui-org/react";
import { Modal, useModal, Button, Image } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import Footer from './api/components/Footer';
import Eyes from './Eyes';

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  const root = useRef();
  const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false, false])
      : setActive([true, true, true, true, true, true]);
  };



  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const [visible1, setVisible1] = React.useState(false);
  const handler1 = () => setVisible1(true);

  const closeHandler1 = () => {
    setVisible1(false);
    console.log("closed");
  };
  const [visible2, setVisible2] = React.useState(false);
  const handler2 = () => setVisible2(true);

  const closeHandler2 = () => {
    setVisible2(false);
    console.log("closed");
  };
  const [visible3, setVisible3] = React.useState(false);
  const handler3 = () => setVisible3(true);

  const closeHandler3 = () => {
    setVisible3(false);
    console.log("closed");
  };
  const [visible4, setVisible4] = React.useState(false);
  const handler4 = () => setVisible4(true);

  const closeHandler4 = () => {
    setVisible4(false);
    console.log("closed");
  };
  const [visible5, setVisible5] = React.useState(false);
  const handler5 = () => setVisible5(true);

  const closeHandler5 = () => {
    setVisible5(false);
    console.log("closed");
  };
  const [visible6, setVisible6] = React.useState(false);
  const handler6 = () => setVisible6(true);

  const closeHandler6 = () => {
    setVisible6(false);
    console.log("closed");
  };
  const [visible7, setVisible7] = React.useState(false);
  const handler7 = () => setVisible7(true);

  const closeHandler7 = () => {
    setVisible7(false);
    console.log("closed");
  };





  return (
    <>
      {/* 
    } */}
      <div className='body1'>
        <Head>
          <title>Drishti 2023 | MESA | GCOEN </title>
          <link rel="icon" href="https://i.postimg.cc/LXVx3CzZ/white-drishti-23.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

        </Head>

        <nav class="navbar">
          <div class="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <ul class="menu-items">
              <li><a className='btn btn-ghost' href="/">Home</a>        </li>
              <li><a className='btn btn-ghost' href="/event">Event</a>  </li>
              {/* <li><a className='btn btn-ghost' href="#">Gallery</a>     </li> */}
              <li><a className='btn btn-ghost' href="/Team">Team</a>    </li>
              <li><a className='btn btn-ghost' href="/Contactus">Contact Us</a>  </li>
            </ul>
            {/* <h1 class="logo"> <img src="https://see.fontimg.com/api/renderfont4/7BPoE/eyJyIjoiZnMiLCJoIjo4NSwidyI6MTI1MCwiZnMiOjY4LCJmZ2MiOiIjRkRGREZEIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/RHJpc2h0aQ/race-guard.png" alt="" /></h1> */}
            {/* <h1 class="logo"> <img src="https://i.postimg.cc/br3wxhCS/white-drishti.png" alt="" /></h1> */}
            <h1 class="logo"> <img src="https://i.postimg.cc/52CHR11d/whites-logo.png" alt="" /></h1>
          </div>
        </nav>
        {/* background: ur(""); */}
        <div className="container ">
          <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-0 lg:px-20 text-center">
              {/* <div className='main_bg h-screen w-screen'> */}
              <div className="page h-screen items-center main_image" ref={root}>
                <div class="wrapper ">

                  {/* <div class="glow " data-text="Glow">Drishti</div>
                  <div class="glow-shadow" aria-hidden="true">Drishti</div> */}

                  <Eyes />
                  <div className='flex items-center'>
                    <div className="boxer   	">
                      <h3 className=' font-thin text-4xl lg:text-5xl lg:font-medium leading-snug	text-white	  '>
                        Welcome to Drishti 2023
                      </h3>
                    </div>
                  </div>

                </div>
                {/* <a href="https://ibb.co/6gLP95s"><img src={drishti} alt="asdfhj" border="0" /></a> */}
              </div>
              <div className="my-20" id='about'>
                <h1 className="text-6xl  mb-20 text-white tracking-wide"> ABOUT </h1>
                <div className="max-w-md w-full lg:max-w-full lg:flex border-0  aboutt ">
                  <div className=" h-auto lg:h-[17rem] lg:w-[30rem] aspect-video flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden about_img" title="Drishti 2023">
                  </div>
                  <div className="  border-0 h- rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal  about__drishti">
                    <div className="">

                      <p className="text-gray-700 text-base ">"Rooted in our collective spirit, Drishti symbolizes the drive for excellence achieved through teamwork. With the unity of all participants, this tech fest is coming back stronger than ever.

                        With renewed energy, Drishti offers a diverse range of events, workshops, and exciting prizes for everyone to enjoy. Get ready for an unforgettable experience that's open to all.

                        We can't wait to welcome everyone to this celebration!"</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="" id='event'>
                <h1 className="text-6xl  mb-20 text-white tracking-wide"> EVENTS </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] lg:gap-[10rem] aboutt">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4 " style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">Incadibles</h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler} >
                        Explore
                      </Button>
                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible}
                          onClose={closeHandler}
                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/tTYPN2Y7/football.jpg"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Incadibles
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3 Nov 2023</h1> <br />

                                  <p className='font-semibold'>Step into a world of extraordinary powers, family bonds, and thrilling adventures as we bring you "The Incredibles Event" – an unforgettable celebration of the beloved Pixar superhero family!.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button color="secondary" role="button" auto flat >
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button color="secondary" role="button" auto >
                                    Register  [&#8377;60/-]
                                  </Button></Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">Virtual Placements </h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler1} >
                        Explore
                      </Button>
                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible1}
                          onClose={closeHandler1}
                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/tTYPN2Y7/football.jpg"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Virtual Placements
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3ᵗʰ Nov 2023</h1> <br />

                                  <p className='font-semibold'>Are you ready to embark on a transformative journey that bridges the gap between education and real-world experience? Welcome to the Virtual Placements Showcase, an innovative event designed to connect students, educators, and employers in a dynamic online environment.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button color="secondary" role="button" auto flat >
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button color="secondary" role="button" auto >
                                    Register [&#8377;60]</Button>
                                </Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">Ai workshop</h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler2} >
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible2}
                          onClose={closeHandler2}
                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/tTYPN2Y7/football.jpg"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Ai workshop
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3rd Nov 2023</h1> <br />

                                  <p className='font-semibold'>Join us for a transformative experience at our AI Workshop event, where you'll delve into the fascinating world of Artificial Intelligence (AI). Whether you're a beginner or an AI enthusiast looking to expand your knowledge, this workshop is designed to provide you with practical insights, hands-on experience, and a deeper understanding of AI's limitless possibilities.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button color="secondary" role="button" auto flat>
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button color="secondary" role="button" auto >
                                    Register [&#8377;30](solo)
                                  </Button></Link>


                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">Robocon Competition</h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler3} >
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"

                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible3}
                          onClose={closeHandler3}
                        >
                          <div className='event_modal'>
                            {/* <Image
                              showSkeleton
                              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                              width={1000}
                              height={490}


                            /> */}
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Robocon Competition
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3rd Nov 2023</h1> <br />

                                  <p className='font-semibold'>"The Robocon Competition is a thrilling and highly anticipated event that showcases the cutting-edge technology, engineering prowess, and creative innovation of teams from around the world. This annual robotics competition brings together passionate robotics enthusiasts, engineers, and students who design and build robots to compete in a challenging and exciting series of games."</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button color="secondary" role="button" auto flat >
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button color="secondary" role="button" auto >
                                    Register [&#8377;70]
                                  </Button></Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">Chess</h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler4} >
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible4}
                          onClose={closeHandler4}

                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/tTYPN2Y7/football.jpg"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  chess
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3rd Nov 2023</h1> <br />

                                  <p className='font-semibold'>Step into the world of strategy, intellect, and competition as we present "Grandmasters Clash: The Ultimate Chess Spectacle." This extraordinary chess event promises to be a celebration of the timeless game that has enthralled minds for centuries. Whether you're a seasoned chess aficionado or a novice eager to witness the brilliance of the world's finest chess players, this event is tailored to captivate and inspire.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button color="secondary" role="button" auto flat>
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button color="secondary" role="button" auto >
                                    Register (Duo) [&#8377;100]
                                  </Button></Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">treasure hunt</h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button class="button-72 text-lg" color="secondary" role="button" onPress={handler5} >
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll

                          blur
                          width='80%'
                          className='lg:w-[80%] w-[800px] '
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible5}
                          onClose={closeHandler5}

                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/tTYPN2Y7/football.jpg"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black text-3xl capitalize' size={18}>
                                  treasure hunt
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3rd Nov 2023</h1> <br />

                                  <p className='font-semibold'>Get ready for an adventure of a lifetime as we invite you to join us for the most exciting and thrilling event of the year - the "X Marks the Spot: Treasure Hunt Extravaganza"! This treasure hunt promises an unforgettable experience that will test your wits, teamwork, and exploration skills while uncovering hidden treasures and solving intriguing mysteries.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button color="secondary" role="button" auto flat>
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button color="secondary" role="button" auto >
                                    Register (Duo) [&#8377;60]
                                  </Button></Link>
                                <Link href=''>
                                  <Button color="secondary" role="button" auto >
                                    Register (Team) [&#8377;120]
                                  </Button></Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">Slow Football</h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler6} >
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible6}
                          onClose={closeHandler6}

                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/tTYPN2Y7/football.jpg"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Slow Football
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3rd Nov 2023</h1> <br />

                                  <p className='font-semibold'>Step onto the pitch and prepare to experience the beautiful game in a whole new light at our "Slo-Mo Soccer Spectacle" event. Slow Football, as we affectionately call it, is an extraordinary twist on the world's most popular sport that will leave you both mesmerized and utterly delighted.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button color="secondary" role="button" auto flat>
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button color="secondary" role="button" auto >
                                    Register (Team) [&#8377;250]
                                  </Button></Link>
                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">Webies</h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler7} >
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible7}
                          onClose={closeHandler7}

                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/tTYPN2Y7/football.jpg"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Webies
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3rd Nov 2023</h1> <br />

                                  <p className='font-semibold'>Webies is an annual celebration of the digital world that brings together the brightest minds, innovators, and enthusiasts from the vast landscape of the internet. This captivating event serves as a nexus where technology, creativity, and the digital community converge to explore, learn, and celebrate the ever-evolving web ecosystem.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button color="secondary" role="button" auto flat>
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button color="secondary" role="button" auto >
                                    Register (Single) [&#8377;70]
                                  </Button></Link>
                                <Link href=''>
                                  <Button color="secondary" role="button" auto >
                                    Register (Duo) [&#8377;100]
                                  </Button></Link>
                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className='grid place-items-center w-full'>
                <Layout
                  handleClick={handleClick}
                  isSomeActive={isSomeActive}
                  data={data}
                  turn={active}
                  setTurn={setActive}
                />
              </div>


              {/* <div className="my-20" id='sponsor'>
                <h1 className="text-6xl  mb-20 text-white tracking-wide"> SPONSORS </h1>
                <div className="grid grid-cols-3 gap-20 sponss">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Link href="https://www.google.com/">
                      <div className="bg-cover h-56 w-80 p-4 hover:scale-125" style={{ backgroundImage: "url('https://www.linkpicture.com/q/1.jpg')" }}></div>
                    </Link>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Link href="https://www.google.com/">
                      <div className="bg-cover h-56 w-80 p-4 hover:scale-125" style={{ backgroundImage: "url('https://www.linkpicture.com/q/1.jpg')" }}></div>
                    </Link>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Link href="https://www.google.com/">
                      <div className="bg-cover h-56 w-80 p-4 hover:scale-125" style={{ backgroundImage: "url('https://www.linkpicture.com/q/1.jpg')" }}></div>
                    </Link>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Link href="https://www.google.com/">
                      <div className="bg-cover h-56 w-80 p-4 hover:scale-125" style={{ backgroundImage: "url('https://www.linkpicture.com/q/1.jpg')" }}></div>
                    </Link>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Link href="https://www.google.com/">
                      <div className="bg-cover h-56 w-80 p-4 hover:scale-125" style={{ backgroundImage: "url('https://www.linkpicture.com/q/1.jpg')" }}></div>
                    </Link>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Link href="https://www.google.com/">
                      <div className="bg-cover h-56 w-80 p-4 hover:scale-125" style={{ backgroundImage: "url('https://www.linkpicture.com/q/1.jpg')" }}></div>
                    </Link>
                  </div>
                </div>

              </div> */}
            </main>
          </div>
        </div >
        <Footer />
        {/* https://www.linkpicture.com/q/imgbin_robot-gear-mechanical-engineering-mechanism-png.png */}
        <style jsx global > {`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&family=Russo+One&display=swap');
         #event{
         font-family: "Montserrat", sans-serif;
          font-weight: 600;
        }
        .event_modal p{
           font-family: "Montserrat", sans-serif;
          font-weight: 300;
        }
        #modal-title{
          font-size: 1.8rem;
           font-family: "Montserrat", sans-serif;
          font-weight: 600;
        }
        #modal-description h1{
          font-size: 1.2rem;
        }

        #modal-description p{
          font-size:1em;
        }
.about__drishti p{
  color: white;
  line-height: 34px;
  font-size: larger;
  text-align: justify;
  font-family: "Montserrat", sans-serif;

}
.card_content h1{
  font-family: "Montserrat", sans-serif;
}
.about__drishti{
  background: #44146b;
}
ul li a{
  font-family: "Montserrat", sans-serif;
}

        .events{
          width: 250px;
          margin: 1rem auto;
        }
        .sponss{
          
          margin: 0 auto;
          width: 72.5vw;
        }
        .spons{
          width: 315px;
          margin: 1rem auto;
        }
.wrapper {
  background-image: url(https://i.postimg.cc/xCPbmkft/drishti-bgg.png);
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: hard-light;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100vw 100vh;
  aspect-ratio: 16/9;
  position: relative;
  width: 99vw;
  height: 100%;
  border-radius: 15px;
  padding-block-end: 2rem;
  padding-inline: 2rem;
  overflow-x: clip;
   font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 15vw, 15rem);
  font-weight: 700;
  text-transform: uppercase;
  perspective: 2.5em;
}



.glow, 
.glow-shadow {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
}
.glow{
  position: relative;
  top: 100px;
}
.glow {
  --glow-color: hsl(248, 16%, 39%);
  background: inherit;
  background-size: cover;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 0);
  mix-blend-mode: plus-lighter;
  -webkit-text-stroke: 0.012em rgba(241, 240, 255, 0.384);
  filter: drop-shadow(0px 0px 5px var(--glow-color)) 
    drop-shadow(0px 0px 10px var(--glow-color));
}


.glow-shadow {
  color: hsl(20, 100%, 98%);
  mix-blend-mode: soft-light;
  filter: brightness(2);
  transform:translateY(10%)                 
    rotateX(81deg) 
    scaleY(-1)                               
    translateY(-15%) scaleY(1.35)
}   


.about_img{
 background-image: url('https://s6.gifyu.com/images/S4Xmu.gif');
}
.drishti{
  color:white;
}
        .body1{background-image: linear-gradient( 202deg, hsl(270deg 100% 7%) 0%, hsl(260deg 89% 10%) 6%, hsl(249deg 80% 14%) 13%, hsl(239deg 71% 18%) 19%, hsl(228deg 63% 22%) 25%, hsl(218deg 56% 26%) 31%, hsl(208deg 50% 31%) 37%, hsl(197deg 44% 36%) 44%, hsl(187deg 38% 41%) 50%, hsl(177deg 33% 47%) 56%, hsl(166deg 32% 53%) 63%, hsl(156deg 34% 59%) 69%, hsl(145deg 37% 66%) 75%, hsl(135deg 41% 73%) 81%, hsl(125deg 47% 80%) 87%, hsl(114deg 58% 87%) 94%, hsl(104deg 100% 95%) 100% );
        
          background: linear-gradient(to top, rgb(14 14 14), rgb(88, 28, 135),rgb(15, 23, 42),rgb(0 0 0), rgb(23 23 23));
        }

        .event_modal{
          display: flex;
          flex-direction: row;
          margin: 1rem;
         
        }
        .mesa_logo{
          width: 65px;
          height: 65px;
        }

.main_image{
  background: url(https://i.postimg.cc/xCPbmkft/drishti-bgg.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: 99VW;
  margin-left: -6px;
  height: 100vh;
}
        .page {
          font-family: Avenir, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          // margin-top: 60px;
          display: flex;
        }
        .footer_button{
          margin: 4rem;
          gap:2rem
        }
        .box1 {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: 600;
          color: #fff;
          margin: 0 auto;
        }
        button{
          margin: 1rem auto;
        }
        .event_img{
          margin: auto 1rem;
        }
        .box3 {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: 600;
          color: #fff;
          margin: 0 auto;
        }

        .box {
          width: 400px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: 600;
          color: #fff;
          margin: 0 auto;
        }
        .box2 {
          width: 200px;
          height: 200px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: 600;
          color: #fff;
          margin: 0 auto;
          position: relative;
          left: 20px;
        }
        
        *,
        *::after,
        *::before{
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
        
        .html{
            font-size: 62.5%;
        }
        
        .navbar input[type="checkbox"],
        .navbar .hamburger-lines{
            display: none;
        }
        
        .container{
            max-width: 1200px;
            width: 100%;
            margin: auto;
        }
        
        .navbar{
            // box-shadow: 0px 5px 10px 0px black;
            position: fixed;
            width: 100%;
         background: #0f0f0f;
        //  bakground: transparent;
            color: #fff;
            opacity: 0.85;
            z-index: 100;
            animation: navbar 3s ease-in-out;
        }

        @keyframes navbar {
          from {
            top: -100%;
          }
          to {
            top: 0%;
          }
        }
        
        .navbar-container{
            display: flex;
            justify-content: space-between;
            height: 64px;
            align-items: center;
        }
        
        .menu-items{
            order: 2;
            display: flex;
        }
        .logo{
            order: 1;
            font-size: 1.3rem;
        }
        .logo img{
          
          width: 180px;
          height: 70px;

        }
        .menu-items li a{
            list-style: none;
            margin-left: 1.5rem;
            font-size: 1.3rem;
        }
        
        .navbar a{
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease-in-out;
        }
        
        .navbar a:hover{
            color: #117964;
        }
        .boxer{
          position: absolute;
          opacity: 0;
          right: 7%;
          animation: welcome 3s alternate forwards ease-in-out;
          animation-delay: 1.5s;
        }

        @keyframes welcome {
          from {
            top: 0%;
            opacity: 0;
          }
          to {
            opacity: 1;
            top: 40%;
          }
        }
        .button-72 {
          align-items: center;
          background-color: initial;
          background-image: linear-gradient(rgba(179, 132, 201, .84), rgba(57, 31, 91, .84) 50%);
          border-radius: 42px;
          border-width: 0;
          box-shadow: rgba(57, 31, 91, 0.24) 0 2px 2px,rgba(179, 132, 201, 0.4) 0 8px 12px;
          color: #FFFFFF;
          cursor: pointer;
          display: flex;
          font-family: Quicksand,sans-serif;
          font-size: 18px;
          font-weight: 700;
          justify-content: center;
          letter-spacing: .04em;
          line-height: 16px;
          margin: 0;
          padding: 18px 18px;
          text-align: center;
          text-decoration: none;
          text-shadow: rgba(255, 255, 255, 0.4) 0 0 4px,rgba(255, 255, 255, 0.2) 0 0 12px,rgba(57, 31, 91, 0.6) 1px 1px 4px,rgba(57, 31, 91, 0.32) 4px 4px 16px;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          vertical-align: baseline;
          margin: auto;
        }
        
        .button-72:hover {
          background-image: linear-gradient(#B384C9, #391F5B 50%);
        }
   

        @media (max-width: 768px){
          .button-72 {
            font-size: 21px;
            padding: 18px 34px;
          }
          .boxer{
            position: absolute;
            opacity: 0;
            animation: welcomee 2s alternate forwards ease-in-out;
            animation-delay: 1.5s;
          }

          @keyframes welcomee {
            from {
              top: 0%;
              opacity: 0;
            }
            to {
              opacity: 1;
              top: 50%;
            }
          }
          .box {
           
    width: 250px;
    height: 300px;

            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-weight: 600;
            color: #fff;
            margin: 0 auto;
          }
          .box2{
            width: 80px;
            height: 80px;
            border-radius: 12px;
            display: flex;
            position: relative;
            left: 30px;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-weight: 600;
            color: #fff;
            margin: 0 auto;
          }
    
            .navbar{
                opacity: 0.95;
            }
        
            .navbar-container input[type="checkbox"],
            .navbar-container .hamburger-lines{
                display: block;
            }
        
            .navbar-container{
                display: block;
                position: relative;
                height: 64px;
            }
        
            .navbar-container input[type="checkbox"]{
                position: absolute;
                display: block;
                height: 32px;
                width: 30px;
                top: 20px;
                left: 20px;
                z-index: 5;
                opacity: 0;
                cursor: pointer;
            }
        
            .navbar-container .hamburger-lines{
                display: block;
                height: 28px;
                width: 35px;
                position: absolute;
                top: 20px;
                left: 20px;
                z-index: 2;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        
            .navbar-container .hamburger-lines .line{
                display: block;
                height: 4px;
                width: 100%;
                border-radius: 10px;
                background: #fff;
            }
            
            .navbar-container .hamburger-lines .line1{
                transform-origin: 0% 0%;
                transition: transform 0.3s ease-in-out;
            }
        
            .navbar-container .hamburger-lines .line2{
                transition: transform 0.2s ease-in-out;
            }
        
            .navbar-container .hamburger-lines .line3{
                transform-origin: 0% 100%;
                transition: transform 0.3s ease-in-out;
            }
        
            .navbar .menu-items{
                padding-top: 100px;
                
                background: #0f0f0f;
                height: 100vh;
                // max-width: 300px;
                transform: translate(-150%);
                display: flex;
                flex-direction: column;
                margin-left: -40px;
                padding-left: 40px;
                transition: transform 0.5s ease-in-out;
                // box-shadow:  5px 0px 10px 0px #aaa;
                overflow: scroll;
            }
        
            .navbar .menu-items li{
                margin-bottom: 1.8rem;
                font-size: 1.1rem;
                font-weight: 500;
            }
        
            .logo{
                position: absolute;
                top: 10px;
                right: 15px;
                font-size: 2.5rem;
            }
        
            .navbar-container input[type="checkbox"]:checked ~ .menu-items{
                transform: translateX(0);
            }
        
            .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1{
                transform: rotate(45deg);
            }
        
            .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2{
                transform: scaleY(0);
            }
        
            .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3{
                transform: rotate(-45deg);
            }
        
        }
        
        @media (max-width: 500px){
            .navbar-container input[type="checkbox"]:checked ~ .logo{
                display: none;
            }
            
        .event_modal{
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        Modal{
          width: 100%;
        }
        .event_modal div{
          width: 100%;
          height: 80%;
          padding: 2px;
          margin: 0;
        }
        .footer_button{
          margin:0 0 4rem 0;
          gap:4rem
        }
        .aboutt{
          width: 80vw;
        }
        .sponss{
            grid-template-columns: repeat(1, minmax(0, 1fr));
            width: 80vw;
        }
        .logo img{
          width: 168px;
          position: relative;
          left: 11px;
          bottom: 11px;
        }
        .glow{
          font-size: 4.8rem;
        }
        .glow-shadow{
          transform: translatey(-24%)rotatex(22deg)scaley(-1)translatey(-17%)scaley(1.4);
        }
        }
      `}</style >



      </div >



    </>

  )
}
