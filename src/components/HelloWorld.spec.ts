// src/components/HelloWorld.spec.ts
import { render, screen } from '@testing-library/vue'
import HelloWorld from './HelloWorld.vue'

test('renders props.msg properly', () => {
    render(HelloWorld, {
        props: {
            msg: 'Hello, Test!'
        }
    })

    expect(screen.getByText('Hello, Test!')).toBeInTheDocument()
})
