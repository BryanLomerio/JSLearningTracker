import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import DarkModeToggle from './DarkModeToggle';

dayjs.extend(utc);
dayjs.extend(timezone);

const Graph = ({ tasks, onCellClick }) => {

  const getManilaDate = (dateInput = new Date()) => dayjs(dateInput).tz('Asia/Manila');

  const currentManilaDate = getManilaDate();
  const currentYear = currentManilaDate.year();
  const yearStart = getManilaDate(`${currentYear}-01-01`).startOf('day');
  const yearEnd = getManilaDate(`${currentYear}-12-31`).endOf('day');
  let startDate = yearStart.subtract(yearStart.day(), 'day');
  let endDate = yearEnd.add(6 - yearEnd.day(), 'day');

  const weeks = [];
  let current = startDate;

  while (current.isBefore(endDate) || current.isSame(endDate, 'day')) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(current.toDate());
      current = current.add(1, 'day');
    }
    weeks.push(week);
  }

  const getDateStr = (date) => getManilaDate(date).format('YYYY-MM-DD');

  const tasksByDate = tasks.reduce((acc, task) => {
    if (task.completedAt) {
      const ds = getDateStr(task.completedAt);
      if (!acc[ds]) acc[ds] = [];
      acc[ds].push(task);
    }
    return acc;
  }, {});

  const isEditable = (day) => {
    const manilaDay = getManilaDate(day).startOf('day');
    const today = getManilaDate().startOf('day');
    return manilaDay.isSame(today) || manilaDay.isAfter(today);
  };

  return (
    <div className="github-graph">
      {/* Month Labels */}
      <div className="month-labels">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="month-label-cell">
            {getManilaDate().month(i).format('MMM')}
          </div>
        ))}
      </div>

      {/* Week Columns */}
      <div className="weeks">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="week-column">
            {week.map((day) => {
              const ds = getDateStr(day);
              const inYear = day >= yearStart.toDate() && day <= yearEnd.toDate();
              const tasksForDay = tasksByDate[ds] || [];
              const isCompleted = tasksForDay.length > 0;
              const sections = [...new Set(tasksForDay.map((task) => task.section))];
              const formattedDate = getManilaDate(day).format('MMMM D, YYYY');
              const editable = isEditable(day);

              return (
                <div key={ds} className="contrib-cell-container">
                  <div
                    className="contrib-cell"
                    style={{
                      backgroundColor: inYear && isCompleted ? '#4caf50' : '#eee',
                      cursor: editable ? 'pointer' : 'default'
                    }}
                    onClick={
                      editable && onCellClick ? () => onCellClick(day) : undefined
                    }
                  ></div>
                  {isCompleted && (
                    <div className="tooltip">
                      <div>
                        <strong>{formattedDate}</strong>
                      </div>
                      <div>JS Topics Completed:</div>
                      {sections.map((section) => (
                        <div key={section}>• {section}</div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="footer">
      <a
        className="github"
        href="https://github.com/BryanLomerio"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <DarkModeToggle />
    </div>
    </div>
  );
};

export default Graph;
