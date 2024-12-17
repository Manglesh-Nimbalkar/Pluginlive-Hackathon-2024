# Use the latest Node.js image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps
# RUN npm install --save-dev eslint eslint-config-next eslint-plugin-next --legacy-peer-deps


# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Use the PORT environment variable Render provides, default to 3000
ENV PORT=3000

# Expose the dynamic port
EXPOSE $PORT

# Define the command to run the application in production
CMD ["npm", "run", "start"]