pipeline {
    agent any

    stages {
        stage('Docker Build') {
            steps {
                sh '''
                docker build -t nextjs-app .
                docker rm -f nextjs-container || true
                docker run -d -p 3000:3000 --name nextjs-container nextjs-app
                '''
            }
        }
    }
}