import { useState } from 'react';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './Components/Header/Header.jsx';
import CoreConcept from './Components/CoreConcept.jsx';
import TabButton from './Components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {

  const [activeTab, setActiveTab] = useState();

  function handleClick(selectedTab) {
    setActiveTab(selectedTab);
  }

  let tabContent = <p>Please select a tab!</p>;

  if (activeTab) {
    tabContent = (
          <div id="tab-content">
            <h3>{EXAMPLES[activeTab].title}</h3>
            <p>{EXAMPLES[activeTab].description}</p>
            <pre>
              <code>
                {EXAMPLES[activeTab].code}
              </code>
            </pre>
          </div>
        );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(coreItem => (
              <CoreConcept key={coreItem.title} {...coreItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={activeTab === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={activeTab === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={activeTab === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={activeTab === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
