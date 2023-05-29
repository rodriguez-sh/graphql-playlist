# graphql-playlist

I consider this a good introduction to GraphQL. At the time I forked this project, many libraries used in the original course were deprecated or are outdated.

Here I am maintaining an updated version so we can make it work. Also a link to a docker image that can be used to pull and run.

Forked from GraphQL tutorial playlist on The Net Ninja YouTube channel https://www.youtube.com/watch?v=Y0lDGjwRYKw


# Run the app
There is a ready-to-use docker image that can help to avoid the installation/configuration of the required stack to run the app. To do so:

- Clone this project in your local workspace
- Following the instructions in the tutorial, configure a MongoDB database and replace the connection parameters in the graphql-playlist/server/app.js file, line 11
- Run the docker image to pull a ready-to-use imge with all the required stack to run the application. This will allow also mount the current project as a volume from the host into the container and map the required ports to run the app locally

`$ docker run -it --name graphql-server -v graphql-playlist:/graphql-playlist -p 4000:4000 -p 3000:3000 rodriguezsh/graphql-playlist bash`

- The previous command will open a bash console in the container that will allow to run the backend server. Once we are within the container we download the server dependencies and run the server:

`# cd graphql-playlist/server`

`# npm install`

`# nodemon app`

- From the host, open a second container terminal, download the client's dependencies and run the client

`$ docker exec -it graphql-server bash`

`# cd graphql-playlist/client`

`# npm install`

`# npm start`
