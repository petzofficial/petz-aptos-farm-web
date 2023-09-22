export interface Root {
  data: Data;
}

export interface Data {
  current_token_ownerships_v2: CurrentTokenOwnershipsV2[];
}

export interface CurrentTokenOwnershipsV2 {
  token_standard: string;
  token_properties_mutated_v1: TokenPropertiesMutatedV1;
  token_data_id: string;
  table_type_v1: string;
  storage_id: string;
  property_version_v1: number;
  owner_address: string;
  last_transaction_version: number;
  last_transaction_timestamp: string;
  is_soulbound_v2: any;
  is_fungible_v2: any;
  amount: number;
  current_token_data: CurrentTokenData;
}

export interface TokenPropertiesMutatedV1 {
  given_to: string;
}

export interface CurrentTokenData {
  collection_id: string;
  description: string;
  is_fungible_v2: any;
  largest_property_version_v1: number;
  last_transaction_timestamp: string;
  last_transaction_version: number;
  maximum: number;
  supply: number;
  token_data_id: string;
  token_name: string;
  token_properties: TokenProperties;
  token_standard: string;
  token_uri: string;
  current_collection: CurrentCollection;
}

export interface TokenProperties {
  given_to: string;
}

export interface CurrentCollection {
  collection_id: string;
  collection_name: string;
  creator_address: string;
  current_supply: number;
  description: string;
  last_transaction_timestamp: string;
  last_transaction_version: number;
  max_supply: number;
  mutable_description: boolean;
  mutable_uri: boolean;
  table_handle_v1: string;
  token_standard: string;
  total_minted_v2: any;
  uri: string;
}

// ****************************

export interface TokenTypes {
  token_standard: string;
  token_properties_mutated_v1: TokenPropertiesMutatedV1;
  token_data_id: string;
  table_type_v1: string;
  storage_id: string;
  property_version_v1: number;
  owner_address: string;
  last_transaction_version: number;
  last_transaction_timestamp: string;
  is_soulbound_v2: any;
  is_fungible_v2: any;
  amount: number;
  current_token_data: {
    collection_id: string;
    description: string;
    is_fungible_v2: any;
    largest_property_version_v1: number;
    last_transaction_timestamp: string;
    last_transaction_version: number;
    maximum: number;
    supply: number;
    token_data_id: string;
    token_name: string;
    token_properties: {
      given_to: string;
    };
    token_standard: string;
    token_uri: string;
    current_collection: {
      collection_id: string;
      collection_name: string;
      creator_address: string;
      current_supply: number;
      description: string;
      last_transaction_timestamp: string;
      last_transaction_version: number;
      max_supply: number;
      mutable_description: boolean;
      mutable_uri: boolean;
      table_handle_v1: string;
      token_standard: string;
      total_minted_v2: any;
      uri: string;
    };
  };
}
