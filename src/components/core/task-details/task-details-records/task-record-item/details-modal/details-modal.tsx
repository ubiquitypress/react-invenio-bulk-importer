import { StatusIcon } from '@/components/ui';
import type { InvenioImporterRecord } from '@/types';
import React, { useEffect, useState } from 'react';
import { Button, Icon, Modal, Tab, type TabProps } from 'semantic-ui-react';
import { styles } from './details-modal.styles';
import { BasicInfoTab, ErrorsTab, FilesTab, SourceDataTab } from './tabs';

interface DetailsModalProps {
  record: InvenioImporterRecord;
  open: boolean;
  onClose: () => void;
  initialTab?: number;
}

export const DetailsModal: React.FC<DetailsModalProps> = ({
  record,
  open,
  onClose,
  initialTab = 0
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(initialTab);

  useEffect(() => {
    if (open) {
      setActiveTabIndex(initialTab);
    }
  }, [open, initialTab]);

  /**
   * Handles tab change events.
   * Updates the active tab index based on the clicked tab.
   * @param _ - The mouse event (not used).
   * @param data - The tab data containing the active index.
   * @returns void
   */
  const handleTabChange = (
    _: React.MouseEvent<HTMLDivElement>,
    data: TabProps
  ) => {
    const index = typeof data.activeIndex === 'number' ? data.activeIndex : 0;
    setActiveTabIndex(index);
  };

  /**
   * Generates the panes for the tab component.
   * Each pane corresponds to a different tab in the modal.
   * @returns An array of tab panes.
   */
  const panes = [
    {
      menuItem: { key: 'basic', icon: 'info circle', content: 'Basic Info' },
      render: () => (
        <Tab.Pane>
          <BasicInfoTab record={record} />
        </Tab.Pane>
      )
    },
    {
      menuItem: { key: 'source', icon: 'database', content: 'Source Data' },
      render: () => (
        <Tab.Pane>
          <SourceDataTab record={record} />
        </Tab.Pane>
      )
    },
    ...(record.errors && record.errors.length > 0
      ? [
          {
            menuItem: {
              key: 'errors',
              icon: 'exclamation triangle',
              content: `Errors (${record.errors.length})`
            },
            render: () => (
              <Tab.Pane>
                <ErrorsTab record={record} />
              </Tab.Pane>
            )
          }
        ]
      : []),
    {
      menuItem: { key: 'files', icon: 'file', content: 'Files' },
      render: () => (
        <Tab.Pane>
          <FilesTab record={record} />
        </Tab.Pane>
      )
    }
  ];

  /**
   * Generates the title for the record.
   * @returns The title for the record, derived from various metadata fields.
   */
  const getRecordTitle = () => {
    return (
      record.serializer_data?.metadata?.title ||
      record.transformed_data?.metadata?.title ||
      record.src_data?.title ||
      `Record ${record.id}`
    );
  };

  return (
    <Modal
      centered={false}
      open={open}
      onClose={onClose}
      size='large'
      closeIcon
    >
      <Modal.Header>
        <div className={styles.headerContainer}>
          <div>
            <Icon name='file alternate outline' />
            {getRecordTitle()}
          </div>
          <StatusIcon status={record.status} />
        </div>
      </Modal.Header>

      <Modal.Content scrolling>
        <Tab
          panes={panes}
          activeIndex={activeTabIndex}
          onTabChange={handleTabChange}
        />
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={onClose}>
          <Icon name='close' />
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
