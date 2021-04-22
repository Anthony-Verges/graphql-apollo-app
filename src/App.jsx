import { ApolloProvider } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import ExchangesRates from "./components/ExchangeRates";
import "./App.css";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  })
  .then((result) => console.log(result));

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h2>My first Apollo app 🚀</h2>
        <ExchangesRates />
      </ApolloProvider>
    </div>
  );
}

export default App;
