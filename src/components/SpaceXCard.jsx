import { useQuery, gql } from "@apollo/client";

const SPACEX_DATA = gql`
  query GetSpaceXData {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;

const SpaceXCard = () => {
  const { loading, error, data } = useQuery(SPACEX_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launches.map((launch) => {
    return (
      <div key={launch.details}>
        <h3>{launch.launch_date_utc}</h3>
        <h4>{launch.launch_success}</h4>
        <h4>{launch.rocket.rocket_name}</h4>
        <p>{launch.details}</p>
        <p>{launch.links.video_link}</p>
      </div>
    );
  });
};

export default SpaceXCard;
