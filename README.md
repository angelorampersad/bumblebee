# JET Analytics Platform Hub

## Local Development
1. First spin up a detached Postgres docker container:
    ```
    docker-compose -f .infrastructure/postgres/docker-compose.dev.yaml up -d
    ```
    When done, the database can be deleted using:
    ```
    docker-compose -f .infrastructure/postgres/docker-compose.dev.yaml down
    ```
2. Set the database connection URL in `client/.env`:
```
DATABASE_URL="postgresql://postgres:changeme@localhost:5432/postgres?schema=public"
```
3. Enter the `/client` directory and install the project:
```
npm install
```
4. Generate Postgres database schema:
```
npx prisma migrate deploy
```
5. Seed the database:
```
npx prisma db seed
```
6. Run the app:
```
npm run dev
```

## Interact with Postgres DB directly
In order to inspect the database structure you can connect through `psql`:
```bash
psql postgresql://postgres:changeme@localhost:5432/postgres
```

Or use the Prisma UI:
```
npx prisma studio
```