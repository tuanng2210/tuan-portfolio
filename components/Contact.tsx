const Contact = () => {
  return (
    <section className="bg-black px-6 py-24 min-h-screen text-white flex justify-center items-center">
      <div className="text-center max-w-2xl w-full">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          <span className="text-white">Let&apos;s </span>
          <span className="text-purple-400">connect</span>
        </h2>

        <p className="text-gray-400 mb-10 text-lg">
          I&apos;m open to collaboration, freelance work, or just having a chat about
          tech and ideas.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href="mailto:tuanng2210@gmail.com"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Get In Touch
          </a>
          <a
            href="/resume.pdf"  // Ensure the file is in the public folder and referenced correctly
            download="Tuan_Nguyen_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Download CV
          </a>
        </div>

        <div className="text-gray-400 text-sm space-y-1">
          <p>Email me directly:</p>

          <div className="flex items-center justify-center gap-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.94 6.36a1 1 0 0 0-.44.86v5.56a1 1 0 0 0 1 1h12.99a1 1 0 0 0 1-1V7.22a1 1 0 0 0-.44-.86L10.5 2.73 2.94 6.36zm.69 1.2L10.5 4.14l6.87 3.42-6.87 4.33-6.87-4.33z" />
            </svg>
            <span>tuanng2210@gmail.com</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-white mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.5h5V24H0V8.5zM7.5 8.5h4.7v2.12h.07c.66-1.25 2.28-2.57 4.7-2.57 5.02 0 5.93 3.3 5.93 7.59V24h-5v-7.77c0-1.85-.03-4.23-2.57-4.23s-2.96 2-2.96 4.07V24h-5V8.5z" />
            </svg>
            <a
              href="https://www.linkedin.com/in/tuan-nguyen-331ba721b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              linkedin.com/in/tuan-nguyen-331ba721b
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
