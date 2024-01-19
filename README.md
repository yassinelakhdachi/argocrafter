# Argocrafter: Crafting Kubernetes Deployments (Automated Deployments with ArgoCD)

This project employs a GitOps approach to automate the Continuous Integration/Continuous Deployment (CI/CD) pipeline for Java-based applications:
 1. Automates the entire Maven-based project lifecycle.
 2. Publishes project updates to Docker Hub.
 3. Conduct static code analysis via SonarQube.
 4. Deploy the application on Minikube.
 5. Implements a GitOps approach, ensuring automatic image updates after each commit.

## Architecture Overview

This project uses a Continuous Integration and Continuous Deployment (CI/CD) pipeline to automate the process of integrating code changes from multiple contributors, testing the changes, and deploying them to production. 
The pipeline is visualized in the accompanying diagram.

![argocrafter](https://github.com/yassinelakhdachi/argocrafter/assets/94399032/1cd942c6-d21b-4ab6-a0e0-ccde6ecf42d9)

## Workflow Steps

1. **Webhook Trigger**: A webhook from the source code repository triggers the Jenkins automation server.
2. **Jenkins**: Jenkins orchestrates the build by invoking Maven to compile the source code.
3. **Maven**: Maven is a build automation tool used primarily for Java projects. It compiles the code and generates the artefact.
4. **SonarQube**: The compiled code is then analyzed by SonarQube for code quality checks.
5. **Automated Tests**: If the code passes quality checks, it moves on to the testing phase where automated tests are run.
6. **Docker Image Creation**: Upon passing tests, a new Docker image is created and pushed to Dockerhub.
7. **Image Updater**: The new Docker image triggers an update in the manifests repository.
8. **Argo CD**: Argo CD, a declarative, GitOps continuous delivery tool, detects changes in the manifests repository and deploys the new image to Kubernetes.


