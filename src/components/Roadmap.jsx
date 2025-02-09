import React from 'react';
import RoadmapSection from './RoadmapSection';

const Roadmap = ({ jsroadmap, collapsedSections, toggleCollapse, handleToggle }) => {
    return (
        <div className="roadmap-container">
            {jsroadmap.map((section, sIndex) => (
                <RoadmapSection
                    key={section.title}
                    section={section}
                    sIndex={sIndex}
                    collapsed={collapsedSections[sIndex]}
                    toggleCollapse={toggleCollapse}
                    handleToggle={handleToggle}
                />
            ))}
        </div>
    );
};

export default Roadmap;
