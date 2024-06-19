'use client'

import { createToDoDirectly } from './actions';

export default function Button({children}) {
    return (
        <button
            className='bg-gradient-to-r from-cyan-500 to-blue-500'
            onClick={async () => {
                const data = await createToDoDirectly('运动')
                alert(JSON.stringify(data))
            }}
        >{children}</button>
    )   
}
