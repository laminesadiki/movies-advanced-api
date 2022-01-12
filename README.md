# Documentation to use the API endpoint

## GET All movies
GET /movies
example => http://localhost:5000/movies

## GET a movie by id
GET /movies/id/:id
example => http://localhost:5000/movies/id/22

## GET a movie by title
GET /movies/title/:title
example => http://localhost:5000/movies/title/Inception

## GET a movie by runtime
GET /movies/runtime/:runtime
example => http://localhost:5000/movies/runtime/60

## GET a movie by year
 GET /movies/year/:year
 example => http://localhost:5000/movies/year/2015

## GET a movie by genre
GET /movies/genre/:genre

example => http://localhost:5000/movies/genre/Comedy

## GET a movie by director
GET /movies/director/director
example => http://localhost:5000/movies/director/Tim Burton

## GET a movie by actor
GET /movies/actor/:actor
example => http://localhost:5000/movies/actor/Geena Davis

## GET all movies ordered by year
The order by default is asc
GET /movies/orderbyyear
example => http://localhost:5000/movies/orderbyyear
AND
GET /movies/orderbyyear?order=asc
example => http://localhost:5000/movies/orderbyyear?order=asc

To have the order desc use this request method : 
GET /movies/orderbyyear?order=desc
example => http://localhost:5000/movies/orderbyyear?order=desc

## GET all movies ordered by title
The order by default is asc
GET /movies/orderbytitle
example => http://localhost:5000/movies/orderbytitle
AND
GET /movies/orderbytitle?order=asc
example => http://localhost:5000/movies/orderbytitle?order=asc

To have the order desc use this request method : 
GET /movies/orderbytitle?order=desc
example => http://localhost:5000/movies/orderbytitle?order=desc

## GET all movies ordered by runtime
The order by default is asc
GET /movies/orderbyruntime
example => http://localhost:5000/movies/orderbyruntime
AND
GET /movies/orderbyruntime?order=asc
example => http://localhost:5000/movies/orderbyruntime?order=asc

To have the order desc use this request method : 
GET /movies/orderbyruntime?order=desc
example => http://localhost:5000/movies/orderbyruntime?order=desc

## add new movie
POST /movies/api/admin

## delete a movie
DELETE /movies/api/admin

## edit a movie
PATCH /movies/api/admin