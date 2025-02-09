import React, { useState, useEffect } from 'react';
import Roadmap from './components/Roadmap';
import ContributionGraph from './components/Graph';
import initialRoadmaps from './data/initialRoadmaps';
import { ThemeProvider } from './components/ThemeContext';


function App() {
  const [jsroadmap, setRoadmap] = useState(() => {
    const savedRoadmap = localStorage.getItem('jsroadmap');
    return savedRoadmap ? JSON.parse(savedRoadmap) : initialRoadmaps;
  });

  const [collapsedSections, setCollapsedSections] = useState(() => {
    const initialCollapsed = {};
    jsroadmap.forEach((_, index) => {
      initialCollapsed[index] = false;
    });
    return initialCollapsed;
  });

  useEffect(() => {
    localStorage.setItem('jsroadmap', JSON.stringify(jsroadmap));
  }, [jsroadmap]);

  const handleToggle = (sectionIndex, taskIndex) => {
    setRoadmap(prevRoadmap =>
      prevRoadmap.map((section, sIdx) => {
        if (sIdx !== sectionIndex) return section;
        return {
          ...section,
          tasks: section.tasks.map((task, tIdx) => {
            if (tIdx !== taskIndex) return task;
            const newDone = !task.done;
            return {
              ...task,
              done: newDone,
              completedAt: newDone ? new Date().toISOString() : null,
            };
          }),
        };
      })
    );
  };

  const toggleCollapse = (sectionIndex) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  const flattenedTasks = jsroadmap.flatMap(section =>
    section.tasks.map(task => ({ ...task, section: section.title }))
  );

  return (

    <ThemeProvider>
      <div className="App">
        <h2>JavaScript Learning Journey</h2>
        <p>
          Learn without limits. Your progress is tracked like a GitHub contribution graph.
          No resets, no losses, just continuous growth, one checkmark at a time.
        </p>
        <ContributionGraph tasks={flattenedTasks} />
       
        <Roadmap
          jsroadmap={jsroadmap}
          collapsedSections={collapsedSections}
          toggleCollapse={toggleCollapse}
          handleToggle={handleToggle}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
