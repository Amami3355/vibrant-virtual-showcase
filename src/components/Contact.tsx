import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-portfolio-primary" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          {t('contact.title')}
        </h2>
        <div className="max-w-lg mx-auto bg-white rounded-lg p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <Input type="text" placeholder={t('contact.name')} />
            </div>
            <div>
              <Input type="email" placeholder={t('contact.email')} />
            </div>
            <div>
              <Textarea
                placeholder={t('contact.message')}
                className="min-h-[150px]"
              />
            </div>
            <Button className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90">
              {t('contact.send')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;