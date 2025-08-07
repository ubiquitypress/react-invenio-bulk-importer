import { default as cn } from 'classnames';
import { default as default_2 } from 'react';
import { FC } from 'react';
import { Icon } from 'semantic-ui-react';
import { Label } from 'semantic-ui-react';

export declare const BulkImporter: {
    Search: FC<SearchProps>;
    TaskDetails: FC<TaskDetailsProps>;
};

/**
 * Capitalizes the first letter of a given string.
 *
 * @param string - The input string to capitalize
 * @returns The string with the first letter capitalized, or an empty string if input is null/undefined
 */
export declare const capitalizeFirstLetter: (string: string) => string;

export { cn }

/**
 * Creates a new InvenioSearchApi instance with the provided configuration.
 *
 * @param config - The configuration object for the search API
 * @returns A new InvenioSearchApi instance
 */
export declare const createSearchApi: (config: SearchApiConfig) => unknown;

/**
 * Creates a configuration object for the search API with default settings.
 *
 * @param url - The base URL for the search API endpoint
 * @param headers - Additional HTTP headers to include in requests. Defaults to an empty object
 * @param withCredentials - Whether to include credentials (cookies, authorization headers) in cross-origin requests. Defaults to true
 * @returns A SearchApiConfig object containing axios configuration with the specified parameters
 */
export declare const createSearchApiConfig: (url: string, headers?: Record<string, string>, withCredentials?: boolean) => SearchApiConfig;

export declare interface DefaultSortingOption {
    sortBy: string;
}

export declare const FileUploader: default_2.FC<FileUploaderProps>;

export declare interface FileUploaderProps {
    taskId?: string;
    value?: File[];
    onChange: (files: File[]) => void;
    accept?: string;
    maxFiles?: number;
    maxTotalSize?: number;
    skipEmptyFiles?: boolean;
    disabled?: boolean;
    error?: string;
}

export declare interface FileUploadProgress {
    fileName: string;
    loaded: number;
    total: number;
    percentage: number;
}

export declare const formatDate: (dateString: string) => string;

/**
 * Formats the total size of selected files into a human-readable string.
 * Uses binary prefixes (Bytes, KB, MB, GB) for formatting.
 * @param bytes - The total size in bytes.
 * @return A formatted string representing the file size.
 */
export declare const formatFileSize: (bytes: number) => string;

/**
 * Retrieves the CSRF token from browser cookies.
 *
 * This function looks for a cookie named 'csrftoken' and returns its value.
 * CSRF tokens are commonly used to prevent Cross-Site Request Forgery attacks
 * by ensuring that requests originate from the intended source.
 *
 * @returns The CSRF token string if found in cookies, otherwise null
 *
 */
export declare const getCsrfToken: () => string | null;

export declare const getStatusColor: (status: InvenioImporterTaskStates | InvenioImporterRecordStates) => "red" | "yellow" | "green" | "blue" | "grey";

export declare const getTotalSize: (uploadedFiles: UploadableFile[]) => number;

export declare const getTotalSizeFormatted: (uploadedFiles: UploadableFile[]) => string;

export declare interface ImporterTaskConfig {
    serializers: string[];
    options: {
        doi_minting: boolean;
        publish: boolean;
    };
}

export declare const ImporterTaskStates: {
    readonly CREATED: "created";
    readonly VALIDATING: "validating";
    readonly VALIDATION_FAILED: "validated with failures";
    readonly VALIDATED: "validated";
    readonly IMPORTING: "importing";
    readonly IMPORT_FAILED: "imported with failures";
    readonly SUCCESS: "success";
    readonly DAMAGED: "damaged";
};

export declare const ImportModal: () => default_2.JSX.Element;

export declare interface InitialQueryState {
    filters?: unknown[];
    hiddenParams?: unknown | null;
    layout?: string;
    page?: number;
    size?: number;
    sortBy?: string;
    queryString?: string;
}

