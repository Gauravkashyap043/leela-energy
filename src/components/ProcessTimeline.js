// components/ProcessTimeline.js
import { motion } from "framer-motion";

const ProcessTimeline = ({ steps }) => {
  return (
    <div className="relative py-12">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex relative mb-8"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
            {index + 1}
          </div>
          <div className="ml-4 pt-1">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.text}</p>
          </div>
          {index < steps.length - 1 && (
            <div className="absolute left-6 top-12 -ml-px h-full w-0.5 bg-gray-300"></div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProcessTimeline;
