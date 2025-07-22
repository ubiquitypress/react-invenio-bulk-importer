import {
  addTaskMetadata,
  createImporterTask,
  getTaskStatus,
  validateImporterTask
} from '@/services';
import {
  commitTaskFile,
  initializeTaskFiles,
  uploadTaskFile
} from '@/services/tasks';
import React from 'react';
import { BaseForm } from 'react-invenio-forms';
import { FormContent } from './form-content';
import {
  FORM_VALIDATION_SCHEMA,
  INITIAL_FORM_VALUES
} from './import-form.consts';
import type { ImportFormProps, ImportFormValues } from './import-form.types';

export const ImportForm: React.FC<ImportFormProps> = ({ onSubmit }) => {
  /**
   * Handles form submission for the import task.
   * @param values The form values submitted by the user.
   */
  const handleSubmit = async (values: ImportFormValues) => {
    try {
      const task = await createImporterTask(values.task);

      if (!task) {
        throw new Error('Failed to create import task');
      }

      // Step 4: Upload metadata file if provided
      if (values.metadata) {
        console.log('Uploading metadata file...');
        await addTaskMetadata(task.id, values.metadata);
        console.log('Metadata file uploaded successfully');
      }

      // Step 5: Upload attachment files if provided (before validation)
      if (values.files && values.files.length > 0) {
        console.log(`Uploading ${values.files.length} attachment files...`);

        // Initialize files on the server
        const fileNames = values.files.map(file => file.name);
        await initializeTaskFiles(task.id, fileNames);
        console.log('Files initialized on server');

        // Upload and commit each file
        for (const file of values.files) {
          console.log(`Uploading file: ${file.name}`);
          await uploadTaskFile(task.id, file.name, file);
          console.log(`File uploaded: ${file.name}`);

          console.log(`Committing file: ${file.name}`);
          await commitTaskFile(task.id, file.name);
          console.log(`File committed: ${file.name}`);
        }

        console.log('All attachment files uploaded and committed successfully');
      }

      // Step 6: Start validation (only after all files are uploaded)
      if (values.metadata) {
        console.log('Starting task validation...');
        const validate = await validateImporterTask(task.id);

        if (validate) {
          // Step 7: Check task status
          console.log('Checking task status...');
          const status = await getTaskStatus(task.id);
          console.log('Task status:', status);
        }
      }

      onSubmit?.();
    } catch (error) {
      console.error('Error creating import task:', error);
      throw error; // Re-throw to show user feedback
    }
  };

  return (
    <BaseForm
      formik={{
        initialValues: INITIAL_FORM_VALUES,
        validationSchema: FORM_VALIDATION_SCHEMA,
        onSubmit: handleSubmit
      }}
    >
      <FormContent />
    </BaseForm>
  );
};
