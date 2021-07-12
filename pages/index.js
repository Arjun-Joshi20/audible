import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { getSession } from "next-auth/client";
import db from "../firebase";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import InstructionItem from "../components/InstructionItem";
import Image from "next/image";
import FAQItem from "../components/FAQItem";
import Loader from "../components/Loader";
import Fade from "react-reveal/Fade";
import FeatureItem from "../components/FeatureItem";

export default function Home({ session }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (session?.user) {
      db.collection("users").doc(session?.user.email).set(
        {
          email: session?.user.email,
          name: session?.user.name,
          photoURL: session?.user.image,
        },
        { merge: true }
      );
    }
  }, [session?.user]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <div className="item">
        <Head>
          <title>Audible India | Free Audiobook with Trial | Audible.in</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="icon.jpg" />
        </Head>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Header session={session} />
            <Banner />

            <div className="w-full p-5 mx-auto my-12 max-w-7xl dark:text-gray-100">
              <div className="text-center">
                <Fade top>
                  <h2 className="text-3xl font-medium">How It works</h2>
                </Fade>
                <div className="grid-flow-row-dense grid-cols-3 md:grid">
                  <Fade bottom>
                    <InstructionItem
                      heading="Join Audible"
                      image="https://m.media-amazon.com/images/G/08/AudibleFR/fr_FR/img/site/anonhp/how-to-1.120x120._CB1198675309_.svg"
                      description="Enjoy 30 days free, then you pay £7.99 per month. Cancel anytime."
                    />
                  </Fade>
                  <Fade bottom>
                    <InstructionItem
                      heading="Choose your title"
                      image="https://m.media-amazon.com/images/G/08/AudibleFR/fr_FR/img/site/anonhp/how-to-2.120x120._CB1198675309_.svg"
                      description="Take your pick from the world's largest selection, including the latest best sellers."
                    />
                  </Fade>
                  <Fade bottom>
                    <InstructionItem
                      heading="Download the app"
                      image="https://m.media-amazon.com/images/G/08/AudibleFR/fr_FR/img/site/anonhp/how-to-3.120x120._CB1198675309_.svgh"
                      description="Download the free app and your audiobook will be waiting in your library. Just press play and enjoy."
                    />
                  </Fade>
                </div>
              </div>

              <div className="my-10">
                <Image
                  src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1626077724/image-removebg-preview_j28sdr.png"
                  width={2000}
                  height={400}
                  objectFit="contain"
                  alt="books"
                />
              </div>
            </div>

            <div className="w-full p-5 my-12 bg-gray-200 dark:bg-gray-800">
              <div className="mx-auto max-w-7xl">
                <Fade left>
                  <FAQItem
                    question="What is Audible?"
                    answer="Audible lets you download and listen to the world’s best storytelling. Enjoy audiobooks, podcasts, original series and more on the free app. Perfect for your commute, drive, workout or just relaxing before bed."
                  />
                  <FAQItem
                    question="How do I get my free audiobook?"
                    answer="If you’re new to Audible, your free 30-day trial includes a free audiobook of your choice. Simply sign in with your Amazon account or create an account and choose your first audiobook from the world’s largest selection. After downloading the free Audible app on your device, your audiobook will be automatically available in your library to download and enjoy."
                  />
                  <FAQItem
                    question="How can I listen?"
                    answer="Download the Audible app for your iOS, Android or Windows smartphone or tablet. You can also listen on your Amazon devices like Kindle, Alexa-enabled devices and Fire TV. You can even listen on Sonos."
                  />
                  <FAQItem
                    question="What does the world's largest selectio of audio books include?"
                    answer="Whether you want to experience the latest best sellers, learn something new or just focus on yourself for a change, there’s plenty for you. And it’s all brought to life by the world’s best performers. These days, it’s not just audiobooks performed by single narrators either. Choose from a huge selection of full cast productions and original and exclusive content that you won’t find anywhere else. And if you’re in the mood for something shorter, try an Audible Original Podcast that members can listen to as much as they’d like."
                  />
                </Fade>
              </div>
            </div>

            <div className="p-5 my-12">
              <Fade left>
                <div
                  className="max-w-7xl mx-auto w-full py-14 min-h-[500px]"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dssvrf9oz/image/upload/v1626078037/UK-1727-Mythos-Landing_DT_App_2000x650_v01._CB1198675309_-removebg-preview_1_m95c3f.png)",
                    backgroundSize: "cover",
                  }}
                >
                  <Fade right>
                    <h1 className="text-3xl font-bold dark:text-gray-100">
                      Learn More
                    </h1>
                    <div className="md:w-1/2">
                      <FeatureItem
                        title="Get one audiobook every month"
                        description="Members get 1 credit a month, good for any title regardless of price. Choose from Audible Originals, best sellers, and more."
                      />
                      <FeatureItem
                        title="Audible Original Podcasts"
                        description="Members get free, unlimited listening to documentaries, comedies and more."
                      />
                      <FeatureItem
                        title="Offline Access"
                        description="Download your audiobooks to your app so you can listen without using data or Wi-Fi, at no extra cost."
                      />
                      <FeatureItem
                        title="Customisable Narration Speed"
                        description="Pick the pace that works for you. Vary the listening speed from 0.5x to 3x."
                      />
                    </div>
                  </Fade>
                </div>
              </Fade>
            </div>

            <Footer />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
