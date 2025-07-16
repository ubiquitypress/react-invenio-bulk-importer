export interface ImporterTaskConfig {
  serializers: string[];
  options: {
    doi_minting: boolean;
    publish: boolean;
  };
}
