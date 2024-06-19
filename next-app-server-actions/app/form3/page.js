import { findToDos } from './actions';
import AddToDoForm from './form';

export default async function Page() {
    const todos = await findToDos();

    return (
        <div className='p-5'>
            <AddToDoForm />

            <ul>
                {todos.map((todo, i) => <li key={i}>{todo}</li>)}
            </ul>
        </div>
    )
}
