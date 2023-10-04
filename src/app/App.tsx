import './App.css'
import {Decks} from '../features/decks/Decks.tsx'
import {GlobalError} from './GlobalError/GlobalError.tsx'
import {useAppSelector} from "./store";
import {LinearLoader} from "../common/components/Loader/LinearLoader";
import {selectAppStatus} from "./app-selectors";

export const App = () => {
    const appState = useAppSelector(selectAppStatus)

    return (
        <div>
            {appState === "loading" && <LinearLoader/>}
            <Decks/>
            <GlobalError/>
        </div>
    )
}
