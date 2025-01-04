import Tab from './Tabs';

const Tabsbar = () => {
  return (
    <div className="flex overflow-x-auto bg-tabs-bg sm:w-[78vw] xs:w-[89.5vw]">
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/react_icon.svg" filename="about.jsx" path="/about" />
      <Tab icon="/react_icon.svg" filename="contact.jsx" path="/contact" />
      <Tab icon="/react_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/json_icon.svg" filename="articles.json" path="/articles" />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
