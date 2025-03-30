const Hero = () => {
    return (
      <section className="flex flex-col items-center text-white text-center py-12 px-4">
        <img src="/avatar.jpg" alt="Avatar" className="w-40 rounded-full mb-6" />
        <h2 className="text-4xl font-bold mb-2">Tuan Nguyen</h2>
        <p className="text-lg text-gray-300">
          Fullstack Developer based in Norfolk, VA<br />
          originally from Vietnam
        </p>
      </section>
    );
  };
  
  export default Hero;
  