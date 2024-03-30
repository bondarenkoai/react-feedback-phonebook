import css from './App.module.css';
// import { Profile } from './Profile/Profile';
import { Feedback } from './Feedback/Feedback';

export default function App() {
    return (
        <div className={css.container}>
            {/* <Profile /> */}
            <Feedback />
        </div>
    );
}
