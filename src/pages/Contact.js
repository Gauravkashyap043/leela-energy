// components/Contact.js
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Required"),
  bill: Yup.number().min(100, "Bill too low").required("Required"),
  address: Yup.string().required("Required"),
  locality: Yup.string().required("Required"),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      bill: "",
      address: "",
      locality: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Replace with actual API call
        await fetch("https://formspree.io/f/your-form-id", {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        });
        alert("Form submitted successfully!");
        resetForm();
      } catch (error) {
        alert("Submission failed. Please try again.");
      }
    },
  });

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-6 bg-white p-8 rounded-lg shadow-sm"
        >
          {/* Form fields with error messages */}
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              name="name"
              {...formik.getFieldProps("name")}
              className={`w-full p-3 border rounded-lg ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>
          {/* Repeat for other fields */}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
          >
            {formik.isSubmitting ? "Submitting..." : "Submit Now"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
