import styles from "./ZeroFrictionOnboarding.module.css";

export default function TimelineStep({ 
    title, 
    description, 
    featured = false 
}) {
    return (
        <div
            className={`${styles.timelineStep} ${
                featured ? styles.featuredStep : ""
            }`}
        >
            <h3 className={styles.stepTitle}>
                {title}
            </h3>

            <p className={styles.stepDescription}>
                {description}
            </p>
        </div>
    );
}