import React from "react";
import FooterLogo from "./footer/FooterLogo";
import FooterNewsletter from "./footer/FooterNewsletter";
import FooterLegalPages from "./footer/FooterLegalPages";
import FooterImportantLinks from "./footer/FooterImportantLinks";
import FooterBottom from "./footer/FooterBottom";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-50 pb-20 ">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <FooterLogo />
            </div>

            <div>
              <FooterNewsletter />
            </div>

            <div>
              <FooterLegalPages />
            </div>

            <div>
              <FooterImportantLinks />
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Bottom Footer */}
      <div className=" bottom-0 left-0 w-full bg-white border-t z-50">
        <FooterBottom />
      </div>
    </>
  );
}
