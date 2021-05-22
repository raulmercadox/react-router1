import {Route} from "react-router-dom";

const welcome = () => {
    return <section>
        <h1>This is the welcome page</h1>
        <Route path="/welcome/new-user">
            <p>Welcome new user</p>
        </Route>
    </section>
}

export default welcome;