import css from './App.module.css';
import { Phonebook } from './Phonebook/Phonebook';
import { Feedback } from './Feedback/Feedback';

export default function App() {
    return (
        <div className={css.container}>
            <Feedback />
            <Phonebook />
        </div>
    );
}
