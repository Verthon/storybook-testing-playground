type EmployeeAccount = {
  userAccountType: 'EMPLOYEE';
  department: string;
  managerName?: string;
}

export type ResellerAccount = {
  userAccountType: 'RESELLER';
  resellerName: string;
  tier: 'SILVER' | 'GOLD' | 'PLATINUM';
}

export type EnterpriseAccount = {
  userAccountType: 'ENTERPRISE';
  dedicatedSupportEmail: string;
  customDomainEnabled: boolean;
}

export type UserProfileResponse = {
	account: EmployeeAccount | ResellerAccount | EnterpriseAccount;
  id: string;
  userName: string;
  email: string;
};
