import styles from "./SystemArchitecture.module.css";
import ArchitectureCard from "./ArchitectureCard";
import { architectureData } from "./architectureData";

export default function SystemArchitecture() {
  return (
    <section className={styles.systemArchitecture}>
      <div className={styles.container}>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            System Architecture
          </h2>

          <p className={styles.sectionDescription}>
            Built from the ground up to eliminate the compromises of
            traditional finance.
          </p>
        </div>

        <div className={styles.architectureGrid}>
          {architectureData.map((item) => (
            <ArchitectureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              featured={item.featured}
            />
          ))}
        </div>

      </div>
    </section>
  );
}