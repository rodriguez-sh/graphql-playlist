import {Component} from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import {ApolloClient} from "@apollo/client";
import {ApolloProvider, InMemoryCache} from "@apollo/client";


//apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
})

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div id="main">
                    <h1> Reading List </h1>
                    <BookList/>
                    <AddBook/>
                </div>
            </ApolloProvider>
        )
    }
}

export default App;