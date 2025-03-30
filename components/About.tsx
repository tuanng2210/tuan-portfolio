const About = () => {
  return (
    <section
      id="about"
      className="bg-black px-6 py-24 min-h-screen flex justify-center items-center text-white"
    >
      <div className="text-center max-w-2xl">
        <img
          src="/avatar.jpg"
          alt="Tuan Nguyen"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-[#1f2937] shadow-xl transition-transform duration-500 ease-in-out animate-avatar"
        />

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          I build <span className="text-purple-400">web apps</span> <br />
          and bring ideas to life.
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          My name is Tuan Nguyen and I'm a fullstack developer based in Norfolk,
          VA with roots in Vietnam. I specialize in creating modern, responsive,
          and scalable web applications using cutting-edge technologies.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          With experience in both frontend and backend development, I focus on
          delivering clean code, great UI/UX, and collaborative project success.
        </p>
      </div>
    </section>
  );
};

export default About;
