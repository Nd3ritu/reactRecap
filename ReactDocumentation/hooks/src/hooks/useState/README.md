Treat all state in react as immutable

When you store objects in state , mutating them will not trigger renders and will change the state in previous render snapshots.

Instead of mutating an object, creating a new version of it an trigger a re-render by setting state to it

You can use the {...obj, something:'newvalue'} object spread syntax to create copies

Spread syntax is shallow as it omly copies one level deep.

To update a nested object , you need to create copies all the way up from the place youre updating

To reduce repetitive copying code , use immer