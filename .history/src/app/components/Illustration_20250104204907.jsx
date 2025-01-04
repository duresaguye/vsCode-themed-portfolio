import { motion } from 'framer-motion';

function TechIcons() {
  const icons = [
    { src: "/path-to-react-icon.svg", alt: "React" },
    { src: "/path-to-nextjs-icon.svg", alt: "Next.js" },
    { src: "/path-to-django-icon.svg", alt: "Django" },
    { src: "/path-to-python-icon.svg", alt: "Python" },
    { src: "/path-to-nodejs-icon.svg", alt: "Node.js" },
    { src: "/path-to-react-native-icon.svg", alt: "React Native" },
  ];

  const numberOfIcons = icons.length;
  const radius = 150; // Radius of the circle

  return (
    <div style={styles.container}>
      {icons.map((icon, index) => {
        const angle = (index / numberOfIcons) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={index}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            style={{
              ...styles.circle,
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <img src={icon.src} alt={icon.alt} style={styles.icon} />
          </motion.div>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '300px',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
  circle: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #4A90E2',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  icon: {
    width: '40px',
    height: '40px',
  }
};

export default TechIcons;
