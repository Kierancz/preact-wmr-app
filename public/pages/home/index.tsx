import { h } from "preact";
import { useState } from "preact/hooks";
import { Box } from "../../atoms";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <Box as="section" css={{ background: "#f6f6f6", color: "#333" }}>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <button style={{ width: 30 }} onClick={() => setCount(count - 1)}>
        -
      </button>
      <output style={{ padding: 10 }}>Count: {count}</output>
      <button style={{ width: 30 }} onClick={() => setCount(count + 1)}>
        +
      </button>
    </Box>
  );
}
