pipeline {
    agent {
        docker {
            image 'docker:24.0.5'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    environment {
        IMAGE_NAME = 'nextjs-app'
        CONTAINER_NAME = 'nextjs-container'
    }

    stages {
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
