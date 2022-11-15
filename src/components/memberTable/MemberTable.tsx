import React, {useState} from 'react';
import './MemberTable.css';
import {useQuery} from "@apollo/client";
import MemberDetails from "../../views/memberDetails/MemberDetails";
import {QUERY_CLAN_DETAIL} from "../../helpers/constants";
import Loader from "../../views/loader/Loader";

function MemberTable() {
  const [selectedMember, setSelectedMember] = useState<any>();
  const {loading, error, data} = useQuery(QUERY_CLAN_DETAIL);

    function getClassWithMemberRole(role: string): string {
        switch (role) {
            case 'coLeader':
                return 'coLeaderCase';
            case 'leader':
                return 'leaderCase';
            case 'admin':
            default:
                return 'adminCase';

        }
    }

    function getMemberRoleTranslated(role: string): string {
        switch (role) {
            case 'leader':
                return 'Chef';
            case 'coLeader':
                return 'Admin';
            case 'admin':
                return 'Aîné';
            case 'member':
            default:
                return 'Membre';

        }
    }

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
                      <tr className="row" onClick={() => setSelectedMember(selectedMember?.tag == member?.tag ? null : member)}>
                        <td>#{member.clanRank}</td>
                        <td>{member.name}</td>
                        <td>{member.expLevel}</td>
                        <td>
                            <div className={'role ' + getClassWithMemberRole(member.role)}>
                                {getMemberRoleTranslated(member.role)}
                            </div>
                        </td>
                        <td><img width={25} src={member.league?.iconUrls?.small}/></td>
                        <td> {member.trophies} </td>
                      </tr>
                      {
                          selectedMember?.tag == member?.tag &&
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
