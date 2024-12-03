import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-20 bg-portfolio-primary" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Get In Touch
        </h2>
        <div className="max-w-lg mx-auto bg-white rounded-lg p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <Input type="text" placeholder="Your Name" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="min-h-[150px]"
              />
            </div>
            <Button className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;