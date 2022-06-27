interface User {
	login: string;
	company?: string;
	avatar_url: string;
	repos_url: string;
	location?: string;
	followers: number;
	following: number;
	public_gists: number;
	public_repos: number;
	name?: string;
}

interface Repository {
	name: string;
	id: number;
	html_url: string;
	description: string;
}
