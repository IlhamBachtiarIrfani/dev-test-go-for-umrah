# Running a Next.js Application Locally

## Prerequisites
- Node.js installed on your machine
- npm or yarn or pnpm or bun package manager installed

## Steps
1. Clone the repository:
   ```
   git clone https://github.com/IlhamBachtiarIrfani/dev-test-go-for-umrah
   ```

2. Navigate to the project directory:
   ```
   cd dev-test-go-for-umrah
   ```

3. Install dependencies:
   ```
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

4. Config environment variables
   ```
   # set api service url
   NEXT_PUBLIC_API_URL=

   # generate next auth secret
   NEXT_AUTH_SECRET=

   # set app path url
   APP_PATH=http://localhost:3000
   ```


5. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

# Running a Next.js Application Using Docker

## Prerequisites
- Docker installed on your machine

## Steps
1. Clone the repository:
   ```
   git clone https://github.com/IlhamBachtiarIrfani/dev-test-go-for-umrah
   ```

2. Navigate to the project directory:
   ```
   cd dev-test-go-for-umrah
   ```

3. Config environment variables
   ```
   # set api service url
   NEXT_PUBLIC_API_URL=

   # generate next auth secret
   NEXT_AUTH_SECRET=

   # set app path url
   APP_PATH=http://localhost:3000
   ```

4. Install dependencies:
   ```
   docker compose up -d --build
   ```

5. Open your web browser and navigate to [http://localhost:9300](http://localhost:9300) to view the application.
