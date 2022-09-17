pipeline {
  agent any
  stages {
    stage('CheckOut Code') {
      steps {
        git(url: 'https://github.com/adithyapaib/Jenkins', branch: 'master')
        sh 'ls -l '
      }
    }

    stage('Build') {
      steps {
        sh 'ls -l'
        sh '''
docker build .'''
      }
    }

    stage('Login To DockerHub') {
      agent {
        node {
          label 'dockerhub'
        }

      }
      steps {
        sh 'docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD'
      }
    }

    stage('Push To DockerHub') {
      steps {
        sh 'docker push adithyapaib/nodeapp:latest'
      }
    }

  }
}