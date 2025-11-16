import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Agentic Next.js app is live.</h1>
          <p>
            Deployed at
            {" "}
            <a href="https://agentic-e4d35b62.vercel.app" target="_blank" rel="noopener noreferrer">
              agentic-e4d35b62.vercel.app
            </a>
            . Health check at
            {" "}
            <a href="/api/health" target="_blank" rel="noopener noreferrer">
              /api/health
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
