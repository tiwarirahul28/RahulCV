import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

// ✅ Correct schema matching your form fields
const contactValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  url: Yup.string().url("Invalid URL").nullable(),
  message: Yup.string().min(10, "Too short!").required("Message is required"),
});

const Index = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      url: "",
      message: "",
    },
    validationSchema: contactValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="px-4 md:px-20 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <div className="h-[80px]">
          <input
            placeholder="Your name"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full p-3 border border-black rounded outline-none"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </div>
          )}
        </div>

        <div className="h-[80px]">
          <input
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-3 border border-black rounded outline-none"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div className="h-[80px]">
          <input
            placeholder="Your website (If exists)"
            id="url"
            name="url"
            type="url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.url}
            className="w-full p-3 border border-black rounded outline-none"
          />
          {formik.touched.url && formik.errors.url && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.url}</div>
          )}
        </div>

        <div className="h-[80px]">
          <textarea
            placeholder="How can I help?*"
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full p-3 border border-black rounded min-h-[100px] outline-none resize-none"
          />
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          )}
        </div>

        <div className="flex justify-between items-center mt-16">
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-white border border-black hover:text-black transition-colors duration-300 cursor-pointer"
          >
            Get In Touch
          </button>

          <div className="flex gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-3 rounded hover:bg-white hover:text-black border border-black transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-3 rounded hover:bg-white hover:text-black border border-black transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-3 rounded hover:bg-white hover:text-black border border-black transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-3 rounded hover:bg-white hover:text-black border border-black transition-colors duration-300"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </form>
      <div>
        <h2 className="text-3xl md:text-5xl leading-10 md:leading-16 font-bold">
          Let’s talk for <br />
          Something special
        </h2>
        <p className="text-base mt-3 md:mt-5 leading-relaxed text-[#71717A] mb-5">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>

        <span className="text-xl md:text-3xl leading-6 md:leading-10 font-bold">
          Youremail@gmail.com
        </span>
        <br />
        <span className="text-xl md:text-3xl leading-6 md:leading-10 font-bold">
          1234567890
        </span>
      </div>
    </section>
  );
};

export default Index;
