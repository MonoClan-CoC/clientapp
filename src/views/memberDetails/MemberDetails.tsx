import React from "react";
import './MemberDetails.css';

interface IMemberDetailsProps {
    selectedMember: any
}

function MemberDetails(props: IMemberDetailsProps) {
    return (
        <div className="memberDetails">
            <span className="memberTitle">{ props.selectedMember.name }</span>
            <small>{ props.selectedMember.tag }</small>

            <div className="memberSubtitle">
                <span>Troupes envoyées: { props.selectedMember.donations } Troupes reçues: { props.selectedMember.donationsReceived }</span>
            </div>

        </div>
    );
}

export default MemberDetails;
