import React, { ChangeEvent, ReactElement } from "react";
import { Link } from "react-router-dom";
import Button from "./common/Button";
import Input from "./common/Input";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Logo } from "./common/Logo";

type SubmenuItem = {
  label: string;
  path: string;
};
interface FooterMenuItem {
  title: string;
  links: SubmenuItem[];
}
interface SocialItem {
  icon: ReactElement;
  path: string;
}
const Footer: React.FC = () => {
  const handleUserName = (e: ChangeEvent) => {
    console.log(e);
  };

  const menu: FooterMenuItem[] = [
    {
      title: "Exercises",
      links: [
        { label: "Grammar", path: "grammar" },
        { label: "Reading", path: "reading" },
        { label: "Vocabulary", path: "vocabulary" },
        { label: "Listening", path: "listening" },
      ],
    },
    // {
    //   title: "Tutoring",
    //   links: [
    //     { label: "Find a tutor", path: "tutors" },
    //     { label: "Order a class", path: "online-class" },
    //     { label: "How it works", path: "docs/classes" },
    //     { label: "Pricing", path: "docs/pricing" },
    //   ],
    // },
    {
      title: "Student",
      links: [
        { label: "Dashboard", path: "dashboard" },
        { label: "Vocabulary list", path: "glossary" },
        //  { label: "Buy learning hours", path: "learning-hours" },
        //  { label: "FAQ", path: "docs/faq" },
        { label: "Profile", path: "profile" },
        { label: "Settings", path: "settings" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Articles", path: "articles" },
        //  { label: "Podcasts", path: "resources/podcasts" },
        //  { label: "Books", path: "resources/books" },
        //  { label: "Exercises", path: "resources/exercises" },
      ],
    },
  ];

  const socials: SocialItem[] = [
    {
      icon: <FaFacebook />,
      path: "wwww.google.com",
    },
    {
      icon: <FaInstagram />,
      path: "https://www.instagram.com/easy_peazy_english",
    },
    { icon: <FaTiktok />, path: "wwww.google.com" },
  ];

  const renderedMenu = menu.map((category: FooterMenuItem, index: number) => {
    return (
      <section className="mb-4 tracking-wide" key={index}>
        <h4 className="text-indigo-300 font-medium mb-1">{category.title}</h4>
        <ul
          className="text-indigo-50 font-light text-sm opacity-75 leading-6"
          key={index}
        >
          {category.links.map((link: SubmenuItem, index: number) => (
            <li key={index}>
              <Link to={link.path} className="hover:text-orange-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  });

  const renderedSocials = socials.map((social: SocialItem, index: number) => {
    return (
      <a
        className="p-2 cursor-pointer inline-flex items-center rounded-full bg-stone-600 hover:bg-orange-400 mx-2 text-xl duration-300"
        key={index}
        href={social.path}
        target="_blank"
      >
        {social.icon}
      </a>
    );
  });

  return (
    <footer className="bg-gradient-to-r from-stone-800 to-stone-900">
      <div className="container mx-auto py-10 px-4">
        <section className="flex flex-col md:flex-row md:justify-between items-center gap-8 border-b border-indigo-100/30 md:pb-16 pb-8">
          <Logo className="scale-150 md:ml-6" />
          <h3 className="lg:text-3xl text-2xl md:text-right md:mb-0 mb-6 lg:leading-normal font-light md:w-2/5 text-indigo-100">
            It is <span className="text-indigo-400 font-medium">never</span> too
            late to learn English!
          </h3>
          {/* Mini-form */}
          {/*<div className="flex md:flex-row gap-4 items-center justify-between flex-col">
            <Input
              name="userName"
              type="email"
              secondary
              outline
              rounded
              autoComplete="off"
              onChange={handleUserName}
              required
              className="sm:w-84 w-full"
            >
              Email
            </Input>
            <Button
              primary
              outline
              rounded
              className="whitespace-nowrap md:w-auto w-full"
            >
              Sign up
            </Button>
          </div>*/}
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:py-16 py-8">
          {renderedMenu}
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-indigo-100 opacity-75 text-sm pb-8">
          <small>&copy; 2024 Easy-Peasy English. All rights reserved.</small>

          <small>
            <a
              href="https://www.termsandconditionsgenerator.com/live.php?token=XZInxv3hHr224LlY0pjEShgx1wjrbmVy"
              target="_blank"
            >
              Terms and Conditions
            </a>{" "}
            &#x2022;{" "}
            <a
              href="https://www.termsfeed.com/live/1ee655fd-6911-48fc-a079-eae0056b61a2"
              target="_blank"
            >
              Privacy Policy
            </a>
          </small>
          <div>{renderedSocials}</div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
