
import withCounter from "./withCounter";

const ClickCounter=(props)=> {
    const {count,increment}=props;
    return (
        <div>
            <button type="button" onClick={increment}>Clicked {count} times</button>
        </div>
    )
}

export default withCounter(ClickCounter);
