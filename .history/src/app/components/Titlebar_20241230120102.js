import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <Image
        src="/vscode.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Nitin Ranganath - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1" x1="37.8" x2="37.8" y1="43.37" y2="7.42" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#29b6f6"></stop><stop offset="1" stop-color="#13b2f6"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1)" d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86	c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44	c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"></path><linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2" x1="6.085" x2="34.793" y1="34.801" y2="7.173" gradientUnits="userSpaceOnUse"><stop offset=".115" stop-color="#0076bb"></stop><stop offset=".257" stop-color="#0069b0"></stop><stop offset=".28" stop-color="#0069b0"></stop><stop offset=".424" stop-color="#0069b0"></stop><stop offset=".491" stop-color="#0072b7"></stop><stop offset=".577" stop-color="#0076bb"></stop><stop offset=".795" stop-color="#0076bb"></stop><stop offset="1" stop-color="#006eb9"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2)" d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184	C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574	C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761	c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
</svg>