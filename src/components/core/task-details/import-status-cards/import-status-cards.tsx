import React from 'react';
import { Card, Grid, Progress, Segment, Statistic } from 'semantic-ui-react';
import { useImportStatusConfig } from './hooks';

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
                    style={{ margin: '1rem 0' }}
                  >
                    <Statistic.Value>{card.value}</Statistic.Value>
                    <Statistic.Label>{card.label}</Statistic.Label>
                  </Statistic>
                  <Segment basic textAlign='center'>
                    <Segment.Inline
                      basic
                      size='small'
                      style={{ marginBottom: '0.5rem' }}
                    >
                      {card.progressLabel}
                    </Segment.Inline>
                    <Progress
                      percent={card.progress}
                      color={card.color}
                      size='small'
                      style={{ marginBottom: '0.5rem' }}
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
