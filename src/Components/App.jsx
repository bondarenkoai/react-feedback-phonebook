import css from "./App.module.css";
import { Friends } from "./Friends/Friends";
import { Profile } from "./Profile/Profile";

export default function App() {
    return (
        <div className={css.container}>
            <Profile />
            <Friends />
        </div>
    );
}
