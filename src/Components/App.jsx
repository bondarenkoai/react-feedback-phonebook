import css from './App.module.css';
// import { Feedback } from './Feedback/Feedback';
// import { Phonebook } from './Phonebook/Phonebook';
import { PhonebookFormik } from './FormFormik/FormFormik';

export default function App() {
    return (
        <div className={css.container}>
            {/* <Feedback /> */}
            {/* <Phonebook /> */}
            <PhonebookFormik />
        </div>
    );
}
