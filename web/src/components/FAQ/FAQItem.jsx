import styles from "./FAQ.module.css";

export default function FAQItem({
    question,
    answer,
    isOpen,
    onClick,
}) {
    return (
        <div className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}>
            <button
                type="button"
                className={styles.faqQuestion}
                onClick={onClick}
            >
                <span>{question}</span>
                <span className={styles.icon}>{isOpen ? "+" : "+"}</span>
            </button>

            <div className={styles.faqAnswer}>
                <p>{answer}</p>
            </div>
        </div>
    );
}