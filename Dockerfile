# # 멀티스테이지 빌드 방식
# # 1️⃣ Base stage: 빌드 환경 (Node.js 포함)
# FROM node:20 AS builder

# # 작업 디렉토리 설정
# WORKDIR /app

# # package.json과 lock 파일 복사 후 의존성 설치
# COPY package.json package-lock.json ./
# RUN npm install --frozen-lockfile

# # 프로젝트 파일 복사 및 Next.js 빌드
# COPY . .
# RUN npm run build

# # -----------------------------------------------------

# # 2️⃣ Production stage: 실행 환경 (경량 Alpine 사용)
# FROM node:20-alpine AS runner

# WORKDIR /app

# # production mode 설정
# ENV NODE_ENV=production

# # builder 단계에서 빌드된 파일을 실행 환경으로 복사
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/node_modules ./node_modules

# # Next.js 실행
# CMD ["npm", "start"]



# Node 20 사용 (버전 선택 가능)
FROM node:20

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 복사 및 설치
COPY package.json package-lock.json ./
RUN npm install

# 소스 코드 복사
COPY . .

# 앱 실행
CMD ["npm", "run", "start"]
