import { useState } from 'react';

function Tab({ children, activeTab, setActiveTab }) {
  return (
    <>
      <nav>
        {children.map((item, key) => (
          <button onClick={() => setActiveTab(key)} className={activeTab === key ? 'bg-green-100' : 'bg-gray-100'}>
            {item.props.title}
          </button>
        ))}
      </nav>
      {children[activeTab]}
    </>
  );
}

Tab.panel = function ({ children, title }) {
  return <div>{children}</div>;
};

export default Tab;
