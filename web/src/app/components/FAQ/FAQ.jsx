"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import FAQItem from "./FAQItem";
import { faqData } from "./FAQData";

export default function FAQ() {
    const [activeId, setActiveId] = useState(null);

const handleToggle = (id) => {
  setActiveId((prev) => (prev === id ? null : id));
};

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>

                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Common Queries
                    </h2>
                </div>

                <div className={styles.faqWrapper}>
                    {faqData.map((item) => (
                        <FAQItem
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            isOpen={activeId === item.id}
                            onClick={() => handleToggle(item.id)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}