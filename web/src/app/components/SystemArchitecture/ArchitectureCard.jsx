import styles from "./SystemArchitecture.module.css";

export default function ArchitectureCard({
  icon,
  title,
  description,
  featured = false,
}) {
  return (
    <div
      className={`${styles.card} ${featured ? styles.featuredCard : ""
        }`}
    >
      <div className={styles.iconBox}>
        <span className={styles.icon}>{icon}</span>
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>

      <p className={styles.cardDescription}>
        {description}
      </p>
    </div>
  );
}