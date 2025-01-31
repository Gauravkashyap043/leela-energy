import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import Footer from '../layouts/Footer';

const Contact = () => {
  // Form validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]{10}$/, 'Invalid phone number'),
    bill: Yup.number()
      .required('Electricity bill is required')
      .min(100, 'Bill must be at least ₹100'),
    address: Yup.string()
      .required('Address is required')
      .min(10, 'Address must be at least 10 characters'),
    locality: Yup.string()
      .required('Locality is required')
      .min(3, 'Locality must be at least 3 characters'),
    message: Yup.string()
      .notRequired()
      .max(500, 'Message cannot exceed 500 characters'),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      bill: '',
      address: '',
      locality: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert('Form submitted successfully!');
        resetForm();
      } catch (error) {
        alert('Submission failed. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <div >
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4 bg-gray-50 min-h-screen"
        >
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below, and one of our solar experts will get in touch
              with you shortly.
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="bg-white p-6 md:p-8 rounded-lg shadow-sm"
            >
              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full p-3 border rounded-lg ${formik.touched.name && formik.errors.name
                    ? 'border-red-500'
                    : 'border-gray-300'
                    }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className={`w-full p-3 border rounded-lg ${formik.touched.phone && formik.errors.phone
                    ? 'border-red-500'
                    : 'border-gray-300'
                    }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                )}
              </div>

              {/* Electricity Bill Field */}
              <div className="mb-6">
                <label htmlFor="bill" className="block text-gray-700 mb-2">
                  Monthly Electricity Bill (₹)
                </label>
                <input
                  id="bill"
                  name="bill"
                  type="number"
                  placeholder="Enter your average monthly bill"
                  className={`w-full p-3 border rounded-lg ${formik.touched.bill && formik.errors.bill
                    ? 'border-red-500'
                    : 'border-gray-300'
                    }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bill}
                />
                {formik.touched.bill && formik.errors.bill && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.bill}</p>
                )}
              </div>

              {/* Address Field */}
              <div className="mb-6">
                <label htmlFor="address" className="block text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  placeholder="Enter your full address"
                  className={`w-full p-3 border rounded-lg ${formik.touched.address && formik.errors.address
                    ? 'border-red-500'
                    : 'border-gray-300'
                    }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
                )}
              </div>

              {/* Locality Field */}
              <div className="mb-6">
                <label htmlFor="locality" className="block text-gray-700 mb-2">
                  Locality
                </label>
                <input
                  id="locality"
                  name="locality"
                  type="text"
                  placeholder="Enter your locality/city"
                  className={`w-full p-3 border rounded-lg ${formik.touched.locality && formik.errors.locality
                    ? 'border-red-500'
                    : 'border-gray-300'
                    }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.locality}
                />
                {formik.touched.locality && formik.errors.locality && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.locality}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="How can we help you?"
                  className={`w-full p-3 border rounded-lg ${formik.touched.message && formik.errors.message
                    ? 'border-red-500'
                    : 'border-gray-300'
                    }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
              >
                {formik.isSubmitting ? 'Submitting...' : 'Submit Now'}
              </button>
            </form>
          </div>
        </motion.section>
        <Footer />
      </div>
    </>
  );
};

export default Contact;