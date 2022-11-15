import {gql} from "graphql-tag";

export const QUERY_WARLOG = gql`
query {
  warlog {
    items
    {
      attacksPerMember
      result
      teamSize
      endTime
      opponent
      {
        badgeUrls {
          medium
        }
        clanLevel
        destructionPercentage
        name
        stars
        tag
      }
      clan {
        attacks
        badgeUrls {
          medium
        }
        clanLevel
        destructionPercentage
        expEarned
        name
        stars
        tag
      }
    }
    tag
    updatedAt
    updatedBy
  }
}`

export const QUERY_MEMBERS = gql`
query {
  players {
    achievements {
      completionInfo
      info
      name
      stars
      target
      value
      village
    }
    clan {
      clanLevel
      name
      tag
    }
    heroes {
      level
      maxLevel
      name
      village
    }
    labels {
      id
      name
      iconUrls {
        medium
        small
      }
    }
    league {
      id
      name
      iconUrls {
        medium
        small
        tiny
      }
    }
    spells {
      level
      maxLevel
      name
      village
    }
    troops {
      level
      maxLevel
      name
      village
    }
    attackWins
    bestTrophies
    bestVersusTrophies
    builderHallLevel
    clanCapitalContributions
    defenseWins
    donations
    donationsReceived
    expLevel
    name
    role
    tag
    townHallLevel
    townHallWeaponLevel
    trophies
    updatedAt
    updatedBy
    versusBattleWinCount
    versusBattleWins
    versusTrophies
    warPreference
    warStars
  }
}`

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
