# ---------------------------------------
# Stage 1: Build React App
# ---------------------------------------
FROM node:20-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the optimized React app
RUN npm run build


# ---------------------------------------
# Stage 2: Serve with Nginx
# ---------------------------------------
FROM nginx:stable-alpine

# Copy built app from builder to nginx public dir
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: overwrite default nginx config for SPA routing
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for external access
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
