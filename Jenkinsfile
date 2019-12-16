pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
      dir 'tools/ci-container'
    }
  }

  options {
    buildDiscarder(logRotator(numToKeepStr: '10'))
  }

  environment {
    HOME = '.'
  }

  stages {

    stage('Validate') {
      parallel {
        stage('Test') {
          steps {
            sh 'echo "Validate is happening."'
          }
        }

        stage('Lint') {
          steps {
            sh 'echo "Validate is happening."'
          }
        }

        stage('Build') {
          steps {
            sh 'echo "Validate is happening."'
          }
        }
      }
    }

    stage('Deploy') {
      when {
        branch 'master'
      }

      steps {
        // sh "docker build . -t docker.dd.deloitte.com:80/ost-pilot:${env.BUILD_NUMBER} -t docker.dd.deloitte.com:80/ost-pilot:latest"

        // withDockerRegistry([ credentialsId: "nexus-user", url: "https://docker.dd.deloitte.com:80" ]) {
        //   sh "docker push docker.dd.deloitte.com:80/ost-pilot:${env.BUILD_NUMBER}"
        //   sh "docker push docker.dd.deloitte.com:80/ost-pilot:latest"
        // }
        echo "Deploying, son."

      }
    }


  }

  post {
    always {
      echo 'DONE!'
    }
  }
}