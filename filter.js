const movies=[
    {title:'Amadeus',
    score:9.8},
    {title:'Gone by Wind',
     score:9.9},
    {title:'hanibal',
    score:7.7},
    {title:'seven',
    score:8.7},
    {title:'big lebowski',
    score:7.4},
    {title:'movie 43',
    score:5.6}
]
const greatMovies=movies.filter((i)=>(i.score>7))
const greatTitles=movies.filter(i=>i.score>7).map(i=>i.title)
const badMovies=movies.filter(i=>i.score<6).map(i=>i.title)