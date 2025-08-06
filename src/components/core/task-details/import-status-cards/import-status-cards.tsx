import React from 'react';
import { Card, Grid, Progress, Segment, Statistic } from 'semantic-ui-react';
import { useImportStatusConfig } from './hooks';
import { styles } from './import-status-cards.styles';

export const ImportStatusCards = ({
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
    <Segment basic className={className} style={style}>
      <Grid columns={3} stackable>
        {cardConfig.map(card => (
          <Grid.Column key={card.title}>
            <Card fluid>
              <Card.Content>
                <Card.Header textAlign='center'>{card.title}</Card.Header>
                <Card.Description textAlign='center'>
                  <Statistic
                    size='large'
                    color={card.color}
                    className={styles.statistic}
                  >
                    <Statistic.Value>{card.value}</Statistic.Value>
                    <Statistic.Label>{card.label}</Statistic.Label>
                  </Statistic>
                  <Segment basic textAlign='center'>
                    <Segment.Inline
                      basic
                      size='small'
                      className={styles.progressLabel}
                    >
                      {card.progressLabel}
                    </Segment.Inline>
                    <Progress
                      percent={card.progress}
                      color={card.color}
                      size='small'
                      className={styles.progress}
                    />
                  </Segment>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </Segment>
  );
};
