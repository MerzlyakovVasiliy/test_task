import './App.css'
import AppRouter from "./app/providers/router/ui/AppRouter.tsx";
import { Navbar } from "./widgets/Navbar/ui/Navbar.tsx";

function App() {

    return (
        <>
            <div className={'app'}>
                <Navbar/>
                <div className="content-page">
                    <AppRouter/>
                </div>
            </div>
        </>
    )
}

export default App
