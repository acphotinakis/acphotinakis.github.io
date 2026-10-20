interface Github {
  /**
   * GitHub org/user name
   */
  username: string;
}

interface GitHubProjects {
  /**
   * Display GitHub projects?
   */
  display?: boolean;

  /**
   * Header
   */
  header?: string;

  /**
   * 'automatic' | 'manual'
   */
  mode?: string;

  /**
   * Config of automatic mode
   */
  automatic?: {
    /**
     * 'stars' | 'updated'
     */
    sortBy?: string;

    /**
     * How many projects to display
     */
    limit?: number;

    /**
     * Exclude projects option
     */
    exclude?: {
      /**
       * Forked projects will not be displayed if set to true
       */
      forks?: boolean;

      /**
       * These projects will not be displayed
       *
       * example: ['my-project1', 'my-project2']
       */
      projects?: Array<string>;
    };
  };

  /**
   * Config of manual mode
   */
  manual?: {
    /**
     * These projects will be displayed
     *
     * example: ['my-project1', 'my-project2']
     */
    projects?: Array<string>;
  };
}

interface ExternalProjects {
  /**
   * Header
   */
  header?: string;

  /**
   * Project list
   */
  projects?: {
    title: string;
    description?: string;
    imageUrl?: string;
    link: string;
  }[];
}

interface Projects {
  github?: GitHubProjects;

  external?: ExternalProjects;
}


interface Config {
  /**
   * GitHub config
   */
  github: Github;

  /**
   * Vite's base url
   */
  base?: string;

  /**
   * Projects config
   */
  projects?: Projects;
}

declare const CONFIG: Config;
