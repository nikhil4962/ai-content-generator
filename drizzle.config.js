/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://accounts:aldgIz8q4sEp@ep-solitary-sun-a593iepq.us-east-2.aws.neon.tech/neondb?sslmode=require'
   }
};