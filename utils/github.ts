const GITHUB_API_URL = "https://api.github.com";

export interface GithubRepository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
  topics?: string[];
}

export default class Github {

  static repos = {

    async fetch(
      username: string,
      options: {
        sort?: 'created' | 'updated' | 'pushed' | 'full_name';
        direction?: 'asc' | 'desc';
        per_page?: number;
      } = {},
    ): Promise<GithubRepository[]> {
      const {
        sort = 'updated',
        direction = 'desc',
        per_page = 30,
      } = options;

      const url = new URL(`${GITHUB_API_URL}/users/${username}/repos`);
      url.searchParams.append('sort', sort);
      url.searchParams.append('direction', direction);
      url.searchParams.append('per_page', per_page.toString());

      return fetch(url.toString(), {
        next: { revalidate: 3600 },
      })
        .then((res) => res.json());
    },

  };
}
