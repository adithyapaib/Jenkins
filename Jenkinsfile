pipeline {
  agent any
  stages {
    stage('CheckOut Code') {
      steps {
        git(url: 'https://github.com/adithyapaib/Jenkins', branch: 'master')
      }
    }

    stage('') {
      steps {
        sh 'ls -ls'
      }
    }

  }
}