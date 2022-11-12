import {gql} from "graphql-tag";

export const QUERY_CLAN_DETAIL = gql`
   query {
  clansDetail {
    _id
    clanLevel
    clanPoints
    clanVersusPoints
    description
    isWarLogPublic
    members
    memberList {
      clanRank
      donations
      donationsReceived
      expLevel
      name
      previousClanRank
      role
      tag
      trophies
      versusTrophies
      league {
        id
        iconUrls{
          tiny
          small
          medium
        }
        name
      }
    }
    name
    requiredTownhallLevel
    requiredTrophies
    requiredVersusTrophies
    tag
    type
    warFrequency
    warWinStreak
    warWins
  }
}
`;
