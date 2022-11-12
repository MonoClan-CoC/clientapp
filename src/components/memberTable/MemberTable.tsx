import React, {useState} from 'react';
import './MemberTable.css';
import {useQuery} from "@apollo/client";
import MemberDetails from "../../views/memberDetails/MemberDetails";
import {QUERY_CLAN_DETAIL} from "../../helpers/constants";
import Loader from "../../views/loader/Loader";

function MemberTable() {
  const [selectedMember, setSelectedMember] = useState<any>();
  const {loading, error, data} = useQuery(QUERY_CLAN_DETAIL);

  return (
      <>
        {data &&
            <div className="memberContainer">
              <table className="tableContainer">
                <thead>
                <tr>
                  <th>Rang</th>
                  <th>Pseudo</th>
                  <th>Niveau</th>
                  <th>Role</th>
                  <th>Ligue</th>
                  <th>Trophées</th>
                </tr>
                </thead>
                <tbody>
                {data.clansDetail?.memberList?.map((member: any) =>
                    <>
                      <tr className="row" onClick={() => setSelectedMember(member)}>
                        <td>#{member.clanRank}</td>
                        <td>{member.name}</td>
                        <td>{member.expLevel}</td>
                        <td className={member.role === 'leader' ? 'leaderCase' : member.role === 'coLeader' ? 'coLeaderCase' : ''}> {member.role}</td>
                        <td><img width={25} src={member.league?.iconUrls?.small}/></td>
                        <td> {member.trophies} </td>
                      </tr>
                      {
                          selectedMember == member &&
                          <tr className="memberDetailsContainer">
                            <td colSpan={6}>
                              <MemberDetails selectedMember={selectedMember}/>
                            </td>

                          </tr>

                      }
                    </>
                )}
                </tbody>
              </table>

            </div>
        }
        {
            !data &&
            <Loader />
        }
      </>
  );
}

export default MemberTable;
