export interface ITBICON {
    color: any,
    name: any,
    focused: any,
    icon: any
} 

export interface IButton {
    title: string,
    handlePross?: () => void,
    textStyle?: string,
    titleStyle?: string,
    isLoading?: boolean
}

export interface ITextInput {
    textInputStyle?: string,
    textLabelStyle?: string,
    textLabel?: string,
    inputError?: boolean,
    secureTextEntry?: boolean,
    inputValue?: string,
    isPassword?: boolean,
    iconName?:string,
    outStyle?: string,
    placeholderText?: string,
    onFocus?: () => void,
    onChangeText?: () => void,
    onBlur?: () => void
}

export interface IFileUpload {
    textLabel?: string,
    isdashed?: boolean
}