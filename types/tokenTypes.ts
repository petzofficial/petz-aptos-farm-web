export interface CurrentTokenData {
  token_name: string;
  current_collection: CurrentCollection;
}

export interface CurrentCollection {
  collection_name: string;
}

export interface TokenTypes {
  table_type_v1: string;
  property_version_v1: number;
  amount: number;
  current_token_data: CurrentCollection;
}
