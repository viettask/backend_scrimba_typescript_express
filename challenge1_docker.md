Challenge:
1. Run "docker run -it --rm --init node:22-alpine node"
2. From the node REPL, log "Hello from Docker!"
        console.log("Hello from Docker!")
3. Exit the REPL by typing ".exit".
4. Check the images you have locally stored by using the "images" command.
    docker images
5. Check that the container was automatically removed.
    docker ps -a
hint.md for help!