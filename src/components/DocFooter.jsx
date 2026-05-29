import { Link } from "react-router-dom";
import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

function DocFooter() {
  return (
    <div
      className="flex justify-center md:text-left gap-5 items-center h-30"
      id="footer"
    >
      <Footer container>
        <FooterCopyright href="#" by="Dante Besong™" year={2026} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="https://github.com/dantebesong321-code/job-application-tracker-client.gitgit">
            Github
          </FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
    </div>
  );
}
export default DocFooter;
