import {
  getRecordTypes,
  getSerializers,
  type ImporterTaskConfig
} from '@/services';
import { InvenioNewImportTask } from '@/types';
import { useFormikContext } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { SelectField, TextAreaField, TextField } from 'react-invenio-forms';
import { Button, Form } from 'semantic-ui-react';

export const FormContent = () => {
  const [configs, setConfigs] = useState<Record<string, ImporterTaskConfig>>(
    {}
  );
  const [loading, setLoading] = useState(true);
  const { values, submitForm, isSubmitting, isValid } =
    useFormikContext<InvenioNewImportTask>();

  const fetchRecordTypes = useCallback(async () => {
    try {
      const types = await getRecordTypes();
      const newConfigs: Record<string, ImporterTaskConfig> = {};

      for (const type of types) {
        const serializer = await getSerializers(type);
        if (serializer) {
          newConfigs[type] = serializer;
        }
      }

      setConfigs(newConfigs);
    } catch (error) {
      console.error('Error fetching record types:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRecordTypes();
  }, [fetchRecordTypes]);

  if (loading) {
    return <p>Loading record types...</p>;
  }

  if (!configs || Object.keys(configs).length === 0) {
    return <p>No record types available.</p>;
  }

  return (
    <div>
      <TextField
        fieldPath='title'
        label='Title'
        placeholder='Enter a title for the import task'
        required
      />

      <Form.Group widths='equal'>
        <SelectField
          fieldPath='recordType'
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
          fieldPath='serializer'
          label='Serializer'
          options={
            values.recordType && configs[values.recordType]
              ? configs[values.recordType].serializers.map(serializer => ({
                  key: serializer,
                  value: serializer,
                  text: `${serializer} (${values.recordType})`
                }))
              : []
          }
          placeholder='Select Serializer'
          disabled={!values.recordType}
          required
        />
      </Form.Group>

      <SelectField
        fieldPath='mode'
        label='Mode'
        options={[
          { key: 'import', value: 'import', text: 'Import' },
          { key: 'delete', value: 'delete', text: 'Delete' }
        ]}
        placeholder='Select Mode'
        disabled={!values.recordType || !values.serializer}
        required
      />

      <TextAreaField
        fieldPath='description'
        label='Notes'
        placeholder='Enter a description for the import task'
        rows={3}
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
    </div>
  );
};
