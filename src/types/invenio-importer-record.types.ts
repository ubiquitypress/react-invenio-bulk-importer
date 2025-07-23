export interface InvenioImporterRecord {
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

  // Missing fields added as optional
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

export const InvenioImporterRecordStatus = {
  CREATED: 'created',
  VALIDATING: 'validating',
  SERIALIZER_VALIDATION_FAILED: 'serializer validation failed',
  VALIDATION_FAILED: 'validation failed',
  VALIDATED: 'validated',
  IMPORT_FAILED: 'import failed',
  IMPORTED: 'success'
} as const;

export type InvenioImporterRecordStates =
  (typeof InvenioImporterRecordStatus)[keyof typeof InvenioImporterRecordStatus];
