
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

// https://api.github.com/users/ushahipparkar
const githubData={
  "login": "UshaHipparkar",
  "id": 120270478,
  "node_id": "U_kgDOBysujg",
  "avatar_url": "https://avatars.githubusercontent.com/u/120270478?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/UshaHipparkar",
  "html_url": "https://github.com/UshaHipparkar",
  "followers_url": "https://api.github.com/users/UshaHipparkar/followers",
  "following_url": "https://api.github.com/users/UshaHipparkar/following{/other_user}",
  "gists_url": "https://api.github.com/users/UshaHipparkar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/UshaHipparkar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/UshaHipparkar/subscriptions",
  "organizations_url": "https://api.github.com/users/UshaHipparkar/orgs",
  "repos_url": "https://api.github.com/users/UshaHipparkar/repos",
  "events_url": "https://api.github.com/users/UshaHipparkar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/UshaHipparkar/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 3,
  "following": 1,
  "created_at": "2022-12-10T16:48:14Z",
  "updated_at": "2025-11-10T09:18:13Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter', (req,res)=>{
    res.send('USHA')
})

app.get('/login',(req,res)=>{
res.send('<h1>Please Login at Usha code</h1>')
})

app.get('/github',(req,res)=>{
res.send(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
