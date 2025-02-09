import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const RoadmapSection = ({ section, sIndex, collapsed, toggleCollapse, handleToggle }) => {

  const isTaskEditable = (task) => {
    const today = dayjs().tz('Asia/Manila').startOf('day');

    if (task.completedAt) {
      const taskDate = dayjs(task.completedAt).tz('Asia/Manila').startOf('day');
      return taskDate.isSame(today);
    }
    if (task.date) {
      const taskDate = dayjs(task.date).tz('Asia/Manila').startOf('day');
      return taskDate.isSame(today) || taskDate.isAfter(today);
    }
    return true;
  };

  return (
    <div className="section">
      <div className="section-header">
        <div className="header-info" onClick={() => toggleCollapse(sIndex)}>
          <h4>{section.title}</h4>
          {section.title === "Basics of JavaScript" && (
            <div className="header-links" onClick={(e) => e.stopPropagation()}>
              {section.links?.length > 0 && (
                <div className="header-links" onClick={(e) => e.stopPropagation()}>
                  {section.links.map((link, index) => (
                    <React.Fragment key={index}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.text}
                      </a>
                      {index < section.links.length - 1 && <span> | </span>}
                    </React.Fragment>
                  ))}
                </div>
              )}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript Guide
              </a>
              <a
              href="https://www.youtube.com/watch?v=EerdGm-ehJQ&t=40755s&ab_channel=SuperSimpleDev"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript Tutorial Full Course - Beginner to Pro
              </a>
            </div>
          )}
          {section.title === "Core Syntax" && (
            <div className="header-links" onClick={(e) => e.stopPropagation()}>
              <a
                href="https://javascript.info/first-steps"
                target="_blank"
                rel="noopener noreferrer"
              >
               JavaScript Fundamentals 
              </a>
            </div>
          )}
          {section.title === "DOM Manipulation" && (
            <div className="header-links" onClick={(e) => e.stopPropagation()}>
              <a
                href="https://javascript.info/document"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOM
              </a>
              <a
                href="https://www.youtube.com/watch?v=BGkc6dKUZ84&ab_channel=EnvatoTuts%2B"
                target="_blank"
                rel="noopener noreferrer"
              >
               JavaScript DOM Manipulation Mastery
              </a>
            </div>
          )}
          {section.title === "Aggregate Functions" && (
            <div className="header-links" onClick={(e) => e.stopPropagation()}>
              <a
                href="https://learnsql.com/blog/aggregate-functions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SQL Aggregate Functions
              </a>
              <a
                href="https://www.sqltutorial.org/sql-having/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SQL HAVING
              </a>
            </div>
          )}
         </div>
        <button className="collapse-btn" onClick={() => toggleCollapse(sIndex)}>
          {collapsed ? 'Expand' : 'Minimize'}
        </button>
      </div>
      <div className={`collapsible ${collapsed ? '' : 'expanded'}`}>
        <ul>
          {section.tasks.map((task, tIndex) => {
            const editable = isTaskEditable(task);
            return (
              <li key={task.id}>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: task.done ? 'line-through' : 'none',
                    color: task.done ? 'gray' : 'inherit'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={task.done}
                    disabled={!editable}
                    onChange={() => handleToggle(sIndex, tIndex)}
                    style={{ marginRight: '0.5rem' }}
                  />
                  {task.text}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RoadmapSection;