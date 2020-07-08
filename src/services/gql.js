import { gql } from 'apollo-boost';


export const querySpace = gql`
{
launchesPast(limit:3) {
  mission_name
  ships{
    name
    image
  }
}
}
`;


