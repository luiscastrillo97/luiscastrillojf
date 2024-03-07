const Contact = () => {
  return (
    <section id="contact" className="py-24 flex justify-center">
      <div className="max-w-xl text-center">
        <h2 className="text-3xl mb-10 w-full">Get In Touch</h2>
        <div className="flex flex-col gap-10">
          <p>
            I’m currently looking for any new opportunities, so, my inbox is
            always open. Whether you have a question or just want to say hi,
            I’ll try my best to get back to you!
          </p>
          <div>
            <button
              type="button"
              className="p-3 bg-blue-600 rounded-md text-white"
            >
              Say Hi!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
