import { useState } from 'react';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './Components/Header/Header.jsx';
import CoreConcept from './Components/CoreConcept.jsx';
import TabButton from './Components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {

  const [activeTab, setActiveTab] = useState('components');

  function handleClick(selectedTab) {
    setActiveTab(selectedTab);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton onClick={() => handleClick('state')}>State</TabButton>
          </menu>
        </section>
        <div id="tab-content">
          <h3>{EXAMPLES[activeTab].title}</h3>
          <p>{EXAMPLES[activeTab].description}</p>
          <pre>
            <code>
              {EXAMPLES[activeTab].code}
            </code>
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;
