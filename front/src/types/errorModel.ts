export interface ErrorModel {
    // code: string; // USER_NOT_FOUND, INVALID_LOGIN_FORM 등, 오류의 식별자
    isError: boolean;
    message: string | undefined; // 오류 메시지
}

export default ErrorModel;
