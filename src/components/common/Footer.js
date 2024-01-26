import { Mail, Phone } from "lucide-react";
import { Image } from "@nextui-org/react";

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcons,
  YoutubeIcons,
} from "./SocialIcons";

function Footer() {
  return (
    <footer className="bg-slate-800">
      <div className="max-w-7xl mx-auto px-3 md:px-8 pt-20 w-full">
        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
          <div>
            <div>
              <Image
                src="/assets/images/MisteviaLogo.png"
                width={150}
                height={150}
                alt="Mistevia Logo"
              />
            </div>
            <p className="font-medium text-white text-xl mt-4">
              Contact Us
            </p>
            <div className="pt-6 md:pt-2">
              <div className="flex text-white space-x-2 my-4 text-sm items-center">
                <Mail className="h-6 w-6" />
                <a href="mailto: admin@mistevia.com">
                  admin@mistevia.com
                </a>
              </div>
              <div className="flex text-white space-x-2 my-4 text-sm items-center">
                <Phone className="h-6 w-6" />
                <a href="tel:+91-9123795321">+91-8695955999</a>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-24">
            <div>
              <div className="text-white font-bold text-xl">MISTEVIA</div>
              <div className="flex flex-col items-start my-4 gap-4">
                <a className="text-white" href="/about">
                  About Us
                </a>
                <a className="text-white" href="#">
                  Blogs
                </a>
                <a className="text-white" href="#">
                  Contact Us
                </a>
                <a className="text-white" href="#">
                  FAQ
                </a>
              </div>
            </div>
            <div>
              <div className="text-white font-bold text-xl">Policies</div>
              <div className="flex flex-col items-start my-4 gap-4">
                <a className="text-white" href="#">
                  Privacy Policy
                </a>
                <a className="text-white" href="#">
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="text-white font-bold text-xl">Follow Us</div>
            <div className="flex space-x-4 my-4">
              <FacebookIcon className="h-8 w-8" />
              <InstagramIcon className="h-8 w-8" />
              <YoutubeIcons className="h-9 w-9" />
            </div>
          </div>
        </div>
        <div className="border-t border-t-slate-400 w-full py-3 mt-4 text-slate-400 text-xs">
          © Copyrights MISTEVIA 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
