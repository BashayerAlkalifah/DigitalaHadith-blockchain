

const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  OTHER: 'other'
}

const USER_TYPE = {
  ADMIN: 'admin',
  USER: 'user'
}

const ORG_DEFAULT_USER = {
  ADMIN: 'admin'
}

const BLOCKCHAIN_DOC_TYPE = {
  AGREEMENT: 'agreement',
  APPROVAL: 'approval',
  DOCUMENT: 'document',
  HADITH : 'hadith',
}

const FILTER_TYPE = {
  COMPLETED:'completed',
  EXPIRING_SOON: 'expiring-soon',
  INPROGRESS:'inprogress',
  ALL:'all',
  ACTIVE: 'active',
  UPDATE :'update'

}

const NETWORK_ARTIFACTS_DEFAULT ={
  CHANNEL_NAME: 'hadithchannel',
  CHAINCODE_NAME: 'HadithChain',
  QSCC:'qscc'
}

const REGISTRATION_TYPE = {
  SCHOLAR: 'scholar',
  USER: 'user',
  STUDENTOFHADITH: 'StudentOfHadith'
}

const CHAINCODE_METHODS = {
  CREATE_AGREEMENT: '',
  APPROVE_AGREEMENT:'',
  GET_ASSET_BY_ID: '',
  GET_ASSET_HISTORY:'',
  GET_APPROVALS:''
}

const AGREEMENT_STATUS = {
  ACTIVE: 'active',
  INPROGRESS:'inprogress',
  EXPIRED: 'expired',
  PENDING: 'pending',
  COMPLETED:'completed',
  UPDATE :'update',
  OTHER: 'other'
}
const APPROVAL_STATUS = {
  APPROVED:'approved',
  REJECTED: 'rejected',
  OTHER: 'other'
}

module.exports = {
  USER_STATUS,
  USER_TYPE,
  REGISTRATION_TYPE,
  NETWORK_ARTIFACTS_DEFAULT,
  BLOCKCHAIN_DOC_TYPE,
  CHAINCODE_METHODS,
  AGREEMENT_STATUS,
  APPROVAL_STATUS,
  FILTER_TYPE
}