import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Duresa Guye is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Duresa Guye, duresa, Guye, web developer portfolio, Duresa web developer, Duresa developer, Django,Python,Next js,React js, Duresa Guye portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Duresa Guye's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Duresa Guye',
};
