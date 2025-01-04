import { motion } from 'framer-motion';

function TechIcons() {
  return (
    <div style={styles.container}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        style={styles.circle}
      >
        <img src="/react_icon.svg" alt="React" style={styles.icon} />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        style={styles.circle}
      >
        <img src="/path-to-nextjs-icon.svg" alt="Next.js" style={styles.icon} />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        style={styles.circle}
      >
        <img src="/path-to-django-icon.svg" alt="Django" style={styles.icon} />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        style={styles.circle}
      >
        <img src="/path-to-python-icon.svg" alt="Python" style={styles.icon} />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        style={styles.circle}
      >
        <img src="/path-to-nodejs-icon.svg" alt="Node.js" style={styles.icon} />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        style={styles.circle}
      >
        <img src="/path-to-react-native-icon.svg" alt="React Native" style={styles.icon} />
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },
  circle: {
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
