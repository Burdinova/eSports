import { useState } from "react";

import { friends, requests } from "../../helpers/friend.js";

import TitleH2 from "../../components/TitleH2/TitleH2.jsx";
import TabSwich from "../../components/TabSwitch/TabSwith.jsx";
import RoundCards from "../../components/RoundCard/RoundCardsContainer.jsx";

export default function Friends() {
  const [activeTab, setActiveTab] = useState("friends");

  const tabs = [
    { id: "friends", label: "Ваши друзья" },
    { id: "requests", label: "Заявки в друзья" },
  ];

  return (
    <div>
      <TitleH2 title="Друзья" />
      <TabSwich tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />

      <div className="tab-content">
        {activeTab === "friends" ? (
          <RoundCards users={friends} isRequest={false} />
        ) : (
          <RoundCards users={requests} isRequest={true} />
        )}
      </div>
    </div>
  );
}
