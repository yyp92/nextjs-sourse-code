import { findToDos, createToDo } from './actions';
import Button from './button';

export default async function Page() {
    const todos = await findToDos();

    return (
        <div className='p-5'>
            <form action={createToDo}>
                <input className='border border-indigo-600' type="text" name="todo" />
                <button type="submit">Submit</button>
            </form>

            <Button>添加运动</Button>

            <ul>
                {todos.map((todo, i) => <li key={i}>{todo}</li>)}
            </ul>
        </div>
    )
}
