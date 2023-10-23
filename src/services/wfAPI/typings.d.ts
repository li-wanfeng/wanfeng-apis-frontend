declare namespace wfAPI {
  type BaseResponse = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseInterfaceInfoVO_ = {
    code?: number;
    data?: InterfaceInfoVO;
    message?: string;
  };

  type BaseResponseObject_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageInterfaceInfoVO_ = {
    code?: number;
    data?: PageInterfaceInfoVO_;
    message?: string;
  };

  type BaseResponsePageUserInterfaceInfoVO_ = {
    code?: number;
    data?: PageUserInterfaceInfoVO_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseUserInterfaceInfoVO_ = {
    code?: number;
    data?: UserInterfaceInfoVO;
    message?: string;
  };

  type BaseResponseUserLoginVO_ = {
    code?: number;
    data?: UserLoginVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getInterfaceInfoVOByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getUserInterfaceInfoVOByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type IDRequest = {
    id?: number;
  };

  type InterfaceInfo = {
    createtime?: string;
    description?: string;
    id?: number;
    isdelete?: number;
    method?: string;
    name?: string;
    requestheader?: string;
    requestparams?: string;
    requesttype?: string;
    responseheader?: string;
    responseparams?: string;
    responsetype?: string;
    status?: number;
    updatetime?: string;
    url?: string;
    userid?: number;
  };

  type InterfaceInfoInvokeRequset = {
    id?: number;
    method?: string;
    requestheader?: string;
    requestparams?: string;
    requesttype?: string;
    url?: string;
  };

  type InterfaceInfoQueryRequset = {
    createtime?: string;
    current?: number;
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    pageSize?: number;
    requestheader?: string;
    requestparams?: string;
    requesttype?: string;
    responseheader?: string;
    responseparams?: string;
    responsetype?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    updatetime?: string;
    url?: string;
    userid?: number;
  };

  type InterfaceInfoUpdateRequset = {
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    requestheader?: string;
    requestparams?: string;
    requesttype?: string;
    responseheader?: string;
    responseparams?: string;
    responsetype?: string;
    status?: number;
    url?: string;
  };

  type InterfaceInfoVO = {
    createtime?: string;
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    requestheader?: string;
    requestparams?: string;
    requesttype?: string;
    responseheader?: string;
    responseparams?: string;
    responsetype?: string;
    status?: number;
    updatetime?: string;
    url?: string;
    user?: UserDescVO;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageInterfaceInfoVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: InterfaceInfoVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserInterfaceInfoVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserInterfaceInfoVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type User = {
    accesskey?: string;
    avatarurl?: string;
    createtime?: string;
    email?: string;
    gender?: number;
    id?: number;
    isdelete?: number;
    phone?: string;
    secretkey?: string;
    updatetime?: string;
    useraccount?: string;
    username?: string;
    userpassword?: string;
    userrole?: number;
    userstatus?: number;
  };

  type UserDescVO = {
    useraccount?: string;
    username?: string;
    userrole?: number;
    userstatus?: number;
  };

  type UserInterfaceInfo = {
    createtime?: string;
    id?: number;
    interfaceinfoid?: number;
    isdelete?: number;
    residuenum?: number;
    status?: number;
    totalnum?: number;
    updatetime?: string;
    userid?: number;
  };

  type UserInterfaceInfoQueryRequset = {
    createtime?: string;
    current?: number;
    id?: number;
    interfaceinfoid?: number;
    pageSize?: number;
    residuenum?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    totalnum?: number;
    updatetime?: string;
    userid?: number;
  };

  type UserInterfaceInfoUpdateRequset = {
    id?: number;
    interfaceinfoid?: number;
    residuenum?: number;
    status?: number;
    totalnum?: number;
    userid?: number;
  };

  type UserInterfaceInfoVO = {
    createtime?: string;
    id?: number;
    interfaceinfoid?: number;
    residuenum?: number;
    status?: number;
    totalnum?: number;
    updatetime?: string;
    userid?: number;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserLoginVO = {
    avatarurl?: string;
    createtime?: string;
    email?: string;
    gender?: number;
    id?: number;
    isdelete?: number;
    phone?: string;
    updatetime?: string;
    useraccount?: string;
    username?: string;
    userrole?: number;
    userstatus?: number;
  };

  type UserQueryRequset = {
    avatarurl?: string;
    createtime?: string;
    current?: number;
    email?: string;
    gender?: number;
    id?: number;
    pageSize?: number;
    phone?: string;
    sortField?: string;
    sortOrder?: string;
    useraccount?: string;
    username?: string;
    userrole?: number;
    userstatus?: number;
  };

  type UserUpdateRequset = {
    avatarurl?: string;
    current?: number;
    email?: string;
    gender?: number;
    id?: number;
    pageSize?: number;
    phone?: string;
    sortField?: string;
    sortOrder?: string;
    useraccount?: string;
    username?: string;
  };

  type UserVO = {
    avatarurl?: string;
    createtime?: string;
    email?: string;
    gender?: number;
    id?: number;
    phone?: string;
    useraccount?: string;
    username?: string;
    userrole?: number;
    userstatus?: number;
  };
}
