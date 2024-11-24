export type Roles = "admin" | "guru" | "siswa";

interface DefaultDetails {
	nama: string;
	alamat: string;
	email: string;
	no_telepon: string;
}

interface GuruDetail extends DefaultDetails {
	id_guru: number;
	status_guru: string;
}
interface SiswaDetail extends DefaultDetails {
	id_siswa: number;
	status_siswa: string;
}

type UserDetails<R extends Roles> = R extends "guru"
	? GuruDetail
	: R extends "siswa"
		? SiswaDetail
		: never;

interface DefaultResponse<T> {
	data: T;
	message: string;
}
export interface SignInResponse {
	data: {
		token: string;
	};
	user: {
		username: string;
		role: Roles;
	};
	message: string;
}
interface User<R extends Roles> {
	id: number;
	username: string;
	role: R;
	date_and_time: {
		created_at: Date;
		updated_at: Date;
	};
	detail?: UserDetails<R>;
}
export type UsersResponse<R extends Roles> = DefaultResponse<Array<User<R>>>;
