namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXTAUTH_URL: string
    EMAIL_SERVER: string
    EMAIL_FROM: string
    APPLE_ID: string
    APPLE_TEAM_ID: string
    APPLE_PRIVATE_KEY: string
    APPLE_KEY_ID: string
    AUTH0_ID: string
    AUTH0_SECRET: string
    AUTH0_DOMAIN: string
    FACEBOOK_ID: string
    FACEBOOK_SECRET: string
    GITHUB_ID: string
    GITHUB_SECRET: string
    GOOGLE_ID: string
    GOOGLE_SECRET: string
    TWITTER_ID: string
    TWITTER_SECRET: string
    KEYCLOAK_ID: string
    KEYCLOAK_SECRET: string
    KEYCLOAK_ISSUER: string
    DATABASE_URL: string
    SECRET: string
  }
}
