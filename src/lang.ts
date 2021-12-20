export interface LangTypeDesc {
    mn: string
    baseMn?: string
    typeName: string
    isConst?: boolean
    isRef?: boolean
    canCopy?: boolean
    default?: string
    ctor?: string
    validator?: string
    enum?: string[]
    requirements?: string[]
}

interface LangFunctionArgDesc {
    name: string
    mn: string
}

export interface LangFunctionDesc {
    name: string
    mn: string
    resMn: string
    sideeffect?: boolean
    unsafe?: boolean
    ctor?: string;
    args: LangFunctionArgDesc[]
}

export interface LangCoreDesc {
    logicType: string
    anyType: string
    voidType: string
    types: LangTypeDesc[]
    functions: LangFunctionDesc[]
}

export interface LangDesc {
    types: LangTypeDesc[]
    functions: LangFunctionDesc[]
}
