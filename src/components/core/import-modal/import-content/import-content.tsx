import {
  getRecordTypes,
  getSerializers,
  type ImporterTaskConfig
} from '@/services';
import React, { useCallback, useEffect, useState } from 'react';
import { Form, Select } from 'semantic-ui-react';

export const ImportContent = () => {
  const [configs, setConfigs] = useState<Record<string, ImporterTaskConfig>>();
  const [selectedConfig, setSelectedConfig] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchRecordTypes = useCallback(async () => {
    try {
      const types = await getRecordTypes();
      for (const type of types) {
        const serializer = await getSerializers(type);
        if (serializer) {
          setConfigs(prev => ({
            ...prev,
            [type]: serializer
          }));
        }
      }
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
    <Form>
      <Select
        options={Object.keys(configs).map(type => ({
          key: type,
          value: type,
          text: type
        }))}
        onChange={(e, { value }) => setSelectedConfig(value as string)}
        placeholder='Select Record Type'
      />
      <Select
        options={
          selectedConfig
            ? configs[selectedConfig].serializers.map(serializer => ({
                key: serializer,
                value: serializer,
                text: `${serializer} (${selectedConfig})`
              }))
            : []
        }
        placeholder='Select Serializer'
        disabled={!configs || Object.keys(configs).length === 0}
      />
    </Form>
  );
};
