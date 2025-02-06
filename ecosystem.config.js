module.exports = {
  apps: [
    {
      name: "PayTimeApp",
      script: "npm", // 실행할 프로그램 (Next.js의 경우 npm 실행)
      args: "start", // npm 실행 시 사용할 인자
      instances: 0, // CPU 코어 수만큼 프로세스 생성 (0 = 자동)
      exec_mode: "cluster", // 클러스터 모드 실행
      env: {
        NODE_ENV: "production", // 운영 환경 설정
        PORT: 3000 // Next.js가 실행될 포트
      }
    }
  ]
};

