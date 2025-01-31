// components/Home.js
import { motion } from "framer-motion";
import {
  FaSolarPanel,
  FaRegMoneyBillAlt,
  FaLeaf,
  FaHome,
  FaChartLine,
  FaTools,
} from "react-icons/fa";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsStars } from "react-icons/bs";
import SEO from "../components/SEO";
import ProcessTimeline from "../components/ProcessTimeline";
import ReviewsCarousel from "../components/ReviewsCarousel";
import Footer from "../layouts/Footer";

const Home = () => {
  const whySolarPoints = [
    {
      icon: <FaRegMoneyBillAlt />,
      title: "Save Money",
      text: "Reduce electricity bills by up to 90%",
    },
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly",
      text: "Clean, renewable energy solution",
    },
    {
      icon: <BsStars />,
      title: "Govt Incentives",
      text: "Avail tax credits & subsidies",
    },
    { icon: <FaHome />, title: "Increase Value", text: "Boost property value" },
    {
      icon: <FaChartLine />,
      title: "Energy Independence",
      text: "Reduce grid reliance",
    },
    {
      icon: <FaTools />,
      title: "Low Maintenance",
      text: "Durable & reliable systems",
    },
  ];

  const processSteps = [
    { title: "Free Quote", text: "Get customized solar plan" },
    { title: "Expert Consultation", text: "Site visit & system design" },
    { title: "Choose System", text: "Select perfect package" },
    { title: "Install & Save", text: "Quick installation & savings" },
  ];

  const reviews = [
    {
      name: "Rahul Sharma",
      location: "Bangalore",
      text: "Leela Energy made our transition to solar seamless. Our energy bills have dropped by 80% and the installation team was professional.",
    },
    {
      name: "Priya Patel",
      location: "Mumbai",
      text: "Excellent service from start to finish. The financing options made it affordable, and we're already seeing significant savings.",
    },
    {
      name: "Anil Kumar",
      location: "Delhi",
      text: "Impressed with the quality of installation and post-sales support. Highly recommend Leela Energy Solutions!",
    },
    {
      name: "Gaurav Kumar",
      location: "Delhi",
      text: "Impressed with the quality of installation and post-sales support. Highly recommend Leela Energy Solutions!",
    },
    {
      name: "Rajan Kumar",
      location: "Delhi",
      text: "Impressed with the quality of installation and post-sales support. Highly recommend Leela Energy Solutions!",
    },
    {
      name: "Gaurav Kashyap",
      location: "Delhi",
      text: "Impressed with the quality of installation and post-sales support. Highly recommend Leela Energy Solutions!",
    },
  ];

  return (
    <div className="bg-gray-50">
      <SEO
        title="Leela Energy Solutions | Solar Installation Experts"
        description="Switch to solar energy with Leela Energy Solutions. Save up to 90% on electricity bills with our professional solar installation services."
        keywords="solar installation, solar energy, renewable energy, solar panels"
      />
      {/* Hero Section */}
      <div
        className="relative"
        style={{
          backgroundImage: `
      linear-gradient(180deg, rgba(25, 75, 50, 0.8) 0%, rgba(15, 55, 35, 0.6) 100%),
      url('https://assets.website-files.com/61cf32048e30b774421bffa5/61cf32048e30b7e00e1bffb1_bg-header-min%25402x-p-2000.jpeg')
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4"
        >
          <div className="text-white max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Power Your Home with{" "}
                <span className="text-green-300">Clean Solar Energy</span>
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Save Up to 90% on Electricity Bills
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
              >
                Get Free Quote
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
      {/* Why Solar Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Switch to Solar?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whySolarPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-green-600 text-3xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Installation Process */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            4-Step Installation Process
          </h2>
          <div className="flex gap-12 items-center">
            <div>
              <ProcessTimeline steps={processSteps} />
            </div>
            <div className="hidden md:block flex-1 h-full">
              <img
                // effect="blur"
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Solar installation process"
                className="rounded-lg shadow-xl w-full h-[30rem]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Financing Options */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Flexible Financing Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-green-100"
            >
              <h3 className="text-xl font-semibold mb-4">Zero Down Payment</h3>
              <p className="text-gray-600 mb-4">
                Start saving immediately with no upfront costs
              </p>
              <button className="text-green-600 font-semibold">
                Learn More →
              </button>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-green-100"
            >
              <h3 className="text-xl font-semibold mb-4">EMI Options</h3>
              <p className="text-gray-600 mb-4">
                Low-interest loans with flexible tenure
              </p>
              <button className="text-green-600 font-semibold">
                Learn More →
              </button>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-green-100"
            >
              <h3 className="text-xl font-semibold mb-4">Lease Options</h3>
              <p className="text-gray-600 mb-4">
                Rent your solar system with maintenance included
              </p>
              <button className="text-green-600 font-semibold">
                Learn More →
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Customer Reviews */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <ReviewsCarousel reviews={reviews} />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