export declare interface InvenioImporterRecord {
    id: string;
    created: string;
    updated: string;
    links: {
        self: string;
        self_html: string;
        edit_html: string;
        metadata: string;
    };
    revision_id: number;
    status: InvenioImporterRecordStates;
    src_data: {
        id: string;
        doi: string;
        title: string;
        version: string;
        keywords: string;
        filenames: string;
        publisher: string;
        'rights.id': string;
        communities: string;
        description: string;
        'access.files': string;
        'imprint.isbn': string;
        'languages.id': string;
        'rights.title': string;
        'creators.name': string;
        'creators.type': string;
        'imprint.pages': string;
        'imprint.place': string;
        'locations.lat': string;
        'locations.lon': string;
        'imprint.volume': string;
        'imprint.edition': string;
        'locations.place': string;
        'subjects.scheme': string;
        'creators.role.id': string;
        publication_date: string;
        'resource_type.id': string;
        'subjects.subject': string;
        'contributors.name': string;
        'contributors.type': string;
        'identifiers.scheme': string;
        'Imprint.series_name': string;
        'creators.given_name': string;
        'access.embargo.until': string;
        'contributors.role.id': string;
        'creators.family_name': string;
        'references.reference': string;
        'access.embargo.active': string;
        'access.embargo.reason': string;
        'locations.description': string;
        'identifiers.identifier': string;
        'contributors.given_name': string;
        'contributors.family_name': string;
        'creators.affiliations.id': string;
        'creators.identifiers.gnd': string;
        'creators.identifiers.ror': string;
        'creators.identifiers.isni': string;
        'creators.affiliations.name': string;
        'creators.identifiers.orcid': string;
        'related_identifiers.scheme': string;
        'contributors.affiliations.id': string;
        'contributors.identifiers.gnd': string;
        'contributors.identifiers.ror': string;
        'additional_descriptions.notes': string;
        'contributors.identifiers.isni': string;
        'contributors.affiliations.name': string;
        'contributors.identifiers.orcid': string;
        'related_identifiers.identifier': string;
        'additional_descriptions.abstract': string;
        'additional_descriptions.methods.eng': string;
        'related_identifiers.relation_type.id': string;
        'related_identifiers.resource_type.id': string;
        'additional_titles.alternative-title.eng': string;
    };
    errors: Array<{
        msg: string;
        loc: string;
        type: string;
    }>;
    task: {
        id: string;
    };
    generated_record_id?: string;
    serializer_data?: {
        files?: {
            enabled: boolean;
        };
        access?: {
            files: string;
            record: string;
        };
        metadata?: {
            title: string;
            rights?: Array<{
                id: string;
            }>;
            version?: string;
            creators?: Array<{
                affiliations?: Array<{
                    name: string;
                }>;
                person_or_org?: {
                    type: string;
                    given_name: string;
                    family_name: string;
                    identifiers?: Array<{
                        scheme: string;
                        identifier: string;
                    }>;
                };
            }>;
            languages?: Array<{
                id: string;
            }>;
            publisher?: string;
            description?: string;
            contributors?: Array<{
                role?: {
                    id: string;
                };
                affiliations?: Array<{
                    name: string;
                }>;
                person_or_org?: {
                    type: string;
                    given_name: string;
                    family_name: string;
                    identifiers?: Array<{
                        scheme: string;
                        identifier: string;
                    }>;
                };
            }>;
            resource_type?: {
                id: string;
            };
            publication_date?: string;
            additional_descriptions?: Array<{
                lang?: {
                    id: string;
                };
                type?: {
                    id: string;
                };
                description: string;
            }>;
        };
    };
    transformed_data?: {
        files?: {
            enabled: boolean;
        };
        access?: {
            files: string;
            record: string;
        };
        $schema?: string;
        metadata?: {
            title: string;
            rights?: Array<{
                id: string;
            }>;
            version?: string;
            creators?: Array<{
                affiliations?: Array<{
                    name: string;
                }>;
                person_or_org?: {
                    name: string;
                    type: string;
                    given_name: string;
                    family_name: string;
                    identifiers?: Array<{
                        scheme: string;
                        identifier: string;
                    }>;
                };
            }>;
            languages?: Array<{
                id: string;
            }>;
            publisher?: string;
            description?: string;
            contributors?: Array<{
                role?: {
                    id: string;
                };
                affiliations?: Array<{
                    name: string;
                }>;
                person_or_org?: {
                    name: string;
                    type: string;
                    given_name: string;
                    family_name: string;
                    identifiers?: Array<{
                        scheme: string;
                        identifier: string;
                    }>;
                };
            }>;
            resource_type?: {
                id: string;
            };
            publication_date?: string;
            additional_descriptions?: Array<{
                lang?: {
                    id: string;
                };
                type?: {
                    id: string;
                };
                description: string;
            }>;
        };
    };
    community_uuids?: {
        ids: string[];
        default: string;
    };
    record_files?: string[];
    validated_record_files?: Array<{
        key: string;
        size: number;
        origin: string;
        full_path: string;
    }>;
    existing_record_id?: string;
}

export declare interface InvenioImporterRecords {
    hits: {
        hits: InvenioImporterRecord[];
        total: number;
    };
}

export declare type InvenioImporterRecordStates = (typeof InvenioImporterRecordStatus)[keyof typeof InvenioImporterRecordStatus];

export declare const InvenioImporterRecordStatus: {
    readonly CREATED: "created";
    readonly VALIDATING: "validating";
    readonly SERIALIZER_VALIDATION_FAILED: "serializer validation failed";
    readonly VALIDATION_FAILED: "validation failed";
    readonly VALIDATED: "validated";
    readonly IMPORT_FAILED: "import failed";
    readonly IMPORTED: "success";
};

export declare type InvenioImporterTaskStates = (typeof ImporterTaskStates)[keyof typeof ImporterTaskStates];

export declare interface InvenioNewImportTask {
    title: string;
    description: string;
    mode: 'import' | 'delete';
    status: string;
    startTime?: null;
    endTime?: null;
    recordType: string;
    serializer: string;
}

