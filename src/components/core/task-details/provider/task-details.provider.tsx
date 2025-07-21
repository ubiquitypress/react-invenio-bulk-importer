import React, { createContext, useContext } from 'react';

interface TaskDetailsContextProps {
  taskId: string;
}

const TaskDetailsContext = createContext<TaskDetailsContextProps | undefined>(
  undefined
);

export const TaskDetailsProvider: React.FC<TaskDetailsContextProps> = ({
  taskId,
  children
}) => {
  return (
    <TaskDetailsContext.Provider value={{ taskId }}>
      <div
        style={{
          paddingBlockStart: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        {children}
      </div>
    </TaskDetailsContext.Provider>
  );
};

export const useTaskDetails = (): TaskDetailsContextProps => {
  const context = useContext(TaskDetailsContext);
  if (!context) {
    throw new Error('useTaskDetails must be used within a TaskDetailsProvider');
  }
  return context;
};
