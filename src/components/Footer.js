import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  const handleUserName = () => {};

  const menu = [
    {
      title: "Exercises",
      links: [
        { label: "Grammar", path: "exercises/grammar" },
        { label: "Reading", path: "exercises/reading" },
        { label: "Vocabulary", path: "exercises/vocabulary" },
        { label: "Listening", path: "exercises/listening" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Articles", path: "resources/articles" },
        { label: "Podcasts", path: "resources/podcasts" },
        { label: "Books", path: "resources/books" },
        { label: "Exercises", path: "resources/exercises" },
      ],
    },

    {
      title: "Tutoring",
      links: [
        { label: "Find a tutor", path: "tutors" },
        { label: "Order a class", path: "online-class" },
        { label: "How it works", path: "docs/classes" },
        { label: "Pricing", path: "docs/pricing" },
      ],
    },
    {
      title: "Student",
      links: [
        { label: "Dashboard", path: "dashboard" },
        { label: "Your progress", path: "progress" },
        { label: "Buy learning hours", path: "learning-hours" },
        { label: "FAQ", path: "docs/faq" },
      ],
    },
  ];

  const socials = [
    {
      icon: <FaFacebook />,
      path: "wwww.google.com",
    },
    { icon: <FaInstagram />, path: "wwww.google.com" },
    { icon: <FaTiktok />, path: "wwww.google.com" },
  ];

  const renderedMenu = menu.map((category) => {
    return (
      <section className="mb-4 tracking-wide" key={category.title}>
        <h4 className="text-white font-medium mb-1">{category.title}</h4>
        <ul
          className="text-white font-light text-sm opacity-75 leading-6"
          key={category}
        >
          {category.links.map((link) => (
            <li key={link.label}>
              <Link to={link.path} className="hover:text-orange-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  });

  const renderedSocials = socials.map((social) => {
    return (
      <Link
        className="p-2 cursor-pointer inline-flex items-center rounded-full bg-stone-600 hover:bg-orange-400 mx-2 text-xl duration-300"
        key={social.path}
      >
        {social.icon}
      </Link>
    );
  });

  return (
    <footer className="bg-stone-800">
      <div className="container mx-auto py-10 px-4">
        <section className="md:flex md:justify-between md:items-center border-b md:pb-16 pb-8">
          <h3 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-light md:w-2/5 text-white">
            It is <span className="text-indigo-300 font-medium">never</span> too
            late to learn English!
          </h3>
          {/* Mini-form */}
          <div className="flex md:flex-row gap-4 items-center justify-between flex-col">
            <Input
              name="user"
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
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:py-16 py-8">
          {renderedMenu}
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-white opacity-75 text-sm pb-8">
          <small>&copy; 2023 Easy-Peasy English. All rights reserved.</small>
          <small>Terms &#x2022; Privacy Policy</small>
          <div>{renderedSocials}</div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
