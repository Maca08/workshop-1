FROM node:18-alpine AS base

# Install dependencies
FROM base AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Build dependencies
COPY package.json package-lock.json ./
COPY front/package.json ./front/
RUN npm install --frozen-lockfile


# Build app
FROM base AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN yarn workspace front build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/front/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/front/.next/static ./front/.next/static
COPY --from=builder /app/front/next.config.js ./front/next.config.js

USER nextjs

EXPOSE 3005

ENV PORT 3005

CMD ["node", "front/server.js"]
