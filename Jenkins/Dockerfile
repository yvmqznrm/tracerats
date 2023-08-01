FROM jenkins/jenkins:lts-jdk11

ENV CASC_JENKINS_CONFIG=/var/jenkins_home/casc.yaml
ENV JAVA_OPTS="-Djenkins.install.runSetupWizard=false ${JAVA_OPTS:-}"

COPY ./casc.yaml /var/jenkins_home/casc.yaml

COPY ./plugins.txt /var/jenkins_home/plugins.txt

RUN jenkins-plugin-cli -f /var/jenkins_home/plugins.txt

VOLUME /var/jenkins_home
