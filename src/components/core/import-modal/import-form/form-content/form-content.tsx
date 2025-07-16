import React, { Fragment } from 'react';
import { SelectField, TextAreaField, TextField } from 'react-invenio-forms';
import { Button, Form } from 'semantic-ui-react';
import { useFormContent } from './hooks';

export const FormContent = () => {
  const { configs, isLoading, submitForm, values, isSubmitting, isValid } =
    useFormContent();

  if (isLoading) {
    return <p>Loading record types...</p>;
  }

  if (!configs || Object.keys(configs).length === 0) {
    return <p>No record types available.</p>;
  }

  return (
    <Fragment>
      <TextField
        fieldPath='task.title'
        label='Title'
        placeholder='Enter a title for the import task'
        required
      />

      <Form.Group widths='equal'>
        <SelectField
          fieldPath='task.recordType'
          label='Record Type'
          options={Object.keys(configs).map(type => ({
            key: type,
            value: type,
            text: type
          }))}
          placeholder='Select Record Type'
          required
        />

        <SelectField
          fieldPath='task.serializer'
          label='Serializer'
          options={
            values.task.recordType && configs[values.task.recordType]
              ? configs[values.task.recordType].serializers.map(serializer => ({
                  key: serializer,
                  value: serializer,
                  text: serializer
                }))
              : []
          }
          placeholder='Select Serializer'
          disabled={!values.task.recordType}
          required
        />
      </Form.Group>

      <SelectField
        fieldPath='task.mode'
        label='Mode'
        options={[
          { key: 'import', value: 'import', text: 'Import' },
          { key: 'delete', value: 'delete', text: 'Delete' }
        ]}
        placeholder='Select Mode'
        disabled={!values.task.recordType || !values.task.serializer}
        required
      />

      <TextAreaField
        fieldPath='task.description'
        label='Notes'
        placeholder='Enter a description for the import task'
        rows={3}
      />

      <TextField
        fieldPath='metadata'
        label='Metadata'
        placeholder='Enter CSV for metadata'
        rows={3}
        type='file'
        accept='.csv'
      />

      <Button
        type='button'
        primary
        onClick={submitForm}
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
      >
        Submit
      </Button>
    </Fragment>
  );
};
