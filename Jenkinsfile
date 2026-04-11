pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                nodejs('nodejs') {
                    sh 'node -v'
                    sh 'npm -v'
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                nodejs('nodejs') {
                    sh 'echo Build done'
                }
            }
        }
    }
}
