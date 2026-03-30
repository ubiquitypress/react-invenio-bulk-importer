import { cn } from '@/utils';
import React from 'react';
import { Icon, Progress } from 'semantic-ui-react';
import { useImportStatusConfig } from './hooks';
import { styles } from './import-status-cards.styles';
import type { CardConfig } from './import-status-cards.types';

interface ImportStatusCardsProps {
  totalRecords?: number;
  validatedRecords?: number;
  errorRecords?: number;
  successRecords?: number;
  showWhenEmpty?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const accentClasses: Partial<Record<CardConfig['color'], string>> = {
  blue: styles.accentBlue,
  red: styles.accentRed,
  green: styles.accentGreen
};

export const ImportStatusCards: React.FC<ImportStatusCardsProps> = ({
  totalRecords = 0,
  validatedRecords = 0,
  errorRecords = 0,
  successRecords = 0,
  showWhenEmpty = false,
  className = '',
  style = {}
}) => {
  const cardConfig = useImportStatusConfig({
    totalRecords,
    validatedRecords,
    errorRecords,
    successRecords
  });

  if (totalRecords === 0 && !showWhenEmpty) {
    return null;
  }

  return (
    <div className={cn(styles.wrapper, className)} style={style}>
      <div className={styles.grid}>
        {cardConfig.map(card => (
          <div key={card.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitleGroup}>
                <div
                  className={cn(
                    styles.cardIcon,
                    accentClasses[card.color] || styles.accentBlue
                  )}
                >
                  <Icon name={card.icon} fitted />
                </div>
                <div>
                  <div className={styles.cardTitle}>{card.title}</div>
                  <div className={styles.cardLabel}>{card.label}</div>
                </div>
              </div>
              <div className={styles.cardValue}>{card.value}</div>
            </div>

            <div className={styles.progressLabel}>{card.progressLabel}</div>
            <Progress
              percent={card.progress}
              color={card.color}
              size='small'
              className={styles.progress}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
