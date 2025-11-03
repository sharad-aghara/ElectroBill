import "./App.css";
import { DataProvider } from "./context/DataProvider";
import { Layout } from "./layout/Layout";

function App() {
    return (
        <DataProvider>
            {/* Everything under data provider can use it */}
            <Layout />
        </DataProvider>
    )
}

export default App;
