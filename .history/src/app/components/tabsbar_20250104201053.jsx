import Tab from './Tabs';

const Tabsbar = () => {
  return (
    <div className="flex overflow-x-auto bg-tabs-bg sm:w-[78vw] xs:w-[89.5vw]">
      <Tab icon="/react_icon.svg" filename="Home.jsx" path="/" />
      <Tab icon="/react_icon.svg" filename="About.jsx" path="/about" />
      <Tab icon="/react_icon.svg" filename="Contact.jsx" path="/contact" />
      <Tab icon="/react_icon.svg" filename="Projects.js" path="/projects" />
      <Tab icon="/json_icon.svg" filename="Articles.json" path="/articles" />
      <Tab icon="/markdown_icon.svg" filename="Github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
