import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const DATA = [
  { id: "todo-1", name: "Eat", completed: false },
  { id: "todo-2", name: "Eat again", completed: false },
  { id: "todo-3", name: "Watch GOT", completed: false }
];

root.render(<App />);
