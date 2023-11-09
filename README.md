# argocrafter

## Technical Architecture
![readme1](https://github.com/yassinelakhdachi/argocrafter/assets/94399032/53f80e4a-73c4-44dc-b2ce-8c9cdfd71f48)

## Crafting Kubernetes Deployments (Automated Deployments with ArgoCD)

This project employs a GitOps approach to automate the Continuous Integration/Continuous Deployment (CI/CD) pipeline for Java-based applications. It leverages a variety of tools:

- <span style="color:blue">**Jenkins**</span> for building, testing, and packaging.
- <span style="color:green">**SonarQube**</span> for static code analysis.
- <span style="color:red">**Docker**</span> for packaging and containerization.
- <span style="color:orange">**Kubernetes**</span> for container orchestration.
- <span style="color:purple">**Argo CD**</span> for automated deployment.

**Key Highlights:**

- Automates the entire Maven-based project lifecycle.
- Publishes project updates to Docker Hub.
- Conducts static code analysis via SonarQube.
- Deploys the application on Minikube.
- Implements a GitOps approach, ensuring automatic image updates after each commit.


