import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency} style={{ display: "flex", justifyContent: "center" }}>
      <table style={{ border: "1px solid black", width: "400px" }}>
        <thead>
          <tr>
            <th colspan="2"></th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-around" }}>
            <td>{currency}</td>
            <td>{rate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
};

export default ExchangeRates;
