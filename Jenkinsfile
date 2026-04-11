pipeline {
    agent any

    environment {
        IMAGE_NAME = 'nextjs-app'
        CONTAINER_NAME = 'nextjs-container'
    }

    stages {
        // stage('Install Dependencies') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }

        // stage('Build Next.js App') {
        //     steps {
        //         sh 'npm run build'
        //     }
        // }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f $CONTAINER_NAME || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME'
            }
        }
    }
}
