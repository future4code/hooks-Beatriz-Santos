export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string
}
export type Task = {
    id: string,
    title: string,
	description: string,
    statusTask: STATUS_TASK,
	limit_Date: Date,
	creator_User_Id: string
}
const enum STATUS_TASK{
    TO_DO = 'To do',
    DOING = 'Doing',
    DONE = 'Done'
}