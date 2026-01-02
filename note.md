1. npm init -y

2. npm i express

3. npm i -D typescript

4. npm i -D @types/express

check node version and install ts match with that version 
5. npm i -D @tsconfig/node20

6. Node does not know TS
npx tsc
ls dist
cat dist/index.js
node dist/index.js
7. delete "script" "test" in package.json
  "scripts": {
    "build": "npx tsc"
  }

  to build & run the program in one go.
  CHALLENGE
    "0": "Create a start script that",
    "1": "Runs the TypeScript Compiler, then",
    "2": "Runs the compiled app in 'dist/index.js'",
    "HINT": "You can chain commands with &&"
    
    "scripts": {
    "build": "npx tsc",
    "start": "npx tsc && node dist/index.js"
  }


Docker 
1. docker run hello-world
2. docker run -p 8080:80 nginx
    http://localhost:8080

3. docker ps
4. docker stop <Name or Id of container>
5. docker start
6. docker rm <Nama or ID>
7. docker ps -a //List all containers (including stopped ones)
8. docker run -it --rm --init node:22-alpine node
    -it makes the container interactive, so we can type into it
    -rm makes docker automatically delete container when we're done
    -init helps clean up processes when we exit
    node:22-alpine is the image we want
    node tells Docker to start the Node REPL

.gitignore
git rm -r --cached node_modules/
git check-ignore -v node_modules