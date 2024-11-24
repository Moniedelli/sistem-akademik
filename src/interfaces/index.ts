export type Roles = "admin" | "guru" | "siswa";

interface DefaultDetails {
	nama: string;
	alamat: string;
	email: string;
	no_telepon: string;
}

export interface GuruDetail extends DefaultDetails {
	id_guru: number;
	status_guru: string;
}
export interface SiswaDetail extends DefaultDetails {
	id_siswa: number;
	status_siswa: string;
}

export type UserDetails<R extends Roles> = R extends "guru"
	? GuruDetail
	: R extends "siswa"
		? SiswaDetail
		: undefined;

interface DefaultResponse<T> {
	data: T;
	message: string;
}
export interface SignInResponse
	extends DefaultResponse<{
		token: string;
	}> {
	user: {
		username: string;
		role: Roles;
	};
}
export interface User<R extends Roles> {
	id_user: number;
	username: string;
	role: R;
	date_and_time: {
		created_at: Date;
		updated_at: Date;
	};
	detail?: UserDetails<R>;
}
export type UsersResponse<R extends Roles> = DefaultResponse<Array<User<R>>>;
