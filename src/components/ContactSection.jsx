import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";


export const ContactSection = () => {
  
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="flex space-x-4 p-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:bilalowraiylegh@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    bilalowraiylegh@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex space-x-4 p-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+212719356563"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +212719356563
                  </a>
                </div>
              </div>
              <div className="flex space-x-4 p-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Fez, Morocco
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/bilal-el-arfaoui-860a6a261/" target="_blank">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};
