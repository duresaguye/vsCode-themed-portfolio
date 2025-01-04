import Tab from './Tabs';

const Tabsbar = () => {
  return (
    <div className="flex overflow-x-auto bg-tabs-bg sm:w-[78vw] xs:w-[89.5vw]">
      <Tab icon="/react_icon.svg" filename="Home.jsx" path="/" borderColor="border-red-500" />
      <Tab icon="/react_icon.svg" filename="About.jsx" path="/about" borderColor="border-blue-500" />
      <Tab icon="/react_icon.svg" filename="Contact.jsx" path="/contact" borderColor="border-green-500" />
      <Tab icon="/react_icon.svg" filename="Projects.js" path="/projects" borderColor="border-yellow-500" />
      <Tab icon="/json_icon.svg" filename="Articles.json" path="/articles" borderColor="border-purple-500" />
      <Tab icon="/markdown_icon.svg" filename="Github.md" path="/github" borderColor="border-pink-500" />
    </div>
  );
};

export default Tabsbar;
