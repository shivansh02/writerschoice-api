module.exports = ({ env }) => ({

  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'aws-0-ap-south-1.pooler.supabase.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres.dsbstoloyppvfghqyxtm'),
      password: env('DATABASE_PASSWORD', 'FtYpEmVCa3DbQZy5'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    useNullAsDefault: true
  }
});
