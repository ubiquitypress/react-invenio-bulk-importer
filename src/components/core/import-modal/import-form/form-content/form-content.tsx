import { FileUploader } from '@/components/core';
import { ProgressLoading } from '@/components/ui';
import type { OrchestrationSteps } from '@/types';
import React, { Fragment } from 'react';
import { SelectField, TextAreaField, TextField } from 'react-invenio-forms';
import { Button, Form } from 'semantic-ui-react';
import { useFormContent } from './hooks';

interface FormContentProps {
  progress?: Record<OrchestrationSteps, number>;
}

export const FormContent: React.FC<FormContentProps> = ({ progress }) => {
  const {
    configs,
    isLoading,
    submitForm,
    handleFileChange,
    handleFilesChange,
    values,
    isSubmitting,
    isValid
  } = useFormContent();

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
      </Form.Group>

      <Form.Field>
        <label htmlFor={'file-input'}>Metadata File</label>
        <input
          id={'file-input'}
          type='file'
          accept='.csv'
          onChange={handleFileChange}
          style={{ marginTop: '8px' }}
        />
        {values.metadata && (
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
            Selected: {values.metadata.name}
          </p>
        )}
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
          Upload a CSV file containing the records metadata to be imported or
          deleted.
        </p>
      </Form.Field>

      <Form.Field>
        <FileUploader
          value={values.files || []}
          onChange={handleFilesChange}
          accept='*'
          skipEmptyFiles
          maxTotalSize={10 * 1024 * 1024 * 1024} // 10 GB
          maxFiles={100}
        />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
          Upload files related to the records. You can upload multiple files,
          and they will be associated with the import task.
        </p>
      </Form.Field>

      <TextAreaField
        fieldPath='task.description'
        label='Notes'
        placeholder='Enter a description for the import task'
        rows={3}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '.5rem'
        }}
      >
        {progress && <ProgressLoading progress={progress} />}
        <Button
          type='button'
          primary
          onClick={submitForm}
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
        >
          Submit
        </Button>
      </div>
    </Fragment>
  );
};
