// import {
//   getRecordTypes,
//   getSerializers,
//   type ImporterTaskConfig
// } from '@/services';
// import { useFormikContext } from 'formik';
// import React, { useCallback, useEffect, useState } from 'react';
// import { SelectField, TextField, TextAreaField } from 'react-invenio-forms';
// import { Button, Form } from 'semantic-ui-react';
// import type { ImportFormState } from '../import-form';

// export const FormContent = () => {
//   const [configs, setConfigs] = useState<Record<string, ImporterTaskConfig>>();
//   const [selectedConfig, setSelectedConfig] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const { values, handleSubmit } = useFormikContext<ImportFormState>();

//   const fetchRecordTypes = useCallback(async () => {
//     try {
//       const types = await getRecordTypes();
//       for (const type of types) {
//         const serializer = await getSerializers(type);
//         if (serializer) {
//           setConfigs(prev => ({
//             ...prev,
//             [type]: serializer
//           }));
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching record types:', error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchRecordTypes();
//   }, [fetchRecordTypes]);

//   if (loading) {
//     return <p>Loading record types...</p>;
//   }

//   if (!configs || Object.keys(configs).length === 0) {
//     return <p>No record types available.</p>;
//   }

//   return (
//     <Form onSubmit={handleSubmit}>
//       <TextField
//         fieldPath='title'
//         label='Title'
//         placeholder='Enter a title for the import task'
//         required
//       />
//       <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
//         <div style={{ flex: 1 }}>
//           <SelectField
//             fieldPath='recordType'
//             label='Record Type'
//             options={Object.keys(configs).map(type => ({
//               key: type,
//               value: type,
//               text: type
//             }))}
//             placeholder='Select Record Type'
//           />
//         </div>
//         <div style={{ flex: 1 }}>
//           <SelectField
//             fieldPath='serializer'
//             label='Serializer'
//             options={
//               values.recordType
//                 ? configs[values.recordType].serializers.map(serializer => ({
//                     key: serializer,
//                     value: serializer,
//                     text: `${serializer} (${values.recordType})`
//                   }))
//                 : []
//             }
//             placeholder='Select Serializer'
//             disabled={
//               !configs ||
//               Object.keys(configs).length === 0 ||
//               !values.recordType
//             }
//           />
//         </div>
//       </div>

//       <SelectField
//         fieldPath='mode'
//         label='Mode'
//         options={[
//           { key: 'import', value: 'import', text: 'Import' },
//           { key: 'delete', value: 'delete', text: 'Delete' }
//         ]}
//         placeholder='Select Mode'
//         disabled={
//           !configs ||
//           Object.keys(configs).length === 0 ||
//           !values.recordType ||
//           !values.serializer
//         }
//       />
//       <TextAreaField
//         fieldPath='description'
//         label='Notes'
//         placeholder='Enter a description for the import task'
//         rows={3}
//       />

//       <pre>{JSON.stringify(values, null, 2)}</pre>

//       <Button
//         type='submit'
//         primary
//         disabled={
//           !values.title ||
//           !values.recordType ||
//           !values.serializer ||
//           !values.mode
//         }
//       >
//         Submit
//       </Button>
//     </Form>
//   );
// };
