export interface UserSession {
    id: number,
    email: string,
    token: string,
}

export interface DataSession {
    user: UserSession,
    expires: Date,
}