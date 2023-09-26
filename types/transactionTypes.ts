export type Root = Root2[];

export interface Root2 {
  version: string;
  hash: string;
  state_change_hash: string;
  event_root_hash: string;
  state_checkpoint_hash: any;
  gas_used: string;
  success: boolean;
  vm_status: string;
  accumulator_root_hash: string;
  changes: Change[];
  sender: string;
  sequence_number: string;
  max_gas_amount: string;
  gas_unit_price: string;
  expiration_timestamp_secs: string;
  payload: Payload;
  signature: Signature;
  events: Event[];
  timestamp: string;
  type: string;
}

export interface Change {
  address?: string;
  state_key_hash: string;
  data?: Data;
  type: string;
  handle?: string;
  key?: string;
  value?: string;
}

export interface Data {
  type?: string;
  data?: Data2;
  bytecode?: string;
  abi?: Abi;
}

export interface Data2 {
  deposit_events?: DepositEvents;
  frozen_events?: FrozenEvents;
  withdraw_events?: WithdrawEvents;
  balance?: string;
  frozen?: boolean;
  metadata?: Metadata;
  allow_ungated_transfer?: boolean;
  guid_creation_num?: string;
  owner?: string;
  transfer_events?: TransferEvents;
  coin?: Coin;
  authentication_key?: string;
  coin_register_events?: CoinRegisterEvents;
  key_rotation_events?: KeyRotationEvents;
  rotation_capability_offer?: RotationCapabilityOffer;
  sequence_number?: string;
  signer_capability_offer?: SignerCapabilityOffer;
  burn_events?: BurnEvents;
  direct_transfer?: boolean;
  mutate_token_property_events?: MutateTokenPropertyEvents;
  tokens?: Tokens;
  collection_data?: CollectionData;
  create_collection_events?: CreateCollectionEvents;
  create_token_data_events?: CreateTokenDataEvents;
  mint_token_events?: MintTokenEvents;
  token_data?: TokenData;
  decimals?: number;
  icon_uri?: string;
  name?: string;
  project_uri?: string;
  symbol?: string;
  current?: string;
  maximum?: Maximum;
  metadata_derive_ref?: MetadataDeriveRef;
  burn_ref?: BurnRef;
  mint_ref?: MintRef;
  transfer_ref?: TransferRef;
  packages?: Package[];
  token_data_id?: TokenDataId;
  signer_cap?: SignerCap;
}

export interface DepositEvents {
  counter: string;
  guid: Guid;
}

export interface Guid {
  id: Id;
}

export interface Id {
  addr: string;
  creation_num: string;
}

export interface FrozenEvents {
  counter: string;
  guid: Guid2;
}

export interface Guid2 {
  id: Id2;
}

export interface Id2 {
  addr: string;
  creation_num: string;
}

export interface WithdrawEvents {
  counter: string;
  guid: Guid3;
}

export interface Guid3 {
  id: Id3;
}

export interface Id3 {
  addr: string;
  creation_num: string;
}

export interface Metadata {
  inner: string;
}

export interface TransferEvents {
  counter: string;
  guid: Guid4;
}

export interface Guid4 {
  id: Id4;
}

export interface Id4 {
  addr: string;
  creation_num: string;
}

export interface Coin {
  value: string;
}

export interface CoinRegisterEvents {
  counter: string;
  guid: Guid5;
}

export interface Guid5 {
  id: Id5;
}

export interface Id5 {
  addr: string;
  creation_num: string;
}

export interface KeyRotationEvents {
  counter: string;
  guid: Guid6;
}

export interface Guid6 {
  id: Id6;
}

export interface Id6 {
  addr: string;
  creation_num: string;
}

export interface RotationCapabilityOffer {
  for: For;
}

export interface For {
  vec: any[];
}

export interface SignerCapabilityOffer {
  for: For2;
}

export interface For2 {
  vec: string[];
}

export interface BurnEvents {
  counter: string;
  guid: Guid7;
}

export interface Guid7 {
  id: Id7;
}

export interface Id7 {
  addr: string;
  creation_num: string;
}

export interface MutateTokenPropertyEvents {
  counter: string;
  guid: Guid8;
}

export interface Guid8 {
  id: Id8;
}

