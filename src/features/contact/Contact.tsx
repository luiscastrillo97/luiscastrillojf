import { Button } from "@/components/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 flex justify-center">
      <div className="max-w-xl text-center">
        <h2 className="mb-10 w-full text-clamp-h2 font-semibold">
          Get In Touch
        </h2>
        <div className="flex flex-col gap-10">
          <p>
            I’m currently looking for any new opportunities, so, my inbox is
            always open. Whether you have a question or just want to say hi,
            I’ll try my best to get back to you!
          </p>
          <div>
            <Button href="mailto:luiscastrillojfgmail.com">Say Hi!</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
