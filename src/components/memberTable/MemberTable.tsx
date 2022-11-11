import React, { useEffect, useState } from 'react';
import './MemberTable.css';
import { Repository } from "../../services/repo";
import { useQuery } from "@apollo/client";
import {gql} from "graphql-tag";


// @ts-ignore
const CLAN_DETAIL = gql`
    query {
  clansDetail {
    _id
\t\tclanLevel
\t\tclanPoints
\t\tclanVersusPoints
\t\tdescription
\t\tisWarLogPublic
\t\tmembers
\t\tname
\t\trequiredTownhallLevel
\t\trequiredTrophies
\t\trequiredVersusTrophies
\t\ttag
\t\ttype
\t\twarFrequency
\t\twarWinStreak
\t\twarWins
  }
}
`;

function MemberTable() {

  const [clanDetails, setClanDetail] = useState<any>();
  const [selectedMember, setSelectedMember] = useState<any>();
  const repo = new Repository();

  const { loading, error, data } = useQuery(CLAN_DETAIL);


  useEffect(() => {
    repo.fetchData();
  }, [])

  if (data) {
    return <pre>{ JSON.stringify(data,null,2) }</pre>
  }

  return (
    <>
      { clanDetails &&
      <div className="memberContainer">
          <table className="tableContainer">
              <thead>
              <tr>
                  <th>
                      Rang
                  </th>
                  <th>
                      Pseudo
                  </th>
                  <th>
                      Niveau
                  </th>
                  <th>
                      Role
                  </th>
                  <th>
                      Ligue
                  </th>
                  <th>
                      Trophées
                  </th>
              </tr>
              </thead>
              <tbody>
              { clanDetails?.memberList?.map((member: any) =>
                <tr className="row" onClick={ () => setSelectedMember(member) }>
                  <td>
                    #{ member.clanRank }
                  </td>
                  <td>
                    { member.name }
                  </td>
                  <td>
                    { member.expLevel }
                  </td>
                  <td
                    className={ member.role === 'leader' ? 'leaderCase' : member.role === 'coLeader' ? 'coLeaderCase' : '' }>
                    { member.role }
                  </td>
                  <td>
                    <img width={ 25 } src={ member.league?.iconUrls?.small }/>
                  </td>
                  <td>
                    { member.trophies }
                  </td>
                </tr>
              ) }
              </tbody>
          </table>
        {
          selectedMember &&
          <div className="memberDetails">
              <span className="memberTitle">{ selectedMember.name }</span>
              <small>{ selectedMember.tag }</small>

              <div className="memberSubtitle">
                  <span>Troupes envoyées: { selectedMember.donations } Troupes reçues: { selectedMember.donationsReceived }</span>
              </div>

          </div>
        }

      </div>
      }
      {
        !clanDetails &&
        <div className="lds-container">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
      }
    </>
  );
}

export default MemberTable;
