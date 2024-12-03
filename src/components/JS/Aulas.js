import React from "react";
import styles from '../CSS/Aulas.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Sina<span>Libras</span></div>
        <h1>Aulas</h1>
        <div className={styles.avatar}></div>
      </header>

      <div className={styles.modules}>
        <h2>Módulos:</h2>
        <div className={styles.buttons}>
          <button>Animais</button>
          <button>Países</button>
          <button>Comidas</button>
        </div>
      </div>

      <div className={styles.video-grid}>
        {[...Array(9)].map((_, index) => (
          <div key={index} className={styles.video-card}>
            <div className={styles.thumbnail}>
              <div className={styles.play-button}>▶</div>
            </div>
            <p>Professor: Joyce Godoy</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
