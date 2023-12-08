import {createRoot} from "react-dom/client"
import App from "./App.js"

const root = document.getElementById('root');
const res = createRoot(root)
res.render(<App/>)

