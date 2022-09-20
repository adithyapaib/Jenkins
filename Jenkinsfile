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
        sh '''#!/bin/bash -x

# this only works if the docker group does not already exist

DOCKER_SOCKET=/var/run/docker.sock
DOCKER_GROUP=docker

if [ -S ${DOCKER_SOCKET} ]; then
    DOCKER_GID=$(stat -c \'%g\' ${DOCKER_SOCKET})
    groupadd -for -g ${DOCKER_GID} ${DOCKER_GROUP}
    usermod -aG ${DOCKER_GROUP} ${JENKINS_USER}
fi
docker build -t adithyapaib/nodeapp:latest .'''
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