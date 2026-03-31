import type { InvenioTask } from '@/types';
import {
  capitalizeFirstLetter,
  formatDate,
  formatDetailValue,
  formatOptionLabel
} from '@/utils';
import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { styles } from './task-configuration.styles';

interface TaskConfigurationProps {
  task: InvenioTask;
}

export const TaskConfiguration: React.FC<TaskConfigurationProps> = ({
  task
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const configItems = [
    {
      label: 'Mode',
      value: formatDetailValue(task.mode, capitalizeFirstLetter)
    },
    {
      label: 'Record type',
      value: formatDetailValue(task.record_type, formatOptionLabel)
    },
    {
      label: 'Serializer',
      value: formatDetailValue(task.serializer)
    },
    {
      label: 'Files',
      value: formatDetailValue(task.files?.enabled)
    },
    {
      label: 'Revision',
      value: formatDetailValue(task.revision_id)
    },
    {
      label: 'Created',
      value: formatDetailValue(task.created, formatDate)
    },
    {
      label: 'Updated',
      value: formatDetailValue(task.updated, formatDate)
    },
    {
      label: 'Started by',
      value:
        task.started_by?.username && task.started_by?.email
          ? `${task.started_by.username} (${task.started_by.email})`
          : formatDetailValue(
              task.started_by?.username || task.started_by?.email || null
            )
    }
  ];

  return (
    <div className={styles.detailCard}>
      <Accordion fluid styled={false}>
        <Accordion.Title
          active={isOpen}
          onClick={() => setIsOpen(prev => !prev)}
          className={styles.accordionTrigger}
        >
          <div className={styles.accordionHeading}>
            <div className={styles.sectionTitle}>
              <Icon name='sliders horizontal' />
              <span>Task Information</span>
            </div>
            <Icon
              name={isOpen ? 'chevron up' : 'chevron down'}
              className={styles.accordionChevron}
            />
          </div>
        </Accordion.Title>
        <Accordion.Content active={isOpen} className={styles.accordionContent}>
          <div className={styles.detailList}>
            {configItems.map(item => (
              <div key={item.label} className={styles.detailItem}>
                <div className={styles.detailLabel}>{item.label}</div>
                <div className={styles.detailValue}>{item.value}</div>
              </div>
            ))}
          </div>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};