export declare interface InvenioTask {
    id: string;
    created: string;
    updated: string;
    links: {
        self: string;
        self_html: string;
        edit_html: string;
        metadata: string;
    };
    revision_id: number;
    title: string;
    description: string;
    mode: string;
    record_type: string;
    serializer: string;
    start_time?: string | null;
    end_time?: string | null;
    records_status?: Record<InvenioImporterRecordStates, number> & {
        total_records: number;
    };
    status: InvenioImporterTaskStates;
    files: {
        enabled: boolean;
    };
    started_by: {
        id: number;
        username: string | null;
        email: string;
    };
    options: {
        doi_minting: boolean;
        publish: boolean;
    };
}

declare interface LabelProps extends default_2.ComponentProps<typeof Label> {
    status: InvenioTask['status'] | InvenioImporterRecordStates;
}

export declare interface LayoutOptions {
    gridView: boolean;
    listView: boolean;
}

export declare type OrchestrationSteps = (typeof OrchestrationStepsEnum)[keyof typeof OrchestrationStepsEnum];

export declare const OrchestrationStepsEnum: {
    readonly CREATING_TASK: "Creating Task";
    readonly UPLOADING_METADATA: "Uploading Metadata";
    readonly UPLOADING_FILES: "Uploading Files";
    readonly UPDATING_METADATA: "Updating Metadata";
    readonly UPDATING_FILES: "Updating Files";
    readonly VALIDATING: "Validating";
    readonly EXECUTING: "Executing";
    readonly UPDATING: "Updating";
};

export declare interface OverridableComponents {
    [key: string]: default_2.ComponentType<unknown>;
}

export declare interface OverridableComponentsTyped<T = Record<string, unknown>> {
    [key: string]: default_2.ComponentType<T>;
}

export declare interface PaginationOptions {
    defaultValue: number;
    maxTotalResults: number;
    resultsPerPage: ResultsPerPageOption[];
}

export declare const ProgressLoading: ({ progress, showPercentage }: ProgressLoadingProps) => default_2.JSX.Element;

declare interface ProgressLoadingProps {
    progress: Record<OrchestrationSteps, number>;
    showPercentage?: boolean;
}

export declare interface ResultsPerPageOption {
    text: string;
    value: number;
}

export declare const Search: default_2.FC<SearchProps>;

export declare interface SearchApiConfig {
    axios: {
        headers?: Record<string, string>;
        url?: string;
        withCredentials?: boolean;
    };
    invenio?: {
        requestSerializer?: string;
    };
}

export declare interface SearchConfig {
    aggs: unknown[];
    appId: string;
    defaultSortingOnEmptyQueryString: DefaultSortingOption[];
    initialQueryState: InitialQueryState;
    layoutOptions: LayoutOptions;
    paginationOptions: PaginationOptions;
    resultPath: string;
    searchApi: SearchApiConfig;
    sortOptions: SortOption[];
    sortOrderDisabled: boolean;
    showFacets?: boolean;
    showImportModal?: boolean;
    showSearchFooter?: boolean;
}

export declare interface SearchProps {
    config?: Partial<SearchConfig>;
    overriddenComponents?: OverridableComponents;
}

export declare interface SortOption {
    sortBy: string;
    text: string;
}

export declare const Spinner: () => default_2.JSX.Element;

export declare const StatusIcon: default_2.FC<StatusIconProps>;

declare interface StatusIconProps extends default_2.ComponentProps<typeof Icon> {
    status: InvenioTask['status'] | InvenioImporterRecordStates;
}

export declare const StatusLabel: default_2.FC<LabelProps>;

export declare const TaskDetails: default_2.FC<TaskDetailsProps>;

export declare interface TaskDetailsProps {
    taskId: string;
}

export declare interface TaskOrchestrationOptions {
    autoValidate?: boolean;
    autoExecute?: boolean;
    onProgress?: (step: OrchestrationSteps, progress?: number) => void;
    onError?: (error: Error, step: OrchestrationSteps) => void;
}

export declare const TaskRecordItem: default_2.FC<TaskRecordItemProps>;

export declare interface TaskRecordItemProps {
    result: InvenioImporterRecord;
    index: number;
}

export declare interface UploadableFile {
    file: File;
    id: string;
    error?: string;
}

/**
 * Custom hook for managing file uploads.
 * Provides functionality to add, remove, and clear files,
 * along with validation against accepted types and size limits.
 */
export declare const useFileUploader: ({ onUploadError }?: UseFileUploaderProps) => {
    uploadFiles: UploadableFile[];
    isUploading: boolean;
    addFiles: (newFiles: File[], accept?: string, maxFiles?: number, maxTotalSize?: number, skipEmptyFiles?: boolean) => UploadableFile[];
    removeFile: (fileId: string) => void;
    clearFiles: () => void;
};

declare interface UseFileUploaderProps {
    taskId?: string;
    onUploadComplete?: (files: File[]) => void;
    onUploadError?: (error: string) => void;
}

export { }
