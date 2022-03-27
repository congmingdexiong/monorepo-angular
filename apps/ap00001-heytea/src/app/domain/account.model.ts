export interface Account{
    accNum:string;
    isDefaultAcc:boolean;
    name:string;
    isRetirement:boolean;
    spreadsAllowInd?:boolean;
    optionLevel:string;
}

export interface AccountGroup{
    groupName:string;
    accounts:Array<Account>;
}