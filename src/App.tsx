import React, {useEffect, useState} from 'react';
import './App.css';
import {ClansDetails, Repository} from "./services/repo";

function App() {

  const [clanDetails, setClanDetail] = useState<ClansDetails>();
  const repo = new Repository();
  useEffect(() => {
    repo.function1().then((data) => {
      setClanDetail(data)
    })
  }, [])

  return (
    <div>
      <h1>
        {clanDetails?.name}
      </h1>
          <table>
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
                  <tr>
                      <td>
                          #{member.clanRank}
                      </td>
                      <td>
                          {member.name}
                      </td>
                      <td>
                          {member.expLevel}
                      </td>
                      <td>
                          {member.role}
                      </td>
                      <td>
                          <img width={25} src={member.league?.iconUrls?.small} />
                      </td>
                      <td>
                          {member.trophies}
                      </td>
                  </tr>
              )}
              </tbody>
          </table>
    </div>
  );
}

export default App;
