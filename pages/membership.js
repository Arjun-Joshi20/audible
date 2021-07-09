import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer"
import InstructionItem from "../components/InstructionItem";
import FeatureItem from "../components/FeatureItem"
import Banner from "../components/Banner"
import Fade from "react-reveal/Fade";
import Jump from 'react-reveal/Jump';
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

function AboutMembership() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Head>
        <title>Audible India | Free Audiobook with Trial | Audible.in</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="icon.jpg" />
      </Head>
      {loading ? (
          <Loader />
        ) : (
          <>
      <Header />

      <main className="mt-6">

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-white py-20 px-5">
          <Fade bottom>
          <div className="max-w-lg mx-auto w-full">
            <h1 className="text-4xl font-bold">Audible Member Benefits</h1>
            
            <div className="text-xl my-4">
              <h2>Millions of listeners love being Audible members.</h2>
              <h2>It's easy to see why.</h2>
            </div>
            
            
            <button className="text-black transition duration-500 ease-in-out bg-[#FFA000] hover:bg-[#FFC849] py-2 transform hover:-translate-y-1 hover:scale-110 rounded-md w-full">
              Start your free trial now
            </button>
            
          </div>
          </Fade>
        </div>

        <div className="bg-gray-100 text-center">
          <div className="md:grid grid-flow-row-dense grid-cols-3 max-w-screen-xl mx-auto py-10">
            <Fade bottom>
            <InstructionItem
              title="Engaging stories"
              description="Get one audiobook every month and savings on additional purchases. Choose from celebrity performances, Audible original content, and more."
              image="https://m.media-amazon.com/images/G/31//AudibleIN/2018/audibleweb/October/membership_page_stories_icon_blue._CB1198675309_.svg"
            /></Fade>
            <Fade bottom>
            <InstructionItem
              title="Exceptional service"
              description="With Audible, satisfaction is guaranteed. Build your audiobook collection, keep up to six unused credits and more."
              image="https://m.media-amazon.com/images/G/31//AudibleIN/2018/audibleweb/October/membership_page_services_icon_blue._CB1198675309_.svg"
            /></Fade>
            <Fade bottom>
            <InstructionItem
              title="One powerful app"
              description="Listen on the go, switch devices without losing your place, and adjust your listening speed with our top-rated app."
              image="https://m.media-amazon.com/images/G/31//AudibleIN/2018/audibleweb/October/membership_page_devices_icon_blue._CB1198675309_.svg"
            /></Fade>
          </div>
        </div>

        <div className="px-5">
          <h1 className="text-3xl font-bold text-center py-20">The full story on membership</h1>

          <div 
            className="md:grid grid-flow-row-dense grid-cols-2 h-96 max-w-screen-lg mx-auto w-full"
            style={{
              backgroundImage: "url(https://m.media-amazon.com/images/G/31//AudibleIN/2018/audibleweb/October/book_wall_member_benefit_desktop._CB1198675309_.jpg)",
              backgroundSize: "cover",
            }}
          >
            <Fade left>
            <div>
              <h2 className="text-2xl font-semibold">Engaging stories and savings for members</h2>
              <FeatureItem 
                title="A new audiobook every month"
                description="As a member you get one credit every month - good for any audiobook regardless of duration or price."
              />
              <FeatureItem 
                title="Never pay full price"
                description="Used up your monthly credits? Members can buy additional audiobooks at any time for 30% off the list price."
              />
              <FeatureItem 
                title="You own your audiobooks"
                description="All the audiobooks in your Audible library are yours to keep, even if you cancel the membership."
              />
            </div>
            </Fade>
          </div>
        </div>

        <div className="bg-gray-900 py-5">
          <div className="text-center max-w-sm mx-auto">
            <h2 className="text-white text-2xl font-medium">We're Listening</h2>
            <Jump>
            <InstructionItem
              description="Our Customer Care team is available to help you get set up, answer questions, and find the right listen. (Get Help)"
              image="https://m.media-amazon.com/images/G/01/Audible/en_US/images/creative/landing/member_benefits/ICON_CustomerService.svg"
            /></Jump>
          </div>
          
        </div>

      </main>

      <Footer />
      </>
      )
          }
    </div>
  );
}

export default AboutMembership;