export interface Id8 {
  addr: string;
  creation_num: string;
}

export interface Tokens {
  handle: string;
}

export interface CollectionData {
  handle: string;
}

export interface CreateCollectionEvents {
  counter: string;
  guid: Guid9;
}

export interface Guid9 {
  id: Id9;
}

export interface Id9 {
  addr: string;
  creation_num: string;
}

export interface CreateTokenDataEvents {
  counter: string;
  guid: Guid10;
}

export interface Guid10 {
  id: Id10;
}

export interface Id10 {
  addr: string;
  creation_num: string;
}

export interface MintTokenEvents {
  counter: string;
  guid: Guid11;
}

export interface Guid11 {
  id: Id11;
}

export interface Id11 {
  addr: string;
  creation_num: string;
}

export interface TokenData {
  handle: string;
}

export interface Maximum {
  vec: any[];
}

export interface MetadataDeriveRef {
  self: string;
}

export interface BurnRef {
  vec: Vec[];
}

export interface Vec {
  metadata: Metadata2;
}

export interface Metadata2 {
  inner: string;
}

export interface MintRef {
  vec: Vec2[];
}

export interface Vec2 {
  metadata: Metadata3;
}

export interface Metadata3 {
  inner: string;
}

export interface TransferRef {
  vec: Vec3[];
}

export interface Vec3 {
  metadata: Metadata4;
}

export interface Metadata4 {
  inner: string;
}

export interface Package {
  deps: Dep[];
  extension: Extension;
  manifest: string;
  modules: Module[];
  name: string;
  source_digest: string;
  upgrade_number: string;
  upgrade_policy: UpgradePolicy;
}

export interface Dep {
  account: string;
  package_name: string;
}

export interface Extension {
  vec: any[];
}

export interface Module {
  extension: Extension2;
  name: string;
  source: string;
  source_map: string;
}

export interface Extension2 {
  vec: any[];
}

export interface UpgradePolicy {
  policy: number;
}

export interface TokenDataId {
  collection: string;
  creator: string;
  name: string;
}

export interface SignerCap {
  account: string;
}

export interface Abi {
  address: string;
  name: string;
  friends: any[];
  exposed_functions: ExposedFunction[];
  structs: Struct[];
}

export interface ExposedFunction {
  name: string;
  visibility: string;
  is_entry: boolean;
  is_view: boolean;
  generic_type_params: any[];
  params: string[];
  return: string[];
}

export interface Struct {
  name: string;
  is_native: boolean;
  abilities: string[];
  generic_type_params: any[];
  fields: Field[];
}

export interface Field {
  name: string;
  type: string;
}

export interface Payload {
  function: string;
  type_arguments: any[];
  arguments: any[];
  type: string;
}

export interface Signature {
  public_key: string;
  signature: string;
  type: string;
}

export interface Event {
  guid: Guid12;
  sequence_number: string;
  type: string;
  data: Data3;
}

export interface Guid12 {
  creation_number: string;
  account_address: string;
}

export interface Data3 {
  amount?: string;
  collection_name?: string;
  creator?: string;
  description?: string;
  maximum?: string;
  uri?: string;
  id?: Id12;
  mutability_config?: MutabilityConfig;
  name?: string;
  property_keys?: string[];
  property_types?: string[];
  property_values?: string[];
  royalty_payee_address?: string;
  royalty_points_denominator?: string;
  royalty_points_numerator?: string;
  keys?: any[];
  new_id?: NewId;
  old_id?: OldId;
  types?: any[];
  values?: any[];
}

export interface Id12 {
  collection?: string;
  creator?: string;
  name?: string;
  property_version?: string;
  token_data_id?: TokenDataId2;
}

export interface TokenDataId2 {
  collection: string;
  creator: string;
  name: string;
}

export interface MutabilityConfig {
  description: boolean;
  maximum: boolean;
  properties: boolean;
  royalty: boolean;
  uri: boolean;
}

export interface NewId {
  property_version: string;
  token_data_id: TokenDataId3;
}

export interface TokenDataId3 {
  collection: string;
  creator: string;
  name: string;
}

export interface OldId {
  property_version: string;
  token_data_id: TokenDataId4;
}

export interface TokenDataId4 {
  collection: string;
  creator: string;
  name: string;
}
