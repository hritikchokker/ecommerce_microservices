# Stage 1: Build the React app
FROM node:14 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm i

# Copy the rest of the app's source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the built app with a lightweight web server
FROM node:14-alpine

WORKDIR /app

# Install a lightweight HTTP server
RUN npm install -g serve

# Copy the built app from the previous stage
COPY --from=build /app/dist ./dist

# Set the environment variables, if required
# ENV REACT_APP_API_URL=http://example.com/api

# Expose the desired port (default is 5000 for serve)
EXPOSE 3004

# Start the server
CMD ["serve", "-s", "dist", "-l", "3004"]
