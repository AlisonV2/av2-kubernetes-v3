# Alison Vandromme - Ynov M1 Docker Elective
Kubernetes - V3

<i>Note: 

V1 & V2 were mostly to learn the basic concepts of Kubernetes.
I didn't want to modify them as I'd like to keep the learning steps available. 
Hence, the multiple repos.
</i>

## App description

- Users-API: Creates users and Logs users 
- Auth-API: Generate and verify tokens for authenticated users
- Task-API: Stores users tasks in a file and received a token to be verified

<i>Note: Dummy data, there is no database (so far)</i>

## Stack 

<img src="https://img.shields.io/badge/kubernetes-326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white"/> <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" /> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />

## Architecture

<img src="archi.jpg">

## Method used

### Step 1: Node/Express Apps

- Created user-API
- Created auth-API
- Created tasks-API
- Tested each app individually with npm start and Postman
### Step 2: Dockerized APIs

- Created Dockerfile for each API
- Created docker-compose 
- Tested with : 

```sh
docker-compose up --build
```

<i>Note: Didn't add volumes, I want to focus on containers and pods interactions</i>

### Step 3: Deployment & Service Creation for User API

- Verify that Minikube is up and running with

```sh
minikube status
```

- If it's not running, then : 

```sh
minikube start
```

- Check if there is no ungoing deployments or services

```sh
kubectl get deployments
kubectl get services
```

- Modified users-app.js so it doesn't make any requests for now to auth-api
- Built image and pushed it to DockerHub

```sh
docker build -t alisonv2/kub-v3 .
docker push 
```

- Created users-deployment.yaml and applied it
- Verify that pod is up and running
- Created users-service.yaml and applied it
- Expose service with Minikube
- Tested the service with Postman at {minikube-url}/login (passing email and password)

```sh
cd ..
cd kubernetes
kubectl apply -f users-deployment.yaml
kubectl get pods
kubectl apply -f users-service.yaml
minikube service users-service
```

### Step 4: 


