import { createRoot } from "react-dom/client";
import React from "react";
import { Application } from "./Application.js";

createRoot(document.getElementById("app")!).render(<Application />);
