import styles from "./ZeroFrictionOnboarding.module.css";
import TimelineStep from "./TimelineStep";
import { onboardingData } from "./onboardingData";

export default function ZeroFrictionOnboarding() {
    return (
        <section className={styles.zeroFrictionOnboarding}>
            <div className={styles.container}>

                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Zero Friction Onboarding
                    </h2>

                    <p className={styles.sectionDescription}>
                        Get approved and start spending before your coffee gets cold.
                    </p>
                </div>

                <div className={styles.timelineStepGrid}>
                    {onboardingData.map((step) => (
                        <TimelineStep
                            key={step.id}
                            title={step.title}
                            description={step.description}
                            featured={step.featured}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

