import { gql } from 'apollo-boost';


export const querySpace = gql`
{
launchesPast(limit:50) {
  mission_name
  ships{
    name
    image
  }
  
  rocket{
      second_stage { 
      payloads{
        payload_type
      }
    }
  }

}
}
`;


