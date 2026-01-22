import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
    
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add("visible");
                    observer.unobserve(element); // odłączamy po pierwszym pokazaniu
                }
            },
            {
                threshold: 0.2,          // mniejszy próg = działa pewniej na iOS
                rootMargin: "0px 0px -50px 0px", // możesz dostosować
            }
        );

        observer.observe(element);

        // Cleanup
        return () => observer.disconnect();
    }, []); // <-- pusty array = tylko przy mount

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};
