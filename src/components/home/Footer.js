import React from "react";
import { FooterContent, FooterPane, FooterLinks } from "./styles";

export default function Footer() {
  return (
    <FooterPane>
      <FooterContent></FooterContent>
      <FooterLinks>
        <ul>
          <li>Carrers</li>
          <li>Request a demo</li>
          <li>Testimonials</li>
          <li>Privacy policy</li>
        </ul>
        <ul>
          <li>See tutorials</li>
          <li>Submit feedback</li>
          <li>Request a feature</li>
          <li>Open source policy</li>
        </ul>
        <ul>
          <li>Blog</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </FooterLinks>
    </FooterPane>
  );
}
