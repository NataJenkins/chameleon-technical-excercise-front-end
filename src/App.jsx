import { Dropdown } from "./components/Dropdown";
import "./App.css";

function App() {
    const options = [
        { label: "Page 1", href: "/page1", id: 1 },
        { label: "Page 2", href: "/page2", id: 2 },
        { label: "Page 3", href: "/page3", id: 3 },
        { label: "Page 4", href: "/page4", id: 4 },
    ];

    return (
        <div>
            <h1>Dropdown Component</h1>
            <Dropdown label="Select a Option" items={options} />
        </div>
    );
}

export default App;
