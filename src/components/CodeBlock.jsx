import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";

export default function CodeBlock({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [children]);

  return (
    <pre className={`code-block ${className}`}>
      <code ref={ref} className="language-python">
        {children}
      </code>
    </pre>
  );
}
