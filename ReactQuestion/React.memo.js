// React.memo is a higher order component that memoizes the result of a component. 
// It will only re-render the component if the props have changed. 
// In this example, the Child component will re-render every time the Parent component
// re-renders because the user object is recreated every time.

function Parent() {
    const [count, setCount] = React.useState(0);

    const user = { name: "Vivek" }; // recreated every render

    return <Child user={user} />;
}

const Child = React.memo(({ user }) => {
    console.log("Rendered");
    return <div>{user.name}</div>;
});
