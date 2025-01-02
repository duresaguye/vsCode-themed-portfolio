import Tab from './Tabs';


const Tabsbar = () => {
  return (
    <div className="flex overflow-x-auto bg-gray-200 w-full sm:w-[89.5vw] md:w-[78vw]">
      <Tab  filename="home.jsx" path="/" />
      <Tab filename="about.jsx" path="/About" />
      <Tab filename="contact.jsx" path="/contact" />
      <Tab  filename="projects.jsx" path="/projects" />
      <Tab filename="articles.jxs" path="/articles" />
      <Tab filename="github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
