import React, {useEffect, useState} from 'react';
import './MemberTable.css';
import {ClanMember, ClansDetails, Repository} from "../../services/repo";

function MemberTable() {

    const [clanDetails, setClanDetail] = useState<ClansDetails>();
    const [selectedMember, setSelectedMember] = useState<ClanMember>();
    const repo = new Repository();

    useEffect(() => {
        repo.run().then((data) => {
            setClanDetail(data)
        })
    }, [])

    return (
        <>
            {clanDetails &&
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
                        {clanDetails?.memberList?.map((member) =>
                            <tr className="row" onClick={() => setSelectedMember(member)}>
                                <td>
                                    #{member.clanRank}
                                </td>
                                <td>
                                    {member.name}
                                </td>
                                <td>
                                    {member.expLevel}
                                </td>
                                <td className={member.role === 'leader' ? 'leaderCase' : member.role === 'coLeader' ? 'coLeaderCase' : ''}>
                                    {member.role}
                                </td>
                                <td>
                                    <img width={25} src={member.league?.iconUrls?.small}/>
                                </td>
                                <td>
                                    {member.trophies}
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    {
                        selectedMember &&
                        <div className="memberDetails">
                            <span className="memberTitle">{selectedMember.name}</span>
                            <small>{selectedMember.tag}</small>

                            <div className="memberSubtitle">
                                <span>Troupes envoyées: {selectedMember.donations} Troupes reçues: {selectedMember.donationsReceived}</span>
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
