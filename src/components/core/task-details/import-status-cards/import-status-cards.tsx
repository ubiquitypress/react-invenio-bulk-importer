import React from 'react';
import {
  Card,
  Grid,
  Icon,
  Label,
  Message,
  Progress,
  Segment,
  type SemanticCOLORS,
  type SemanticICONS,
  Statistic
} from 'semantic-ui-react';

interface CardConfig {
  color: SemanticCOLORS;
  icon: SemanticICONS;
  title: string;
  value: number;
  label: string;
  progress: number;
  progressLabel: string;
}

export const ImportStatusCards = ({
  totalRecords = 0,
  validatedRecords = 0,
  errorRecords = 0,
  successRecords = 0,
  showWhenEmpty = false,
  className = '',
  style = {}
}) => {
  // Calculate progress percentages
  const validationProgress =
    totalRecords > 0 ? (validatedRecords / totalRecords) * 100 : 0;
  const errorsProgress =
    totalRecords > 0 ? (errorRecords / totalRecords) * 100 : 0;
  const importProgress =
    totalRecords > 0 ? (successRecords / totalRecords) * 100 : 0;

  if (totalRecords === 0 && !showWhenEmpty) {
    return null;
  }

  const cardConfig: CardConfig[] = [
    {
      color: 'blue',
      icon: 'check circle',
      title: 'Validation',
      value: validatedRecords,
      label: `of ${totalRecords} Validated`,
      progress: validationProgress,
      progressLabel: `${validationProgress.toFixed(1)}% Complete`
    },
    {
      color: 'red',
      icon: 'exclamation triangle',
      title: 'Errors',
      value: errorRecords,
      label: 'Records with Issues',
      progress: errorsProgress,
      progressLabel: `${errorsProgress.toFixed(1)}% of Total`
    },
    {
      color: 'green',
      icon: 'upload',
      title: 'Import',
      value: successRecords,
      label: 'Successfully Imported',
      progress: importProgress,
      progressLabel: `${importProgress.toFixed(1)}% Complete`
    }
  ];

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
